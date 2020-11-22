import React, {useEffect} from "react";
import s from "./Skill.module.scss"

type SkillPropsType = {
    skill: string
    descr:string
    img:string
}



export const Skill = (props:SkillPropsType) => {

    return(
        <div className={s.skillWrapper} >
            <div className={s.skillImgBg}>
                <div className={s.skillImgWrapper}>
                <img src={props.img} alt="</>"/>
                </div>
            </div>
            <h3 className={s.skillTitle}>
                {props.skill}
            </h3>
            <p className={s.skillDescribe}>{props.descr}
            </p>
        </div>
    );
}