import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./style.css";

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://th.bing.com/th/id/OIP.fzdTVyFieOGIhP-4I9fxogHaHa?w=171&h=180&c=7&r=0&o=5&pid=1.7"
                    alt="Gustavo Guanabara"
                />
                <div>
                    <strong>Gustavo Guanabara</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de programação.
                <br /><br />
                Apaixonado por ensinar pessoas a programar.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;