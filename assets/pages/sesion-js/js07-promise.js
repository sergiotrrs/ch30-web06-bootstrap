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


// Haciendo una promesa con parámetros

/**
 * Saludo especial para las personas que comience con A, retardo de 5 segundos.
 * Saludo especial para las personas que comiencen con L
 * El saludo se genera después de 5 segundos.
 * @param {string} name 
 */
const gretting = ( name ) => {
      // const myPromise = new Promise( ()=>{}  );
      const myPromise = new Promise( (resolve, reject) => {
        const firstChar = name.charAt(0).toLowerCase();
        if( firstChar === 'a'  )
            //resolve({code: 200 , message: `Soy ${name} ¡hola a todos!` });
            setTimeout( ()=> resolve({code: 200 , message: `Soy ${name} ¡hola a todos!` }),5000 );
        else if ( firstChar === 'l'  )
            resolve({code: 201 , message: `Soy ${name} 
                       Saludos a toda la banda de la ch30 
                       taka taka taka taka taka 
                       viene viene viene viene 
                       takta taka taka taka
            ` });
        else 
            reject({code:404, message: `No estoy disponible para ${name}`});        

      }  ); // fin de Promise

      return myPromise;
}
/*
gretting("Ana")
    .then( response => console.log(response.code, response.message) )
    .catch( error => console.log( error.code, error.message) );

gretting("Luisa")
    .then( response => console.log(response.code, response.message) )
    .catch( error => console.log( error.code, error.message) );

gretting("Eduardo")
    .then( response => console.log(response.code, response.message) )
    .catch( error => console.log( error.code, error.message) );
*/
//---------------- consumir las promesas con async y await-------------
/*
 Async y Await facilita la escritura y lectura de código asíncrono.
 Permite escribir código asíncrono de manera similar a cómo se escribiría
 código síncrono.

*/

async function grettingCh30 ( name ) {
    console.log("----Saludos a la bandita de la Ch30----- ");
    const result = await gretting( name);
    console.log( result );
    console.log("--- Fin del saludo ----");
}
// gretting = async () => {}


const grettingAll = async () =>{
    try{
        await grettingCh30( "Anneth" );
        await grettingCh30( "Mau" );
        await grettingCh30( "Leonardo" );
    }
    catch( error ){
        console.warn("Se rechazó una promesa");
        console.table( error )
    }

}
grettingAll();