function alfabeto(longitud, array1){
    for(var i=0; i<longitud; i++){
        if(array1[i] === "a")
            array1[i]=1;
        else if(array1[i] === "b")
            array1[i]=2;
        else if(array1[i] === "c")
            array1[i]=3;
        else if(array1[i] === "d")
            array1[i]=4;
        else if(array1[i] === "e")
            array1[i]=5;
        else if(array1[i] === "f")
            array1[i]=6;
        else if(array1[i] === "g")
            array1[i]=7; 
        else if(array1[i] === "h")
            array1[i]=8;
        else if(array1[i] === "i")
            array1[i]=9;
        else if(array1[i] === "j")
            array1[i]=10;
        else if(array1[i] === "k")
            array1[i]=11;
        else if(array1[i] === "l")
            array1[i]=12;
        else if(array1[i] === "m")
            array1[i]=13;   
        else if(array1[i] === "n")
            array1[i]=14;
        else if(array1[i] === "ñ")
            array1[i]=15;
        else if(array1[i] === "o")
            array1[i]=16;
        else if(array1[i] === "p")
            array1[i]=17;
        else if(array1[i] === "q")
            array1[i]=18;
        else if(array1[i] === "r")
            array1[i]=19; 
        else if(array1[i] === "s")
            array1[i]=20;
        else if(array1[i] === "t")
            array1[i]=21;
        else if(array1[i] === "u")
            array1[i]=22;
        else if(array1[i] === "v")
            array1[i]=23;
        else if(array1[i] === "w")
            array1[i]=24;
        else if(array1[i] === "x")
            array1[i]=25;          
        else if(array1[i] === "y")
            array1[i]=26;
        else if(array1[i] === "z")                                                          
            array1[i]=27;
        else if(array1[i] === " ")
            array1[i]=array1[i].charCodeAt(0);
    }
}
function codificar(input){
    // var array1 = Array.from(document.querySelector(".input").value);     // var array2 = [... input.value];
    var arraytemp =[];
    var value = input.value;
    value = value.toLowerCase();
    var array1 = Array.from(value);
    array1.reverse();
    var longitud = array1.length;
    alfabeto(longitud, array1);

    for(var i=0; i<longitud; i++){
        if(array1[i]%2===0){
            arraytemp[i]=i;
            if(array1[i] === 2){
                array1[i]="b";
                array1[i]=array1[i].charCodeAt(0);
            }
            else if(array1[i] === 4){
                array1[i]="d";
                array1[i]=array1[i].charCodeAt(0);
            }
            else if(array1[i] === 6){
                array1[i]="f";
                array1[i]=array1[i].charCodeAt(0);
            }
            else if(array1[i] === 8){
                array1[i]="h"; 
                array1[i]=array1[i].charCodeAt(0);
            }
            else if(array1[i] === 10){
                array1[i]="j";        
                array1[i]=array1[i].charCodeAt(0);
            }
            else if(array1[i] === 12){
                array1[i]="l";
                array1[i]=array1[i].charCodeAt(0);
            }
            else if(array1[i] === 14){
                array1[i]="n";
                array1[i]=array1[i].charCodeAt(0);
            }
            else if(array1[i] === 16){
                array1[i]="o";
                array1[i]=array1[i].charCodeAt(0);
            }
            else if(array1[i] === 18){
                array1[i]="q";
                array1[i]=array1[i].charCodeAt(0);
            }
            else if(array1[i] === 20){
                array1[i]="s";
                array1[i]=array1[i].charCodeAt(0);
            }
            else if(array1[i] === 22){
                array1[i]="u";
                array1[i]=array1[i].charCodeAt(0);
            }
            else if(array1[i] === 24){
                array1[i]="w";
                array1[i]=array1[i].charCodeAt(0);
            }
            else if(array1[i] === 26){
                array1[i]="y";
                array1[i]=array1[i].charCodeAt(0);
            }
        }
        // else {
        //     array1[i]=String(array1[i])+',';
        //     alert(array1[i]);
        // }
    }
    array1.unshift(longitud);

    arraytemp=arraytemp.filter(el => el != null);
    array1=array1.concat(arraytemp);
    output = array1.join(",");/////////////////////////////////////////////////////////elige separador
    console.log("vector unido: ", array1);
    // console.log("el mensaje es: "+output);
    return array1;
}

