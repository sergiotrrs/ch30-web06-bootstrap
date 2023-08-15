console.log("JS06 - Formulario");

// Obtenemos la referencia del formulario
// const registerForm = document.getElementById("registerForm");
const registerForm = document.forms["registerForm"];

// registerForm.addEventListener( "click", fncCallback  );
registerForm.addEventListener( "submit", ( event )=>{
    event.preventDefault(); // omitir las acciones por default
    // console.log( event ); datos del click
    const email = registerForm.elements["email"];
    const birthdate = registerForm.elements["birthdate"];
    console.log(email.value , birthdate.value);



}  );