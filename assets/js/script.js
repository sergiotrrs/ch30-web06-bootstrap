console.log("Página en construcción con Patricio Estrella");

function clickPatricio() {
    alert("La mayonesa es un instrumento?");
}

function changeColor( elementHtml, color ) {
    // alert("Que emoción, voy a cambiar mi color")
    console.log(elementHtml);
    console.log(color);
    
    elementHtml.style.color = color;
}

function changeColorWithPromt( elementHtml) {
    const color = prompt("Dime el color en inglés", "yellow");
    elementHtml.innerHTML = "<h3>Ahora soy <em>" + color + "</em> </h3>";
    changeColor( elementHtml, color );
}