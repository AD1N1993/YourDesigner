import React from "react";
import s from "./MyWorks.module.scss"
import {Title} from "../common/Title/Title";
import {MyWork} from "./work/MyWork";
import {FilterValueType, WorksType} from "../state/mainPageReducer";

export type MapStateToProps = {
    works:Array<WorksType>
    filterValue: FilterValueType
}

export type MapDispatchToProps = {
    setWorksFilterAC:(filterValue:FilterValueType) => void
}
export type OwnPropsType= {}

type MyWorksPropsType = MapStateToProps & MapDispatchToProps & OwnPropsType


export const MyWorks = (props:MyWorksPropsType) => {
    return (
        <section className={s.myWorks} id={"projects"}>
            <div className={s.container}>
                <h2 className={s.title}>My Works</h2>
                <MyWork works={props.works} setWorksFilterAC={props.setWorksFilterAC} filterValue={props.filterValue}/>
            </div>
        </section>
    );
}