console.log("Sesión JS 07 Asincronía");

//------------------- Programación sincrónica (secuencial)--------------

const primerPaso = () =>{
    console.log("01- Inicio del mi programa");
}
const segundoPaso = () =>{
    console.log("02- Desarrollo del mi programa");
}
const tercerPaso = () =>{
    console.log("03- Fin de mi programa");
}

primerPaso();
segundoPaso();
tercerPaso();

// --------------------Programación Asíncrona ----------------------------
/*
   setTimeout()

   Establece un temporizador que ejecuta una función de callback
   una vez que expire el temporizador

   sintaxis:
     setTimeout( fncCallback, tiempo_ms, argumentos_fnc );
     setTimeout( ()=>{}  , tiempo_ms );

 */

const saludo = ( name ) => console.log(`Hola ${name}`);

const pasoAsincrono = ( name ) =>{
    // setTimeout(  saludo, 5000, name  )
    // setTimeout (  ( person )=> console.log(`Hola ${person}`), 5000, name  );
    setTimeout (  ()=> console.log(`Hola ${ name }`), 5000 );
};

console.log("*******************");
primerPaso(); // 01- Inicio del mi programa
pasoAsincrono("Baby Yoda multiverso"); // 5s -> Hola Baby Yoda
tercerPaso(); // 03- Fin de mi programa




