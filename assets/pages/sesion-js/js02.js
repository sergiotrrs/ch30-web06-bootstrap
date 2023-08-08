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

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/
( function( name ) {
    console.log(`Me llamo ${name} y me autoinvoco`);
} )( "ChatGPT" );


/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palbra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

/* const areaRectangulo = function (base, altura){
    return base * altura;
} */
 
const areaRectangulo = (base, altura) => base * altura;

console.log(`El área es: ${ areaRectangulo(3, 9)} m2.`);

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/

/**
 * Calcula el área de un triángulo
 * @param {number} base del triángulo
 * @param {number} altura del triángulo
 * @returns {number} base * altura / 2
 */
const areaTriangulo = (base = 1, altura = 1) => base * altura /2.0;

console.log(`El area es: ${ areaTriangulo(4, 12)} m2.`);
console.log(`El area es: ${ areaTriangulo()} m2.`); //0.5
console.log(`El area es: ${ areaTriangulo(10)} m2.`); // 5
console.log( (1000).toString()  ); // conversión base 10 -> 1000
console.log( (1000).toString(2)  ); // conversión base 10 -> 1111101000
console.log( (1000).toString(16)  ); // conversión base 10 -> 3e8


/*
 ------------ Parámetros rest -----------------------
             (rest parameters)
Permite representar una serie de valores indefinidos en los argumentos
Esta serie de valores se presentan como un array.
Rest parameters debe estar al final de la lista de parámetros.

sintaxis:
     ...nombreParametros

*/
const sumatoriaMultiplesNumeros = (a = 0, b = 0, ...rest) => {
    let suma = a + b;
    for (let i = 0; i < rest.length; i++){
        suma = suma + rest[i];
      }
    return suma;
}

console.log(`Sumatoria de múltiples números: ${ sumatoriaMultiplesNumeros(2,5)}`); // 7
console.log(`Múltiples números: ${ sumatoriaMultiplesNumeros(2, 5, 10, 9 )}`); // 26
console.log(`Múltiples números: ${ sumatoriaMultiplesNumeros(2, 5, 10, 9, 20, 10 )}`); // 56
console.log(`Múltiples números: ${ sumatoriaMultiplesNumeros(2)}`); // 2 




/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa a otra función como argumento.
 Se para en el argumento como referencia ( sin parentesis).
 */

 function saludoALosPokemones(){
    return "yo te elijo";
 }

 function saludoSquirtle( nombre ){
    return "Vamo' a calmano " +  nombre;
 }

 function eligiendoPokebola( saludo, nombre ){
    console.log("==============================");
    console.log("Hola, estás en la liga pokemon");
    console.log("Elige a tu mejor Pokemon");
    console.log( saludo(nombre) );   
 }

 // eligiendoPokebola(); // saludo is not a function
 // eligiendoPokebola( saludoALosPokemones()  ); // saludo is not a function
 // eligiendoPokebola( "yo te elijo"  );
 eligiendoPokebola( saludoALosPokemones ); // "yo te elijo"
 eligiendoPokebola( saludoSquirtle, "Leonardo Hdz." ); // "Vamo' a calmano"
 eligiendoPokebola( function(){return "Pika Pika Chuu"} ); // 
 eligiendoPokebola( function(nombre){return "quiiiiii soy " + nombre}, "Cubone" ); // quiiiiii soy Cubone
 eligiendoPokebola( nombre => `quiiiii soy ${nombre}`    , "Charizard" ); // quiiiiii soy Cubone

/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.

 student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
 student2Courses = ["Geography", "Spanish", "Programming", "Music"];

  salida: "Cursos en común: Programming, Music"
*/

//--------------- Resolviendo con ciclos anidados ----------------------
const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];


function cursosEnComun( student1Courses,  student2Courses  ){
    const commonCourses = []; // guardar los cursos en comun

    for (let i = 0; i < student1Courses.length; i++) { // ["Math", "English", "Programming", "Biology", "Physics", "Music"];
        for (let j = 0; j < student2Courses.length; j++) { // ["Geography", "Spanish", "Programming", "Music"]
            console.log(` ${student1Courses[i]} === ${student2Courses[j]} : ${student1Courses[i] === student2Courses[j]}`)
            if ( student1Courses[i] === student2Courses[j] ){
                commonCourses.push(student1Courses[i]);
            }    
        }        
    }

    return `Cursos en común ${commonCourses}`
}
console.log ( cursosEnComun( student1Courses, student2Courses ) );

//--------------- Resolviendo con filter e include ----------------------

function getCommonCoursesWithFilter( array1Courses, array2Courses ){
    return  array1Courses.filter( course=> array2Courses.includes(course) );
}

console.log(`Común: ${getCommonCoursesWithFilter( student1Courses, student2Courses )}`);

//--------------- Resolviendo con filter e include por partes ----------------------
console.log("###################################");
function includeCourse( course, index, array ){
    console.log(`Elemento ${course}, indice ${index}, include ${student2Courses.includes(course)}`);
    return student2Courses.includes(course); // evaluación // ["Geography", "Spanish", "Programming", "Music"]
}

function getCoursesWithFilter( array1Courses){
      const commonCourses = array1Courses.filter( includeCourse ); // ["Math", "English", "Programming", "Biology", "Physics", "Music"];
      return commonCourses;
}
console.log(`Comúnxpartes: ${getCoursesWithFilter( student1Courses, student2Courses )}`);

// -------------- Contar la cantidad de caracteres de una frase ---------------------
/*
   "peso pluma pica papas con un pico y una pala con un pico pica papas peso pluma";

   Mostrar la cantidad de letras 'p'.

   Recomendaciones de métodos: split.
*/
const phasePP = "Peso Pluma pica papas con un pico y una pala con un pico pica papas Peso Pluma";
const counterCharacter = ( phase, character ) => phase.split(character).length-1;

const counterCharacterUnsensitive = ( phase, character ) => phase.toLowerCase().split(character).length-1;
const contarLetrasP = (frase) => {
    const letrasP = frase.split('').filter(letra => letra === 'p' || letra === 'P');
    return letrasP.length;
  };
console.log(`Cantidad de letras 'p' : ${ counterCharacter(phasePP, "p") } `); // 13
console.log(`Cantidad de letras 'p' : ${ counterCharacter(phasePP, "p") + counterCharacter(phasePP, "P") } `); // 13
console.log(`Cantidad de letras 'p' : ${ counterCharacterUnsensitive(phasePP, "p") } `); // 13
console.log(`Cantidad de letras(mau) 'p' : ${ contarLetrasP(phasePP) } `); // 13


// -------------- Recursividad ---------------------
/*
  Una función recursiva es una función que se llama así misma durante su ejecución.

  Se utilizan en algoritmos y soluciones que se basan en la división y conquista
  como cálculos matemáticos, recorrido de estructura de datos y algoritmos de búsqueda
  y ordenamiento.

  Patrón:
    function nombreFuncionRecursiva( parametro  ){
        if( condicionParo){
            return expresión;
        }
        else {
            // llamada recursiva
            nombreFuncionRecursiva( nuevoParametro );
        }
    }
*/

//......... Cálculo del factorial de un número usando ciclo for ...............
function factorialConCicloFor( numero ) {
    let factorial = 1;

    for (let i = numero; i > 0; i--) {// i = i - 1
        console.log(`factorial: ${factorial} * ${i} = ${factorial*i}`)
        factorial = factorial * i;        
    }
    return factorial;
}

console.log(`El factorial de 5 es: ${factorialConCicloFor(5)}`) // 1*2*3*4*5 = 120