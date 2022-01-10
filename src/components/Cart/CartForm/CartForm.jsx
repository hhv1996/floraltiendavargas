import React, { useContext } from 'react'
import { useState } from 'react'
import BuyerContextProvider from '../../../context/BuyerContext'
import './CartForm.css'

const CartForm = ({ isOpen, closeModal, title}) => {
    const [auxBuyer,setAuxBuyer] = useState({
        name:"",
        phone:"",
        mail:""
    })
    const {name,setBuyer} = useContext(BuyerContextProvider)
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
    const changeInput = (e)=>{
        setAuxBuyer({
            ...auxBuyer,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div className={`cartFormContainer ${name===""? 'cartForm-open':""}`} onClick={closeModal}>
            <div className="cartForm-dialog" onClick={handleModalDialogClick}>
            <form>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-10">
                        <input onChange={changeInput} type="text" className="form-control" id="name" name='name' placeholder="Nombre"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onChange={changeInput} type="email" className="form-control" id="inputEmail3" name='mail' placeholder="Email"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">Telefono</label>
                    <div className="col-sm-10">
                        <input onChange={changeInput} type="text" className="form-control" id="phone" name='phone' placeholder="Telefono"/>
                    </div>
                </div>
            </form>
            <br/>
            <button className="btn btn-primary" onClick={()=>{setBuyer(auxBuyer.name,auxBuyer.phone,auxBuyer.mail)}}>Guardar</button>
            </div>
        </div>
    )
}

export default CartForm
