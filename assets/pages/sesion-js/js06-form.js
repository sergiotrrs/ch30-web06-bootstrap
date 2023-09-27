console.log("JS06 - Formulario");

// Obtenemos la referencia del formulario
const registerForm = document.forms["registerForm"];

// registerForm.addEventListener( "click", fncCallback  );
registerForm.addEventListener( "submit", async ( event )=>{
    event.preventDefault(); // omitir las acciones por default

    const user = {
        email : registerForm.elements["email"].value, // string
        password : registerForm.elements["password"].value, // string
    }

    await getProducts();
    //await postUser(user);
    await postProduct()  
}  );

const postUser = async ( userData) =>{
  const url= "http://localhost:8080/login";
  
  const responseJSON = await fetch( url , {
      method: "POST", // POST, PUT, DELETE, GET
      body: JSON.stringify( userData) , // datos del usuario
      headers: { "Content-Type" : "application/json" },
  });
  const response = await responseJSON.json(); 
  console.log(response);  

}

const getProducts = async ( ) =>{
  const url= "http://localhost:8080/api/v1/products";
  
  const responseJSON = await fetch( url );
  const response = await responseJSON.json(); 
  console.log(response);  

}

const postProduct = async ( productData) =>{
  const url= "http://localhost:8080/api/v1/products";
  
 productData = {
  firstName: "Antonio",
  lastName: "M",
  email: "antonio3@gmail.com",
  password: "123"
}

  const responseJSON = await fetch( url , {
      method: "POST", 
      body: JSON.stringify( productData) , 
      headers: { "Content-Type" : "application/json" },
  });
  const response = await responseJSON.json(); 
  console.log(response);  

}




const calculateAge = ( {birthdate : birthdateStr }  )=>{
    console.log(birthdateStr); // string  1996-11-30 

    // Date entrega los milisegundos transcurridos desde el 01/01/1970
    const today = new Date(); // Crear un objeto con la fecha en curso
    const birthdate = new Date( birthdateStr ); // Objeto con la fecha 1996-11-30

    const difference = today - birthdate;
    console.log ( difference ); // 842810738302 milisegundos de diferencia
    const age = new Date( difference ); // Sun Sep 15 1996 13:09:51 GMT-0500
    console.log( age );
    console.log(`Years: ${age.getFullYear() - 1970} `); //  1996 -1970 = 26
    console.log(`Months: ${age.getMonth() } `); //  
    console.log(`Days: ${age.getDate() } `); //  
    return {
        year: age.getFullYear() - 1970 ,
        month: age.getMonth() ,
        day: age.getDate() ,
    }

}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}
