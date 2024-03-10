import {useState} from "react";

export const useShowState = (initState=true) =>{
    const [show, setShow] = useState(initState)
    const setShowFalse = (timeout=2000) => {
        setTimeout(() => {
            setShow(false)
        }, timeout)
    }
    return [show, setShow, setShowFalse]
}