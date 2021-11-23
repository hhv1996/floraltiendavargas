import Itemcount from '../Item/ItemCount/ItemCount'

const ItemListContainer = ({input})=>{
    return(
        <div> 
            {input}
            <Itemcount stock={5} initial={1} title ={"SuperTraje"} desc ={"Esto es un SuperTraje sin capa"}/>
        </div>
        
    )
} 
export default ItemListContainer