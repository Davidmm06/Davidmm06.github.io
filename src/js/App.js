
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
//Hola//