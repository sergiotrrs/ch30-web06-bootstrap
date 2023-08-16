console.log("Sesión JS07 - Promise");
/*
 Las promesa es un patrón asincrónico que se utiliza
 para manejer operaciones asíncronas.

 Las promesas permite realizar tareas asíncronas y
 manejar losa resultados (éxito o error) en un momento posterior.

 Las promesas tiene 3 estados:

 1.- Pending: El estado inicial de una promesa antes de que se resulva o rechace
 2.- Resolved: La promesa se reaulve con un valor
 3.- Rejected: La promesa se rechaza con un razón

Resolve y reject con funciones de callback.
Para crear una promesa se usa el constructor de la clase Promise.

sintaxis:
    const pinkyPromise = new Promise ( fncCallBack );

*/

// const pinkyPromise = new Promise( ()=>{}   );
// const pinkyPromise = new Promise( ( fncCallBackResolve, fncCallBackReject )=>{}   );
const pinkyPromise = new Promise( ( fncCallBackResolve, fncCallBackReject )=>{
    const menorEdad = false;

    if( menorEdad )
        fncCallBackResolve("Hay que estar siempre juntos");
    else
        fncCallBackReject( { code: 404, message : "Ni te topo" } );
} );

// Consumir las promesas
// Se usa los métodos then, catch y finally*

console.log("------> Promesas <-------");
console.log("01-Antes de consumir la promesa");

// pinkyPromise(); // pinkyPromise is not a function;
//pinkyPromise.then().catch().finally(); //forma correcta de consumir una promesa

/*pinkyPromise
    .then(  ) // Se ejecuta una función de callback si la promesa fue resuelta
    .catch(   ) // se ejecuta una función de callback si la promesa fue rechazada
    .finally(  ); // se ejecuta una función de callback 
                //después de que la promesa fue resuelta o rechazada
        */

pinkyPromise
    .then( ( response )=> console.log(`Promesa Resuelta: ${response}`) ) 
    .catch( ( error )=> console.log(`Promesa Rechazada: ${error.message}`) ) 
    .finally( ()=> console.log("Se ha terminado de resolver la promesa")  ); 
                
console.log("03-Después de consumir la promesa");


