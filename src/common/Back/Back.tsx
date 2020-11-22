import React from "react";
import s from "./Back.module.scss"

let GoBack = function () {
    window.history.back();
}
export const Back = () => {
    return (
        <span className={s.back} onClick={GoBack}>
            Back
    </span>)
}