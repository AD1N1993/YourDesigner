import React, {useEffect, useState} from "react";
import s from "./Form.module.scss"
import {Button} from "../Button/Button";
import {useForm} from "react-hook-form";
import {gmailAPI} from "../../api/api";
import {GratitudePopUp} from "../GratitudePopUp/GratitudePopUp";


type DataContactFormType = {
    userName: string,
    userEmail: string,
    textareaMessage: string
}
export const ContactForm = () => {
    const {register, handleSubmit, reset, errors} = useForm<DataContactFormType>();
    const onSubmit = (data: DataContactFormType) => {
        gmailAPI.sendMessage(data.userName, data.userEmail, data.textareaMessage).then()
        setGratitude(true)
        reset()
    }

    const [gratitude, setGratitude] = useState(false)
    useEffect(() => {
        const hideGratitude = setTimeout(() => {
            setGratitude(false)
        }, 1000)
        return () => {
            clearTimeout(hideGratitude)
        }
    }, [gratitude])

    return (
        <>
            {gratitude && <GratitudePopUp/>}
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={s.label} htmlFor="name">
                    <input className={s.input}
                           ref={register(
                               {
                                   required: "Name is required",
                                   minLength: {
                                       value: 2, message: "Min length 2 characters"
                                   },
                                   maxLength: {
                                       value: 10, message: "Max length 10 characters"
                                   },
                               })}
                           autoComplete={"off"}
                           name={"userName"}
                           type="text" id={"name"}
                           placeholder={"Name"}
                    />
                    {errors.userName && <span className={s.error}>{errors.userName.message}</span>}

                </label>
                <label className={s.label} htmlFor="email">
                    <input className={s.input}
                           ref={register({
                               required: 'Email is required',
                               validate: value =>
                                   value.includes('@') || "Email must include '@' symbol",
                           })}
                           autoComplete={"off"}
                           name={"userEmail"}
                           id={"email"}
                           placeholder={"Email"}

                    />
                    {errors.userEmail && <span className={s.error}>{errors.userEmail.message}</span>}
                </label>
                <label className={s.label} htmlFor="textarea">
                   <textarea className={s.input} id={"textarea"}
                             ref={register(
                                 {
                                     required: {value:true, message:"Leave your contact details and I'll contact you as soon as" +
                                             " possible"},
                                 })}
                             name={"textareaMessage"}
                             placeholder={"Your Message"}
                             rows={7}

                   >
                   </textarea>
                    {errors.userEmail && <span className={s.error}>{errors.textareaMessage?.message}</span>}
                </label>
                <Button value={"Send Message"} mode={"black"}/>
            </form>
        </>
    );
}
