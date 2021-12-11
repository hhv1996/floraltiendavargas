import Item from '../Item/Item'





const ItemList = ({ products = []})=>{

    return(
        <div className="card-group container justify-content-center"> 
            {products.map(p => <Item product={p} />)}
        </div>
        
    )
} 
export default ItemList