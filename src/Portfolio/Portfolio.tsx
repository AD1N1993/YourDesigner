import React from "react";
import {HeaderContainer} from "../Header/HeaderContainer";
import {Main} from "../Main/Main";
import {Skills} from "../Skills/Skils";
import {MyWorksContainer} from "../MyWorks/MyWorksContainer";
import {Freelance} from "../Freelance/Freelance";
import {Contact} from "../Contact/Contact";
import {Footer} from "../Footer/Footer";


export const Portfolio = () => {
    return (
        <>
          <HeaderContainer/>
          <Main/>
          <Skills/>
          <MyWorksContainer/>
          <Freelance/>
          <Contact/>
          <Footer/>
        </>
    )

}