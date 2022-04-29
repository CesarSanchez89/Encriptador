var botonEncriptar = document.querySelector("#boton-encriptar");
document.getElementById("boton-copiar").style.visibility = "hidden";//hide

botonEncriptar.addEventListener("click",function(){

    var texto = document.querySelector("#texto");
    var palabra = texto.value;
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("informativo").style.display = "none";
    
    var wordKeys = ["ai", "enter", "imes", "ober", "ufat"];
    //transforma mi string en array
    var array = palabra.split("");

    //Reemplaza las vocales por el grupo wordKeys
    for (var i=0; i < array.length; i++ ){

        if (array[i]=="a"){
            array[i]=wordKeys[0];
        }

        else if (array[i]=="e"){
            array[i]=wordKeys[1];
        }

        else if (array[i]=="i"){
            array[i]=wordKeys[2];
        }

        else if (array[i]=="o"){
            array[i]=wordKeys[3];
        }

        else if (array[i]=="u"){
            array[i]=wordKeys[4];
        }

    }
    
    var union = array.join("");
    //entrego una valor a mi textarea
    document.getElementById("mensaje").value = union;
    document.getElementById("texto").value = "";
    document.getElementById("boton-copiar").style.visibility = "visible";//show
    

});

var botonDesencriptar = document.querySelector("#boton-desencriptar");

botonDesencriptar.addEventListener("click",function(){

    var texto = document.querySelector("#texto");
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("informativo").style.display = "none";
    
    var palabra = texto.value;
    var posicion = palabra.indexOf("ai");
    // mientras tengas una posición mayor o igual que 0,
    // ( -1 significa que no lo encontró)
    while (posicion >= 0)
    {
        // reemplaza "ai" por "a"
        palabra = palabra.slice(0, posicion) + "a" + palabra.slice(posicion + 2);
        // busca la siguiente ocurrencia de la palabra
        posicion = palabra.indexOf("ai");
    }

    var posicion = palabra.indexOf("enter");

    while (posicion >= 0)
    {
        // reemplaza "enter" por "e"
        palabra = palabra.slice(0, posicion) + "e" + palabra.slice(posicion + 5);
        // busca la siguiente ocurrencia de la palabra
        posicion = palabra.indexOf("enter");
    }

    var posicion = palabra.indexOf("imes");

    while (posicion >= 0)
    {
        // reemplaza "imes" por "i"
        palabra = palabra.slice(0, posicion) + "i" + palabra.slice(posicion + 4);
        // busca la siguiente ocurrencia de la palabra
        posicion = palabra.indexOf("imes");
    }

    var posicion = palabra.indexOf("ober");

    while (posicion >= 0)
    {
        // reemplaza "ober" por "o"
        palabra = palabra.slice(0, posicion) + "o" + palabra.slice(posicion + 4);
        // busca la siguiente ocurrencia de la palabra
        posicion = palabra.indexOf("ober");
    }

    var posicion = palabra.indexOf("ufat");

    while (posicion >= 0)
    {
        // reemplaza "ufat" por "u"
        palabra = palabra.slice(0, posicion) + "u" + palabra.slice(posicion + 4);
        // busca la siguiente ocurrencia de la palabra
        posicion = palabra.indexOf("ufat");
    }

    document.getElementById("mensaje").value = palabra;
    document.getElementById("texto").value = "";
    document.getElementById("boton-copiar").style.visibility = "visible";//show
    

});

function copy() {
    let copyText = document.querySelector("#mensaje");
    copyText.select();
    document.execCommand("copy");
  }
  
document.querySelector("#boton-copiar").addEventListener("click", copy);



