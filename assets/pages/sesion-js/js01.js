console.log("Bienvenido a la sesión JS01 ");

// 7 Datos primitivos:
// numbers, string, boolean, null, undefined, bigint, symbol

// Tipos de datos en Js:
// primitivos y no primitivos

// No primitivos: 
// Object

// tipo de dato string
const stringData = "Holi crayoli";
console.log( stringData );

// tipos de dato number:
// números positivos, negativos, decimales, NaN, +Infinity, -Infinity
// para un salto de línea se puede urtilizar \n, pero en template string no es necesario
console.log( `Tipos de datos number: 
${12}, ${-6}, ${0.456}, ${5*"hola"}, ${45/0}, ${-45/0}` );
console.log( " -- \n \"texto entre comillas dobles \" --  ");
console.log( ' -- \n "texto entre comillas dobles " --  ');

console.log( `Valor máximo representable en JavaScript: ${ Number.MAX_VALUE }`) // 1.7976931348623157e+308
console.log( `Si el valor es mayor a MAX_VALUE como 1.79e310: ${1.79e310} `) // Infinity

console.log( `Valor (entero) máximo seguro en JavaScript: ${ Number.MAX_SAFE_INTEGER } ` ) // 9007199254740991
// Cuando se realizan operaciones que exceden los límites de MAX_SAFE_INTEGER
// se produce una pérdida de precisión.
console.log( `MAX_SAFE_INTEGER + 1: ${ Number.MAX_SAFE_INTEGER + 1 } ` ) // 9007199254740992
console.log( `MAX_SAFE_INTEGER + 2: ${ Number.MAX_SAFE_INTEGER + 2 } ` ) // 9007199254740992 (incorrecto)
console.log( `MAX_SAFE_INTEGER + 3: ${ Number.MAX_SAFE_INTEGER + 3 } ` ) // 9007199254740994
console.log( `MAX_SAFE_INTEGER + 4: ${ Number.MAX_SAFE_INTEGER + 4 } ` ) // 9007199254740996 (incorrecto)

// tipos de datos BigInt
// Sirven para representar valor numéricos enteros, de los que el tipo number
// no puede representar o no es seguro.
console.log( "Operaciones con BigInt ")
const myBigInt = 9007199254740991n;
console.log( `MAX_SAFE_INTEGER + 1: ${ myBigInt + 1n } ` ) // 9007199254740992
console.log( `MAX_SAFE_INTEGER + 2: ${ myBigInt + 2n } ` ) // 9007199254740992
console.log( `MAX_SAFE_INTEGER + 3: ${ myBigInt + 3n } ` ) // 9007199254740994
console.log( `MAX_SAFE_INTEGER + 4: ${ myBigInt + 4n } ` ) // 9007199254740996

// tipo de dato boolean
// se tiene 2 estados: true /false
console.log( `Tipo de dato verdadero: ${true} `);
console.log( `Tipo de dato falso: ${false} `);

// tipo de dato undefined
// Una variable que es declarada pero el tipo de dato no es definido
let myVar;
console.log( `Tipo de dato undefined: ${myVar}` );

// tipo de dato null
// Una variable que intensionalmente se borra el tipo de dato
let myVarNull; // undefined
console.log(`Tipo de dato myVarNull: ${ typeof myVarNull }`); // undefined
myVarNull = "No me gusta YLE";
console.log(`Tipo de dato myVarNull: ${ typeof myVarNull }`); // string
myVarNull = null;
console.log(`Tipo de dato myVarNull: ${ typeof myVarNull }`); // object
console.log(`myVarNull es null: ${  myVarNull === null }`); // true

// tipo de dato symbol
// Representa un valor único que se puede utilizar como clave en objetos o identificador único
const mySymbol = Symbol();
const mySymbol2 = Symbol();
const myKey = "codigo";
console.log(`mySymbol === mySymbol2   ${ mySymbol === mySymbol2} `);

const myObj = {
    clave : "valor",
    [mySymbol] : 16, // se creará una clave privada, esta no se itera con un ciclo, no se almacena LocalStorage
    myKey : 123,
    [myKey] : 567, 
}
console.log( myObj );

//-------------------------Objetos en JavaSCcript
// tipo de dato Array
const cancionesCh30 = ["Highway Star", "Trouble", "Saoko", "Rock Dj"];

// tipos de datos Object
const misDatosDePerfil = {
    name: "Sergio",
    lastname: "Torres",
    age: 39,
    isBelicoso: false,
    fullName : function(){
        return `Nombre completo de Sergh: ${this.name} ${this.lastname}`;
        // return "Nombre completo de Sergh: " + this.name +" " + this.lasname;
    }
    // Agregar una función que muestre el nombre completo en mayúsculas

}

console.log( misDatosDePerfil );
console.table( misDatosDePerfil );
console.log ( misDatosDePerfil.fullName ); // f() return `Nombre completo de Sergh: ${this.name} ${this.lastname}`;
console.log ( misDatosDePerfil.fullName() ); // Sergio Torres








