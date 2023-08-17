console.log("Sesión Js08- class");

const getProducts = async() => {
    const url = "https://fakestoreapi.com/products";
    //const url = "https://reqres.in/api/users?page=2";

    const responseJSON = await fetch(url);
    const response = await responseJSON.json();
    console.log( response)
}

/**
 * Clase productos
 * El nombre de las clases se realizancon UpperCamelCase
 */
class Products{
    // El método constructor nos ayuda a instanciar un objeto
    constructor( id, name){
        this.name = name; // creando el atributo name y le asignamos el valor de parámetro name
        this.id = id;
        this.createdAt = new Date().getTime();
        // console.log(`Producto ${this.name} se creó el ${new Date().toLocaleString()}`);
    }

    lifeSpan(){
        return new Date().getTime() - this.createdAt;
    }

}

function createProductsOfClassProducts(){
             // Instanciar la clase Products para crear un objeto
 const zote = new Products(1,"Zote");
 const products = [];
 products.push( zote );
 products.push( new Products(2, "Palmolive") );
 products.push( new Products(3, "Coca-cola 2l") );
 products.push( new Products(4, "Cajeta Corona") );
 products.push( new Products(5, "Chips") );
 products.push( new Products(6, "Herdez, chicharos") );
 products.push( new Products(7, "Salsa Valentina") );
 products.push( new Products(8, "Sopa Nissin") );

 // console.table ( products );
 return products;
}

function lifeSpanProducts( products ) {
    // El método map sobre un arreglo, itera sobre cada elemento
    // del arreglo y entrega un nuevo arreglo.
    const productsLifeSpan = products.map( product => 
        `<li> ${product.name} se creó hace ${product.lifeSpan() / 1000} s. </li>`  
        );
    return productsLifeSpan;
}

function insertListItems( listItems ){
    const products = document.getElementById("products");
    const unorderList = `<ul>  ${listItems.join("")}  </ul>`;

    products.innerHTML = unorderList;
}

function onClickLifeSpan(){
    const products = createProductsOfClassProducts(); // Crea objetos
    setTimeout( ()=>{
        const productsListItems = lifeSpanProducts ( products );
        insertListItems( productsListItems );
    } , 5000);
}



