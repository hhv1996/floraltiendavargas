# FLORALTIENDA
La aplicacion se centrara en un eCommence de ropa "femenina"

## BackEnd
    Se simula el BackEnd en el archivo "backEnd.js" ubicado en src.
    El mismo contiene diferentes funciones:
        * **getAllProducts():**
            Esta funcion devuelve todos los productos disponibles
        * **getProductById():**
            Esta funcion dado un id devuelve los datos correspondiente al producto de dicho id
        * **getProductByCategory():**
            Esta funcion dada una descripcion de categoria, devuelve todos los productos correspondientes a dicha categoria
        * **getAllCategory():**
            Esta funcion devuelve todas las categorias disponibles

## Componentes
    Los componentes del aplicativo estan divididos en diferentes carpetas ubicadas en la raiz "components":
        * **Carousel:** contiene 2 componentes el "Carousel" y el "CarouselContainer", estos componentes se utilizaran para mostrar un carrusel al inicio de la aplicacion (fuera del alcance de CoderHouse)
        * **Footer:** contiene el footer de la aplicacion
        * **NavBar:** contiene 2 componentes "CartWidget" y el "NavBar"
        * **Product:** Este directorio contiene diferentes componentes correspondientes a los productos detallados a continuacion
            * **ItemListContainer:** se encarga de consultar todos los productos y pasarselos al "ItemList"
            * **ItemList:** requiere un array de productos, se encarga de hacer un map y pasarle los datos al "Item"
            * **Item:** este componente recibe todos los datos requeridos para renderizar un producto en pantalla (previsualizacion del producto)
            * **ItemDetailContainer:** dado un ID de producto se encarga de obtener toda la informacion necesaria para renderizar el detalle de un producto, este componente pasa dicha informacion al componente "ItemDetail"
            * **ItemDetail:** este componente se encarga de renderizar los datos otorgados por el "ItemDetailContainer", este componente implementa el "ItemCount"
            * **ItemCount:** se encarga de validar stock del producto y permite contar la cantidad de productos a agregar
            * **ItemCategoryContainer:** dada una descripcion de categoria se encarga de obtener todos los productos de dicha categoria y pasarlos al "ItemList" anteriormente explicado
            -ProductCategory: contiene 2 componentes "ProductCategoryContainer", encargado de obtener todas las categorias y pasarselos a "ProductCategory" que los recibe y renderiza en pantalla tarjetas descriptivas por cada categoria (fuera del alcance de CoderHouse")