function decodificar(input){
    var value = input.value;
    var array1 = value.split(',').map(Number);
    var longitud = array1.shift();
    var longitudtotal = array1.length;
    var arraytemp = array1.slice(longitud, longitudtotal);
    var longitudtemp= arraytemp.length;
    var array1 = array1.slice(0,longitud);
    console.log("array1", array1);
    console.log("arraytemp", arraytemp);
    console.log("longitud", longitud);
    console.log("longitudtotal", longitudtotal);
    console.log("longitudtemp", longitudtemp);

    for(var i=0; i<longitud; i++){
        for(var n=0; n<longitudtemp; n++){
            if(i===arraytemp[n]){
                array1[i]=String.fromCharCode(array1[i]);
                console.log("letra", array1[i]);
            }
        }
        if(array1[i] === 1)
            array1[i]="a";
        else if(array1[i] === 3)
            array1[i]="c";
        else if(array1[i] === 5)
            array1[i]="e";
        else if(array1[i] === 7)
            array1[i]="g"; 
        else if(array1[i] === 9)
            array1[i]="i";
        else if(array1[i] === 11)
            array1[i]="k";
        else if(array1[i] === 13)
            array1[i]="m";   
        else if(array1[i] === 15)
            array1[i]="ñ";
        else if(array1[i] === 17)
            array1[i]="p";
        else if(array1[i] === 19)
            array1[i]="r"; 
        else if(array1[i] === 21)
            array1[i]="t";
        else if(array1[i] === 23)
            array1[i]="v";
        else if(array1[i] === 25)
            array1[i]="x";          
        else if(array1[i] === 27)                                                          
            array1[i]="z";
    }
    array1.reverse();
    output = array1.join("");
    console.log("vector decodificado", array1);
    return array1;
}

function decodificar2(array1, arraytemp){
    var longitud = array1.length;
    var longitudtemp = arraytemp.length;
    console.log("longitud", longitud);
    for(var i=0; i<longitud; i++){
        for(var n=0; n<longitudtemp; n++){
            if(i===arraytemp[n]){
                array1[i]=String.fromCharCode(array1[i]);
                console.log("letra", array1[i]);
            }
        }
        if(array1[i] === 1)
            array1[i]="a";
        else if(array1[i] === 3)
            array1[i]="c";
        else if(array1[i] === 5)
            array1[i]="e";
        else if(array1[i] === 7)
            array1[i]="g"; 
        else if(array1[i] === 9)
            array1[i]="i";
        else if(array1[i] === 11)
            array1[i]="k";
        else if(array1[i] === 13)
            array1[i]="m";   
        else if(array1[i] === 15)
            array1[i]="ñ";
        else if(array1[i] === 17)
            array1[i]="p";
        else if(array1[i] === 19)
            array1[i]="r"; 
        else if(array1[i] === 21)
            array1[i]="t";
        else if(array1[i] === 23)
            array1[i]="v";
        else if(array1[i] === 25)
            array1[i]="x";          
        else if(array1[i] === 27)                                                          
            array1[i]="z";
    }
    array1.reverse();
    output = array1.join("");
    console.log("vector decodificado", array1);
    return array1;
}

function imprimir(array1){
    console.log('valor de entrada', input.value);
    console.log("vector codificado", array1);
    console.log("Tu menmsaje codificado es ", output);
}
function ejecutar(){
    array1 = codificar(input);
    imprimir( array1);
    alert("Tu menmsaje codificado es: "+output);
}
function ejecutar2(){
    decodificar(input);    
    console.log(output);
    alert("El mensaje es: " + output);
}
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
