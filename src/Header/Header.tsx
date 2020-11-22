import React from "react";
import s from "./Header.module.scss"
// @ts-ignore
import {Link} from "react-scroll/modules";
export type MapStateToPropsTypes = {
    open: boolean
}
export type MapDispatchToPropsTypes = {
    openItemsOnClick: ()=> void
}
export type OwnPropsTypes = {

}


type HeaderPropsType = MapStateToPropsTypes & MapDispatchToPropsTypes & OwnPropsTypes

export const Header = (props:HeaderPropsType) =>{
    let open = props.open ? s.open : "";
    return(
        <div className={s.container}>
        <div className={s.header}>
            <nav className={`${s.menu} ${open}`}>
                <button className={s.hamburgerMenu } onClick={props.openItemsOnClick}>
                    <span className={`${s.hamburger} ${open}`}></span>
                    <span className={`${s.hamburgerOverlay} ${open}`}></span>
                </button>
                <ul className={s.menuList}>
                    <li className={s.menuListItem}>
                        <Link to={"main"} activeClass={s.active} className={s.menuListLink} smooth={true} duration={1000} spy={true}>Main</Link>
                    </li>
                    <li className={s.menuListItem}>
                        <Link to={"skills"} activeClass={s.active} className={s.menuListLink} smooth={true} duration={1000} spy={true}>Skills</Link>
                    </li>
                    <li className={s.menuListItem}>
                        <Link to={"projects"} activeClass={s.active} className={s.menuListLink} smooth={true} duration={1000} spy={true}>Projects</Link>
                    </li>
                    <li className={s.menuListItem}>
                        <Link to={"contact"} activeClass={s.active} className={s.menuListLink} smooth={true} duration={1000} spy={true}>Contacts</Link>
                    </li>

                </ul>
            </nav>
        </div>
        </div>
    );
}