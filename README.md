# FLORALTIENDA
La aplicacion se centrara en un eCommence de ropa "femenina"
# Tecnologia utilizada
+CSS
+JS
+HTML
# Framework adicionales
+Material Icon
+React Bootstrap
# Clonar repositorio
+git clone *URL del Proyecto*
# Instalar dependencias
+npm install
# Ejecutar proyecto
+npm start
# BackEnd
El backend esta desarrollado en firestore, en la misma se alojan 3 tipos de archivos:
- /products: en esta direccion guardaremos un archivo con todos los 	datos del producto, con la siguiente estructura

		1. id: String(autogenerado por firestore)
		2. arrayImgCarousel: ArrayString
		3. category: String
		4. description: String
		5. imgUrl: String
		6. price: String
		7. stock: int
		8. title: String

- /orders: en esta direccion guardaremos los datos de las ordenes realizadas con la siguiente estructura

		1. id: String(autogenerado por firestore)
		2. buyer: object [mail:String, name:String, phone:String]
		3. items: ArrayProducts
		4. total: String

- /categorys: en este directorio alojaremos archivos correspondientes a las diferentes categorias de productos con la siguiente estructura:

		1. id: String(autogenerado por firestore)
		2. description: String

# Componentes
Los componentes del aplicativo estan divididos en diferentes carpetas ubicadas en la raiz "components":
- Carousel: contiene 2 componentes el "Carousel" y el "CarouselContainer", estos componentes se utilizaran para mostrar un carrusel al inicio de la aplicacion (fuera del alcance de CoderHouse)
- Footer: contiene el footer de la aplicacion
- NavBar: contiene 2 componentes "CartWidget" y el "NavBar"
- Cart: contiene 3 componentes "Cart" en el se desarrolla el carrito de compras del usuario, "CartForm" en el se desarrolla un formulario que pido el ingreso de datos necesarios para crear la orden y por ultimo el "CartItemCount" es un contador para poder agregar mas productos ya agregados al cart.
- Product: Este directorio contiene diferentes componentes correspondientes a los productos detallados a continuacion
- ItemListContainer: se encarga de consultar todos los productos y pasarselos al "ItemList"
- ItemList: requiere un array de productos, se encarga de hacer un map y pasarle los datos al "Item"
- Item: este componente recibe todos los datos requeridos para renderizar un producto en pantalla (previsualizacion del producto)
- ItemDetailContainer: dado un ID de producto se encarga de obtener toda la informacion necesaria para renderizar el detalle de un producto, este componente pasa dicha informacion al componente "ItemDetail"
- ItemDetail: este componente se encarga de renderizar los datos otorgados por el "ItemDetailContainer", este componente implementa el "ItemCount"
- ItemCount: se encarga de validar stock del producto y permite contar la cantidad de productos a agregar
- ItemCategoryContainer: dada una descripcion de categoria se encarga de obtener todos los productos de dicha categoria y pasarlos al "ItemList" anteriormente explicado
- ProductCategory: contiene 2 componentes "ProductCategoryContainer", encargado de obtener todas las categorias y pasarselos a "ProductCategory" que los recibe y renderiza en pantalla tarjetas descriptivas por cada categoria (fuera del alcance de CoderHouse")
# Contextos
En el proyecto se realizaron 2 contextos alojados en src/context, los cuales se detallaran a continuacion:

 CartContext: En este contexto guardamos los datos necesarios de los productos para realizar la orden del cliente, detallaremos a continuacion las funciones y estados exportados:
		1. productsList: aca se esportara el array de productos que el cliente sumo al carrito
		2. addItem: Esta funcion nos permite agregar un item al contexto
		3. removeItem: Esta funcion nos permite remover un item especifico del contecto
		4. clear: esta funcion nos borra todos los datos del contexto
		5. isInCart: con esta funcion podremos saber si un producto ya se encuentra en el carrito
		6. modify: esta funcion nos permite modificar un item ya agregado al contexto
		7. cantItems: devuelve la cantidad de productos 
		8. totalPrice: esta funcion devuelve el precio total de la orden
		

- BuyerContext: En este contexto guardaremos los datos del cliente necesarios para terminar la comprar, a continuacion detallaremos los parametros que se exportan:

		1. name: en este parametro guardamos el nombre del cliente,
		2. phone: en este parametro guardamos el numero de telefono del cliente,
		3. mail: en este parametro guardamos el mail del cliente,
		4. setBuyer: esta funcion nos permite guardar los datos del cliente en el contexto
		
		
# Servicios
Solo tenemos declarados un servicio alojado en src/service/firebase, en el mismo inicializamos la conexion con firebase.