document.getElementById("name").style.color = "Red";

var textos = document.getElementsByClassName("info");

for(i = 0; i < textos.length; i++) {
    textos[i].style.color = "Blue";
}

//Cambia el texto a color pupura
textos[1].style.color = "Purple";

document.getElementById("name").addEventListener("click", function(){
    alert("Hero name is " + this.innerHTML);
});

function cambiarFondo(elemento) {
    if(elemento.style.backgroundColor == "black"){
        elemento.style.backgroundColor = "transparent";
    } else {
        elemento.style.backgroundColor = "black";
    }
}

document.getElementById("profile_image").addEventListener("click", function(){
    cambiarFondo(this);
});
