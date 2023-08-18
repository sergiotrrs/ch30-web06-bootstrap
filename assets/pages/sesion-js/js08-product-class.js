
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

// exportar las clases, funciones, variables, etc.
export { Products };