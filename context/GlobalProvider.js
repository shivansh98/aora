import { createContext,useContext, useState,useEffect } from "react";
import { GetCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext()

export const useGlobalContext = () =>{ return useContext(GlobalContext)}


export default  GlobalProvider = ({children})=>{
    const [isLoading, setisLoading] = useState(true)
    const [isLoggedIn, setisLoggedIn] = useState(false)    
    const [user, setUser] = useState(null)

    useEffect(()=>{
        GetCurrentUser().then((res)=>{
            if(!res){
                setUser(null)
                setisLoggedIn(false)
            }else{
                setUser(res)
                setisLoggedIn(true)
            }
        }).catch((error)=>{
            console.log(error)
        }).finally(()=>{
            setisLoading(false)
        })
    })

    return <GlobalContext.Provider value={{isLoading,isLoggedIn,user,setUser,setisLoggedIn}}>
        {children}
    </GlobalContext.Provider>
}