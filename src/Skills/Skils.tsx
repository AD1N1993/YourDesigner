import React, {useEffect} from "react";
import s from "./Skills.module.scss"
import {Skill} from "./Skill/Skill";
import {Title} from "../common/Title/Title";
import timeManagement from "../assets/img/timeManagement.svg"
import designTools from "../assets/img/designTools.svg"
import uxuiDesign from "../assets/img/uxuiDesign.svg"
import graficDesign from "../assets/img/graficDesign.svg"
import communication from "../assets/img/communication.svg"
import adaptiveDesign from "../assets/img/adaptiveDesign.svg"
import 'aos/dist/aos.css';
import Aos from "aos";

export const Skills = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <section className={s.skills} id={"skills"}>
            <div className={s.container}>
                <Title title={"My Skills"}/>
                <div className={s.skillsWrapper}>
                    <div data-aos="fade-up" data-aos-duration="300">
                        <Skill skill={"Basic Designing Tools "}
                               descr={"Adobe Photoshop, Adobe XD, Figma, Adobe Illustrator."} img={designTools}/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="600">
                        <Skill skill={"UX/UI And Visual Design"}
                               descr={"I create beautiful interfaces based on user experience."} img={uxuiDesign}/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="900">
                        <Skill skill={"Graphic Design"}
                               descr={" It`s the process of visual communication through the use of typography," +
                               " photography, iconography and illustration."}
                               img={graficDesign}/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1200">
                        <Skill skill={"Time Management"} descr={"High self-organization allows you to complete tasks on time."}
                               img={timeManagement}/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500">
                        <Skill skill={"Communication "}
                               descr={"A really good result can be achieved with teamwork."} img={communication}/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1800">
                        <Skill skill={"Adaptive Design"}
                               descr={"I create a design for all mobile devices, so that your application is always at hand."} img={adaptiveDesign}/>
                    </div>
                </div>
            </div>
        </section>
    );
}