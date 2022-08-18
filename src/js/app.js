
////Main////
var input = document.querySelector(".input");
var array1=new Array();
var output;

input.addEventListener('keypress', function (e){
    if(e.key === 'Enter'){
        ejecutar();
 		e.preventDefault();
     }
});

var codificarbtn = document.querySelector(".codificar");
codificarbtn.onclick= ejecutar;
document.querySelector(".decodificar").onclick = ejecutar2;

//codi//
var btn = document.querySelector(".oracle-one-codificar");
btn.onclick = encriptar;

var btn2 = document.querySelector(".oracle-one-decodificar");
btn2.onclick = desencriptar;