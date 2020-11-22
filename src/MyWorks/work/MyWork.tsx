import React, {MouseEvent, useEffect} from "react";


import {FilterValueType, WorksType} from "../../state/mainPageReducer";
import Aos from 'aos';
import 'aos/dist/aos.css';
import s from "./MyWork.module.scss"
import { NavLink } from "react-router-dom";


type MyWorkPropsTyPe = {
    filterValue: FilterValueType
    works: Array<WorksType>
    setWorksFilterAC: (filterValue: FilterValueType) => void
}


export const MyWork = (props: MyWorkPropsTyPe) => {
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
    const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        let filterValue = event.currentTarget.value as FilterValueType;
        props.setWorksFilterAC(filterValue)
    }
    let worksForPage = props.works;

    if (props.filterValue === "website") {
        worksForPage = props.works.filter(j => !j.spa)
    }
    if (props.filterValue === "spa") {
        worksForPage = props.works.filter(j => j.spa)
    }

    return (
        <section className={s.workWrapper}>

            <div className={s.container}>
                <div className={s.buttonGroup}>
                    <button className={`${s.btn} ${props.filterValue=== "all"? s.active : ""}`} value={"all"} onClick={(event) => {
                        onClickHandler(event)
                    }}>All
                    </button>
                    <button className={`${s.btn} ${props.filterValue=== "website"? s.active : ""}`} value={"website"} onClick={(event) => {
                        onClickHandler(event)
                    }}>Web App
                    </button>
                    <button className={`${s.btn} ${props.filterValue=== "spa"? s.active : ""}`} value={"spa"} onClick={(event) => {
                        onClickHandler(event)
                    }}>Mobile App
                    </button>
                </div>
                <div className={s.jobsWrapper}>
                    {worksForPage.map(job => <div className={s.jobWrapper} key={job.id} data-aos={job.effect}>
                            <div className={s.jobText}>
                                {job.title !== "Coffee" && job.title !== "Garlic" && job.title !== "Main Screens"&& job.title !== "Lama"
                                    ?<a className={s.jobLink}  href={job.address} target={"blank"}>
                                        <h3 className={s.jobTitle}>{job.title}<span className={s.jobView}> view</span></h3>
                                    </a>
                                    :<NavLink className={s.jobLink} to={
                                        job.address}>
                                        <h3 className={s.jobTitle}>{job.title}<span className={s.jobView}> view</span></h3>
                                    </NavLink>
                                }
                            </div>
                            <div className={s.jobImgWrapper}>
                                <img className={s.jobImg}  src={job.img} alt="card"/>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}

