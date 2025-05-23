import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController {

     index = async (request: Request, response: Response) => {
        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                error: 'Missing filters to search classes'
            });
        }
    
        const timeInMinutes = convertHourToMinutes(time);
        
        const classes = await db('classes')
        .whereExists(function() {
            this.select('classe_schedule.*')
            .from('classe_schedule')
            .whereRaw('`classe_schedule` . `class_id` = `classes`. `id`')
            .whereRaw('`classe_schedule` . `week_day` = ??', [Number(week_day)])
            .whereRaw('`classe_schedule` . `from` <= ??', [timeInMinutes])
            .whereRaw('`classe_schedule` . `to` > ??', [timeInMinutes])

        })
        .where('classes.subject', '=', subject)
        .join('users', 'classes.user_id', '=', 'user_id')
        .select(['classes. *', 'users.*']);

        return response.json(classes);
    }


     create = async (request: Request, response: Response) => {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;

        const trx = await db.transaction();

        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });

            const user_id = insertedUsersIds[0];

            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            });

            const class_id = insertedClassesIds[0];

            const class_schedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                }
            })

            await trx('classe_schedule').insert(class_schedule);

            await trx.commit();

            return response.status(201).send();
        } catch (err) {
            await trx.rollback();

            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    }
};
