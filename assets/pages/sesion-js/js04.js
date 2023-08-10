console.log("Sesión JS04 matrices y bucles");


// Declaramos un arreglode 2 dimensiones (matriz).
// Arrays anidados
// [ []   , []   , []   ]

const personasEnCh30 = [ 
    [ "Luis", "Allan" , "Anneth"  , "Maryluz" ] ,  /*indice 0, ByteMe(404) */
    [ "Ed"  , "Jimena", "Marifer" , "Leo"    , "Alejandro" ] ,  /* indice 1, PerryCode */
    [ "Lu"  , "Leo"   , "Daniel"  , "Gina"    ]    /* indice 2, BugBusters */
];

console.log(`Integrantes de BugBusters: ${ personasEnCh30[2] }`); // Lu,Leo,Daniel,Gina
console.log(`Integrantes de BugBusters: ${ personasEnCh30[2].join(", ") }`); // Lu, Leo, Daniel, Gina
                                                     // Feliz Cumpleaños
console.log(`BugBusters integrante n. 1: ${ personasEnCh30[2][0] }`); // Lu

// En la historia Leo tiene exceso de amonestaciones.
// Hay que reemplazar el nombre de Leo en PerryCode por Bryan.

// personasEnCh30[1][3] = "Brayan";
personasEnCh30[1].splice(3, 1, "Brayan");
console.table( personasEnCh30 ); 


// ------------- Iterando todos los elementos
/*
const personasEnCh30 = [ 
    [ "Luis", "Allan" , "Anneth"  , "Maryluz" ] ,  indice 0, ByteMe(404) 
    [ "Ed"  , "Jimena", "Marifer" , "Leo"    , "Alejandro" ] ,   indice 1, PerryCode 
    [ "Lu"  , "Leo"   , "Daniel"  , "Gina"    ]     indice 2, BugBusters 
];
*/ 

console.log( personasEnCh30[0][2]  ); // Anneth

// Este for itera sobre los equipos integradores
for (let equipo = 0; equipo <  personasEnCh30.length  ; equipo++) {  
    console.log(`Equipo ${equipo} : ${personasEnCh30[equipo]}` )  ;
    
    // Este for itera sobre las personas
    for( let persona = 0; persona < personasEnCh30[equipo].length ; persona++ ){
     console.log(`Participante: ${ personasEnCh30[equipo][ persona ] }`);
    } 
}

// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/
console.table( personasEnCh30 ); 

const myPet = "Kraken";
for (const character of myPet  ){
    console.log( character );
}
myPet.split("").forEach( character => console.log( character ))


for (const equipo of personasEnCh30 ) {
    console.log( equipo ); // Arreglo de equipos
    for (const persona of equipo) {
        console.log( persona ); //  Persona de cada equipo
    }
}

// ---------------- forEach -------------------------
/*
 Método que se utiliza para iterar colecciones, arreglos.
 Permite ejecutar una función por cada elemento del arreglo.

*/
console.table( personasEnCh30 ); 

function iterarEquipos( equipo, indice, arreglo ){
    console.log(`Indice ${indice}: ${equipo} `)
    equipo.forEach(  iterarPersonas  );
    return equipo; // arreglo de cada equipo integrador
}

function iterarPersonas( persona, indice ){
    console.log(`Indice P ${indice}: ${persona} `)
    return persona;
}


// personasEnCh30.forEach( iterarEquipos );

personasEnCh30.forEach( (equipo, indexEquipo) => 
                    equipo.forEach( (persona, indexPer)=> 
                    console.log(` [${indexEquipo}][${indexPer}] : ${persona}` )));
 
// Solo se imprimi el elemento (persona)                    
//personasEnCh30.forEach( equipo => equipo.forEach( persona=> console.log(`${persona}`)));

