console.log("Sesión JS05 Condiciones y expresiones");

// ---------------- Opéradores airtméticos ----------------
/* adición +
   multiplicación *
   substracción -
   división /
   resto %
   exponencial **  - Math.pow(2, 3)   2**3
*/

// ---- Precedencia de operadores -------------------------
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let operaciones = 5 * 2 + 3 ** 2 - 4; // 15
console.log( operaciones );
console.log(   4 % 3 + 2 * 3 / 2 - 1  );

// ------- Operadores de asignación ----------------
/*
 Asigna un valor a su operador izquierdo basándose en el valor
 de su operando derecho:

 asignación =
 
 Operadores abreviados ( compuestos ):
  op1 += op2  -> op1 = op1 + op2
  op1 -= op2  -> op1 = op1 - op2
  op1 *= op2  -> op1 = op1 * op2

*/
let asignacion = 3;
console.log(  asignacion += 3 * 3 ** 3 + 10  ); // 94
console.log( asignacion ); // 94
console.log(  asignacion += 3 * (3 ** 3) + 10  ); //  += 94 + 91    185
console.log(  2 ** 3 ** 2  ); //  512

// -------------- Operadores unarios ------------------
// Solo actuan sobre un operando
// Negación
let numero = 3;
let dinero = - numero; // -3

// Conversión numérica
let pago = + dinero; // -3 No se le cambia el signo
let intereses =  "5.23"; // 5.23 numérico
console.log( typeof(intereses)  ); // number
intereses = 3;
console.log( intereses += 5 + + "3"  ); // 11

// Operador lógico not
let isActive = !true; // false

// Operador de incremento y decremento en unidad.
/*
  Operador de pre-incremento y pre-decremento
    ++ valor
    -- valor

  Operador de post-incremento y post-decremento
    valor ++
    valor --

*/

let number =  10;
++ number; // preincremento
console.log( number ); //  11
number ++; // postincremento
console.log( number ); //  12

number = 20;
console.log( ++ number ); // 21
console.log( number ++ ); // 21
console.log( number ); // 22

let index = 0;
for (       ; index < 5; index++) {
    console.log(index);    
}
console.log("valor index: " +  index ); // 5

let a = 0, b = 0;
for (  ; a < 3; b = a++) {
    console.log( a, b);    
}
console.log( a, b);    // 3 / 2

let x = 3;                                          // x     y
let y = ++x;                                        // 4     4   
console.log(`x : ${ x++ } y:${ ++y }`); // 3, 5     // 4->5  5  
console.log(`x : ${ x } y:${ y }`); // 4 , 5        // 5     5


// ---------------- Operadores lógicos && y || ---------------
/*
 También son conocidos como operadores de corto circuito ( short-circuit operators ).

 &&  : La evaluación se detiene tan pronto como se encuentra un operador falso.
       Ya no se evalua el segundo operando y se retorna la expresión de OP1.
 OP1 && OP2 Si OP1 es verdadero, se retorna la expresión de OP2.
 OP1 || OP2 Si OP1 es verdadero, se retorna la expresión de OP1.

*/

const va = true, vb = false , vc = true; // cont va, const vb, const vc
const n1 = n2 = n3 = true; // const n1, var n2, var n3.
console.log( va || vb && vc ); // true
// Conversión a booleano
// En la conversión de boolean los siguientes valores son false:
// "", 0, null, undefined, NaN

console.log(  va && "Holi Crayoli" ); // "Holi Crayoli"
console.log(  vb && "Holi Crayoli" ); // false
console.log(  NaN && "Holi Crayoli" ); // NaN
console.log(  "false" && "Holi Crayoli" ); // "Holi Crayoli"
console.log(  "" && "Activado" ); // ""
console.log(  "Activado" && "" ); // ""
console.log(  "Mau" && "Activado" ); // "Activado"

console.log(  "Activado" || "" ); // Activado
console.log(  "activado" || varSinDeclarar ); // activado

const person = {
  name : "Leo",
  lastname : "Ronaldo",
  age : 25,
  //occupation : "Full-Stack developer",
};

console.log(`nombre: ${ person.name }`);
console.log(`nombre: ${ person["name"] }`);

/* if ( person.occupation === undefined || person.occupation === "" ){
  person.occupation = "Software Enginner";
} */
// const occupation = person.occupation     ; // Software Enginner 

// const occupation = person.occupation === undefined ? "Software Enginner" : person.occupation; // Software Enginner 

const occupation = person.occupation ||  "Software Enginner"; // Software Enginner 
// const occupation = person.occupation ??  "Software Enginner"; // operador nullish Coalescing

console.log(`Ocupación: ${ occupation }`); // Software Enginner











