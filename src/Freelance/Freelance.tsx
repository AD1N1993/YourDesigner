import React from "react";
import {Title} from "../common/Title/Title";
import s from "./Freelance.module.scss";
import {Button} from "../common/Button/Button";


export const Freelance = () => {
    return (
        <div className={s.freelance}>
            <Title title={"I Am Available For Freelancer"}/>
            <a href="https://www.fl.ru/users/ekgriv94/portfolio/" target={"blank"}><Button value={"Hire" +
            " Me"}/></a>
        </div>
    );
}