import React from "react";
import s from "./Contact.module.scss";
import {ContactForm} from "../common/Form/Form";


export const Contact = () => {
    return (
        <div className={s.freelance} id={"contact"}>
            <h2 className={s.title}>Contact</h2>
            <ContactForm/>
        </div>
    );
}