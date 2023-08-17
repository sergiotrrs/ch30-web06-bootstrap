console.log(`Sesión js08 - OOP`);

const registerForm = document.forms["registerForm"];

registerForm.addEventListener( "submit", ( event )=>{
    event.preventDefault(); 

    const user = {
        fullname: registerForm.elements["fullname"].value, 
        email : registerForm.elements["email"].value, 
        password : registerForm.elements["password"].value,        
    }
    console.table(user);
}  );