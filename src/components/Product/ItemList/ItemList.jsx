import Item from '../Item/Item'





const ItemList = ({props})=>{

    return(
        <div className="card-group container justify-content-center"> 
            {props.map(p => <Item key={p.id} title= {p.title} description={p.description} price={p.price} imgUrl={p.imgUrl} stock={p.Stock} />)}
        </div>
        
    )
} 
export default ItemList