const products = [
    {
        id:'1',
        title:'Remera de hilo',
        description:'Remera de hilo.Medidas: 66 cm de ancho. 53 cm de largo total.',
        price:'1.780,00',
        imgUrl:'https://d22fxaf9t8d39k.cloudfront.net/fc1e09c7c1953da381e375f3ad58c5218130f6a4a2e2561d2f96256aecdc2ae414158.jpeg',
        stock:4,
        arrayImgCarousel:[
            {imgCarousel:'https://d22fxaf9t8d39k.cloudfront.net/fc1e09c7c1953da381e375f3ad58c5218130f6a4a2e2561d2f96256aecdc2ae414158.jpeg'},
            {imgCarousel:'https://d22fxaf9t8d39k.cloudfront.net/ca8cc93cebde7f67f25c584c6c1b3789775e708495872b01071b037aced6004b14158.jpeg'},
            {imgCarousel:'https://d22fxaf9t8d39k.cloudfront.net/396afcac2d8d890e94898c481b0e90dabb828e151bbe4493918e25b2011ce9f714158.jpeg'}
        ],
        category:'Remera'
    },
    {
        id:'2',
        title:'Vestido Blanco Flores',
        description:'Vestido Blanco flores. Talle U',
        price:'1.750,00',
        imgUrl:'https://d22fxaf9t8d39k.cloudfront.net/2aa5f010aa8cb3938d804b540c80ff73215e91e24f4234bfec016c1bb0b69bdf14158.jpeg',
        stock:7,
        arrayImgCarousel:[
            {imgCarousel:'https://d22fxaf9t8d39k.cloudfront.net/fa9c9189aa5d7147774dea090ff1a623c170e874cf062066b560e92eb45d87d014158.jpeg'},
            {imgCarousel:'https://d22fxaf9t8d39k.cloudfront.net/1dfaac96126d9c8f60c00eac1b53d5f6119e800002cb3cfb0c815285d43bb8e614158.jpeg'}
        ],
        category:'Vestido'
    },
    {
        id:'3',
        title:'Pollera Lino',
        description:'Pollera Lino , colores disponibles Lima y terracota',
        price:'2.120,00',
        imgUrl:'https://d22fxaf9t8d39k.cloudfront.net/970bd1e76ed3f970021da2b0362db93653fcf6b5108d42a7df103eba1364349414158.jpeg',
        stock:2,
        arrayImgCarousel:[
            {imgCarousel:'https://d22fxaf9t8d39k.cloudfront.net/94f61dfcec4e38037631d50d9182ecdfc149d6ba240a2ae5787ce14ff82adf4914158.jpeg'},
            {imgCarousel:'https://d22fxaf9t8d39k.cloudfront.net/ca8cc93cebde7f67f25c584c6c1b3789775e708495872b01071b037aced6004b14158.jpeg'},
            {imgCarousel:'https://d22fxaf9t8d39k.cloudfront.net/e062015e404779836cc0dfda0e8c5500f942b48d9b75b6c8265175001398454e14158.jpeg'}
        ],
        category:'Pollera'
    },
    {
        id:'4',
        title:'Vestido lino Terracota',
        description:'Vestido de lino color terracota',
        price:'3.490,00',
        imgUrl:'https://d22fxaf9t8d39k.cloudfront.net/59abd256d5259ccfac6dd36b644d5cbea347dcb8797e6716cf336621ca906f5d14158.jpeg',
        stock:2,
        arrayImgCarousel:[
            {imgCarousel:'https://d22fxaf9t8d39k.cloudfront.net/7cea819ac0279a8f3052057d1a8acaffce8984489596ed9db3b13f7aeed35e5114158.jpeg'},
            {imgCarousel:'https://d22fxaf9t8d39k.cloudfront.net/ca8cc93cebde7f67f25c584c6c1b3789775e708495872b01071b037aced6004b14158.jpeg'},
            {imgCarousel:'https://d22fxaf9t8d39k.cloudfront.net/a443804789fa5454e6cafbdb8ee874f604cf56535bfdfc4dfa505667cbad18cb14158.jpeg'}
        ],
        category:'Vestido'
    },
    {
        id:'5',
        title:'Camisa erika rosa',
        description:'Camisa oversized manga larga con bolsillo delantero.Color: rosa.Tela: Poplin rayado Medidas:Largo mangas: 55 cmLargo: 74 cmAncho: 65 cmLas medidas son tomadas con la prenda apoyada, no en contornos.',
        price:'2.800,00',
        imgUrl:'https://d22fxaf9t8d39k.cloudfront.net/6c75e69078259d188dc0761d1fb9120f742bf0e6e1fabf27d00c261af004820514158.jpeg',
        stock:1,
        arrayImgCarousel:[
            {imgCarousel:'https://d22fxaf9t8d39k.cloudfront.net/6c75e69078259d188dc0761d1fb9120f742bf0e6e1fabf27d00c261af004820514158.jpeg'},
            {imgCarousel:'https://d22fxaf9t8d39k.cloudfront.net/56f3c4e121b8861cb690556d0682046634144dcd0e63a7662b024b2bbc27aa9c14158.jpeg'},
            {imgCarousel:'https://d22fxaf9t8d39k.cloudfront.net/fe855266c08c0b0536265e3a8b64f0b004457e09b38076ed90a52528cdfeb07514158.jpeg'}
        ],
        category:'Camisa'
    }
]
const category = [
    {id:1,description:'Remera'},
    {id:2,description:'Vestido'},
    {id:3,description:'Pollera'},
    {id:4,description:'Camisa'}
]
export const getAllProduct=()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(products), 3000 )
    })
}
export const getProductById=(id)=>{
    return new Promise((resolve, reject) =>{
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1500 )
    })
}
export const getProductByCategory=(categoryId)=>{
    return new Promise((resolve, reject) =>{
        const product = products.filter(prod => prod.category === categoryId)
        setTimeout(() => resolve(product), 1100 )
    })
}
export const getAllCategory=()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(category), 1000 )
    })
}