import './ProductCategory.css'
const ProductCategory = ()=>{

    return(
        <div className="container">
            <div className="ProductCategoryRow">
                <div className="ProductCategoryCol1">
                    <img src="https://d22fxaf9t8d39k.cloudfront.net/64af019ed9ae9cc3dc5e5a6061512811618c41efe2214f7fa2394afea9545da114158.jpeg" className="ProductCategoryImg" alt="Remeras" />
                </div>
                <div className="ProductCategoryCol2">
                    <img src="https://d22fxaf9t8d39k.cloudfront.net/6c75e69078259d188dc0761d1fb9120f742bf0e6e1fabf27d00c261af004820514158.jpeg" className="ProductCategoryImg" alt="Camisas" />
                </div>
                <div className="ProductCategoryCol3">
                    <img src="https://d22fxaf9t8d39k.cloudfront.net/a68f1b74d0942846817357d271cbc6354a81d048be178eed2e5db8b011e4474714158.jpeg" className="ProductCategoryImg" alt="Vestidos" />
                </div>
            </div>
        </div>

    )
} 
export default ProductCategory