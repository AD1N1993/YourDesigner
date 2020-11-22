import React from "react";
import s from "./Button.module.scss";

type PropsType = {
    value: string
    onClick?: ()=>void
    mode?: "black" | "white"
}

export const Button = (props:PropsType) => {
    return (
        <div className={s.freelance}>
            <button className={`${s.btn} ${props.mode === "black"? s.black:""} `} onClick={props.onClick}>{props.value}</button>
        </div>
    );
}