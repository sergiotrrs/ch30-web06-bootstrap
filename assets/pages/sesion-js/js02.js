console.log("Sesión JS02 Uso de funciones");

/*
  ----------- Funciones declaradas --------------
    (function declaration, function statement)
Una característica de las funciones declradas es que tien hoisting.

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/
console.log( multiplica(4, 3));

function multiplica(a, b){
    return a * b;
}
