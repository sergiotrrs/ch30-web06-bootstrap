
/**
 * Clase productos
 * El nombre de las clases se realizancon UpperCamelCase
 */
class Products{
    // El método constructor nos ayuda a instanciar un objeto
    constructor( id, name, image){
        this.name = name; // creando el atributo name y le asignamos el valor de parámetro name
        this.id = id;
        this.createdAt = new Date().getTime();
        this.image = image || "https://cdn7.kiwilimon.com/recetaimagen/21383/10752.jpg"
        // console.log(`Producto ${this.name} se creó el ${new Date().toLocaleString()}`);
    }

    lifeSpan(){
        return new Date().getTime() - this.createdAt;
    }
}

// usando la palabra reservada extends pordemos heredar de otra clase
class TapiocaProducts extends Products {
    // para encapsular un elemento, le agregamos al nombre el símbolo
    // de # o _
    #atributoEncapsulado
    
    constructor( id, name, image, ingredients ){
        // invocando al método constructor
        // super invoca a los atributos y métodos de la clase superior
        super(id, name, image); // invoca al contructor de Products
        this.ingredients = Array.isArray( ingredients)? ingredients: [] ;
        this.#atributoEncapsulado = "Solamente tengo acceso dentro de la clase";
    }

    // metodos setters y getters
    get atributoEncapsulado(){
        return this.#atributoEncapsulado;
    }

    set atributoEncapsulado( nuevoValor ){
        this.#atributoEncapsulado = nuevoValor;
    }
}




// exportar las clases, funciones, variables, etc.
export { Products, TapiocaProducts }; 