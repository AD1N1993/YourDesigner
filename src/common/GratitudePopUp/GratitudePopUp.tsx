import React from "react";
import s from "./GratitudePopUp.module.scss"
import thank from "../../assets/img/thank.png"


export const GratitudePopUp = () => {
    return (
        <div className={s.overlay}>
            <div className={s.wrapperMessage}>
                <img src={thank} alt="thanks"/>
            </div>
        </div>
    )
}