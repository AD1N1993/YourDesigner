import React from "react";
import s from "./Title.module.scss";

type TitlePropsTitle = {
    title: string
}
export const Title = (props:TitlePropsTitle) => {
    return  <h2 className={s.title}>{props.title}</h2>
}