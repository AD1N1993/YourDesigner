import React from "react";
import screens from "../assets/img/mainScreen.jpg"
import {Back} from "../common/Back/Back";

export const Screens = () => {
    return (
        <>
            <Back/>
            <img src={screens} alt="screens"/>
        </>
    )

}