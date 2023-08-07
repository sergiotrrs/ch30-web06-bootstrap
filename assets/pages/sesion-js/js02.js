console.log("Sesión JS02 Uso de funciones");

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

Función: Conjunto de instrucciones que realiza una tarea o calcula un valor.
  Código que se puede reutilizar.


  ----------- Funciones declaradas --------------
    (function declaration, function statement)
Una característica de las funciones declradas es que tien hoisting.

sintaxis:
    function nombreFuncionCamelCase ( parámetros ){
        //cuerpo de la función
        instrucciones;
    }

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/
console.log( multiplica(4, 3));

function multiplica(a, b){
    return a * b;
}

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

const sum = function sumatoria(a, b){
    return a + b;
}
console.log(`El resultado de 4 + 2 : ${ sum(4,2) }`);

let saludo; // undefined
const localidad = "tlaxcala";

if ( localidad == "buenos aires"){
    saludo = function ( name ) { return `Holis ${name}`};
}
else {
    saludo = function ( name ) { return `Buenos días ${name} `};
}

console.log( saludo("Sergio"));
console.log( saludo("David"));


