import React from "react";
import lama from  "../assets/img/LamaBig.jpg"
import {Back} from "../common/Back/Back";
export const Lama = () => {
    return (
        <>
            <div>
                <Back/>
                <img src={lama} alt="coffee" style={{marginTop: "-60px"}}/>
            </div>
        </>
    )

}