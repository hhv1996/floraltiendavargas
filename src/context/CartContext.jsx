import React, { useState } from 'react'

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const addItem = (product,quantity) => {
        let auxProducts = products
        if (isInCart(product.id)) {
            const browserFunction = (p) => p.id === product.id
            let index = auxProducts.findIndex(browserFunction)
            auxProducts[index].quantity=auxProducts[index].quantity+quantity
            setProducts(auxProducts)
        }else{
            if (products.length===0) {
                let auxProduct = []
                auxProduct.push(product)
                auxProduct[0].quantity=quantity
                setProducts(auxProduct)
            }else{
                let auxProduct = product
                auxProduct.quantity=quantity
                auxProducts.push(auxProduct)
            }
        }
        console.log(products)
    }
    const removeItem = (id) => {
        let auxProducts = products
        const browserFunction = (p) => p.id === id
        let index = auxProducts.findIndex(browserFunction)
        auxProducts.splice(index,1)
        setProducts(auxProducts)
    }    
    const clear = () => {
        setProducts([])
    }
    const isInCart = (id) => {
        let returnFunction = false
        let foundProduct = products.find(p=>p.id===id)
        if (foundProduct!==undefined) {
            returnFunction=true
        }
        return returnFunction
    }
    return (
        <Context.Provider value={{
            productsList: products,
            addItem,
            removeItem,
            clear,
            isInCart
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context