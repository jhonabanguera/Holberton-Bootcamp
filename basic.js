document.getElementById("name").style.color = "Red";

function cambiarFondo(elemento) {
    /*if(elemento.style.backgroundColor == "black"){
        elemento.style.backgroundColor = "transparent";
    } else {
        elemento.style.backgroundColor = "black";
    }*/
   
    var random_color = Math.floor(Math.random()*16777215).toString(16);
    elemento.style.backgroundcolor = '#' + random_color;
}

setInterval(function(){
    var random_color = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("name").style.color = '#' + random_color;
}, 1000);

var textos = document.getElementsByClassName("info");

for(i = 0; i < textos.length; i++) {
    textos[i].style.color = "Blue";
    //@ts-checkcambiarFondo(textos[i]);
}

//Cambia el texto a color pupura
textos[1].style.color = "Purple";

document.getElementById("name").addEventListener("click", function(){
    alert("Hero name is " + this.innerHTML);
});


document.getElementById("profile_image").addEventListener("click", function(){
    cambiarFondo(this);
});


document.getElementById("linkedin").addEventListener("click", function(){
    window.location.href = "http://www.linkedin.com";
});
//-----------------------------------------------------------------------------
function mover (e) {
    var codigo_tecla = e.which || e.keyCode; 
    var vleft = parseInt(window.getComputedStyle(objImage, null).getPropertyValue("left"));
    var vtop = parseInt(window.getComputedStyle(objImage, null).getPropertyValue("top"));
    if(codigo_tecla == 65) {
        var newleft = vleft - 20;
        objImage.style.left =  newleft + "px";
    }

    if(codigo_tecla == 68) {
        var newleft = vleft + 20;
        objImage.style.left =  newleft + "px";
    }

    if(codigo_tecla == 83) {
        var newtop = vtop + 20;
        objImage.style.top =  newtop + "px";
    }

    if(codigo_tecla == 87) {
        var newtop = vtop - 20;
        objImage.style.top =  newtop + "px";
    }
}

var objImage = document.getElementById("profile_pic");
objImage.style.position = "relative";
document.addEventListener("keydown", mover);