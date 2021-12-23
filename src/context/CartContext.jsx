import React, { useEffect, useState } from 'react'

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [cantItems, setCantItems] = useState(-1)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let auxProducts = [...products]
        let cantProd = auxProducts.reduce( (previousValue, currentValue) => previousValue + currentValue.quantity, 0);
        let sumPrice = auxProducts.reduce( (previousValue, currentValue) => previousValue + parseFloat(currentValue.price,10), 0);
        setCantItems(cantProd)
        setTotalPrice(sumPrice)
    },[products]);
    const addItem = (product,quantity) => {
        let auxProducts = [...products]
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
                product.quantity=quantity
                auxProducts.push(product)
                setProducts(auxProducts)
            }
        }
    }
    const removeItem = (id) => {
        let auxProducts = products.filter (p=>p.id!==id)
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
    const modify = (id,quantity)=>{
        let auxProducts = [...products]
        auxProducts.map(p=>{
           if( p.id===id)
                p.quantity=quantity
            return p
        })
        setProducts(auxProducts)
    }    
    return (
        <Context.Provider value={{
            productsList: products,
            addItem,
            removeItem,
            clear,
            isInCart,
            modify,
            cantItems: cantItems,
            totalPrice:totalPrice
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context