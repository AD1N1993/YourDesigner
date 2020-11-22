import axios from "axios"

const instance = axios.create({
    baseURL:"https://smtpnodejsserver.herokuapp.com/",
})

export const gmailAPI = {
    sendMessage:(name:string, mail: string,message:string)=>{
        return instance.post("sendMessage", {name,mail,message})
    }
}