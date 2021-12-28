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
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Nombre</label>
                    <div class="col-sm-10">
                        <input onChange={changeInput} type="text" class="form-control" id="name" name='name' placeholder="Nombre"/>
                    </div>
                </div>
                <br/>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input onChange={changeInput} type="email" class="form-control" id="inputEmail3" name='mail' placeholder="Email"/>
                    </div>
                </div>
                <br/>
                <div class="form-group row">
                    <label for="phone" class="col-sm-2 col-form-label">Telefono</label>
                    <div class="col-sm-10">
                        <input onChange={changeInput} type="text" class="form-control" id="phone" name='phone' placeholder="Telefono"/>
                    </div>
                </div>
            </form>
            <br/>
            <button class="btn btn-primary" onClick={()=>{setBuyer(auxBuyer.name,auxBuyer.phone,auxBuyer.mail)}}>Guardar</button>
            </div>
        </div>
    )
}

export default CartForm
