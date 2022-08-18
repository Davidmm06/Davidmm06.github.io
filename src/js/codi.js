function encriptar(){
    var texto = document.querySelector(".input").value.toLowerCase();

    var input = texto.replace(/e/img, "enter");
    var input = input.replace(/i/img, "imes");
    var input = input.replace(/a/img, "ai");
    var input = input.replace(/o/img, "ober");
    var input = input.replace(/u/img, "ufat");


    // document.querySelector(".input").innerHTML = input;
    document.getElementsByClassName("input")[0].value = input;
    console.log(input);
}

function desencriptar(){
    var texto = document.querySelector(".input").value.toLowerCase();

    var input = texto.replace(/enter/img, "e");
    var input = input.replace(/imes/img, "i");
    var input = input.replace(/ai/img, "a");
    var input = input.replace(/ober/img, "o");
    var input = input.replace(/ufat/img, "u");
    console.log(input);


    document.getElementsByClassName("input")[0].value = input;
}
