import React, {useState } from 'react'

const Context = React.createContext()

export const BuyerContextProvider = ({children}) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")

    const setBuyer= (name,phone,mail)=>{
        if (name!==""&&phone!==""&&mail!=="") {
            setName(name)
            setPhone(phone)
            setMail(mail)
        }
    }

    return (
        <Context.Provider value={{
            name: name,
            phone:phone,
            mail: mail,
            setBuyer
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context