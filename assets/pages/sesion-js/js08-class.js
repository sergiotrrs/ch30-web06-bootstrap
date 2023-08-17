console.log("Sesión Js08- class");

const getProducts = async() => {
    const url = "https://fakestoreapi.com/products";
    //const url = "https://reqres.in/api/users?page=2";

    const responseJSON = await fetch(url);
    const response = await responseJSON.json();
    console.log( response)
    return response;
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

/**
 * Creación de arreglode productos con la clase Products
 * @returns 
 */
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

/**
 * Crea list Items de un arreglo de productos
 * @param {array} products 
 * @returns 
 */
function createListItemsOfProducts( products ) {
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
    setTimeout( ()=>{ // crea retardo de 5 ms para ver la diferencia de tiempo.
        const productsListItems = createListItemsOfProducts( products ); // Crea <li>
        insertListItems( productsListItems ); // insertar en el DOM
    } , 5000);
}


//==============================================================

async function showProducts(){
    // const products = createProductsOfClassProducts();
    const products = await createProductsOfFakeStore();
    console.table(products);
    const productCards = createCardsOfProducts( products);
    insertCards( productCards );
}

async function createProductsOfFakeStore(){
    const fakeProducts = await getProducts();
    //return fakeProducts.maps( (fakeProduct)=> new Products( fakeProduct.id , fakeProduct.title));
    return fakeProducts.map( ({id, title})=> new Products( id , title));
}


function createCardsOfProducts( products){
    return products.map( (product)=>{
        return `
        <div class="card col-4 m-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${ product.name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${ product.id}</h6>
          <p class="card-text">Some title content pon uwu xd :V</p>
          <a href="#" class="card-link">Card link</a>
        </div>
      </div>       
        `
    } );
}


function insertCards( productCards ) {
    const products = document.getElementById("products");
    const cards = `<div class="row">  ${productCards.join("")}  </div>`;

    products.innerHTML = cards;
}