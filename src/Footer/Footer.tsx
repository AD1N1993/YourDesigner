import React from "react";
import s from "./Footer.module.scss"

// @ts-ignore
import * as Scroll from 'react-scroll';

export const Footer = () => {
const scroolTop =()=>{
Scroll.animateScroll.scrollTo(0);
}
    return (
        <footer className={s.footer}>
            <h2 className={s.footerTitle} onClick={scroolTop}>Your Designer</h2>
            <ul className={s.socialList}>
                <li className={s.socialListItem}>
                    <a href="https://www.instagram.com/katerina_grivickaya_/" className={s.socialListLink} target={"blank"}>Instagram</a>
                </li>
                <li className={s.socialListItem}>
                    <a href="https://www.linkedin.com/in/%D0%B5%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0-%D0%B3%D1%80%D0%B8%D0%B2%D0%B8%D1%86%D0%BA%D0%B0%D1%8F-7b5a781bb/" className={s.socialListLink} target={"blank"}>Linkedin</a>
                </li>
                <li className={s.socialListItem}>
                    <a href="https://www.fl.ru/users/ekgriv94/portfolio/" className={s.socialListLink} target={"blank"}>FL</a>
                </li>
                <li className={s.socialListItem}>
                    <a href="https://t.me/katerina_grivickaya" className={s.socialListLink} target={"blank"}>Telegram</a>
                </li>
                <li className={s.socialListItem}>
                    <a href="https://vk.com/katrina_smile" className={s.socialListLink} target={"blank"}>Vkontakte</a>
                </li>
            </ul>
            <span className={s.copyRight}>© 2020 Minsk, All Rights Reserved.</span>
        </footer>
    );
}