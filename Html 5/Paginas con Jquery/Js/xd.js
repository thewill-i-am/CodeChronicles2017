var vec=new Array();
            vec[0]="ESCAZU";
            vec[1]="CENTRAL";
            vec[2]="DESAMPARADOS";

var vec1=new Array();
            vec1[0]=["<a href='Imagenes/Agrandar.html''>"];
            vec1[1]=["<a href='Imagenes/Agrandar.html''>"];
            vec1[2]=["<a href='Imagenes/Agrandar.html''>"];

function vaciar(){
    document.getElementById("juga").value = "";
}

function numeroAleatorio(min, max) {
                var num = Math.round(Math.random() * (max - min) + min);
                return(num);
            }


function jugando(){
    var bkc=document.getElementById("juga");
    bkc.value= bkc.value.toUpperCase();
    alt=numeroAleatorio(0, 2);
if (isNaN(bkc.value)){
    if (vec[alt]=="TIJERA" && bkc.value=="TIJERA" || vec[alt]=="PAPEL" && bkc.value=="PAPEL" || vec[alt]=="PIEDRA" && bkc.value=="PIEDRA"){
    computadora= vec[alt];
    estado="empate"
    document.getElementById("res").innerHTML=computadora;
    document.getElementById("res2").innerHTML=estado;
    document.getElementById("res3").innerHTML=vec1[alt];
}

    else if (vec[alt]=="TIJERA" && bkc.value=="PIEDRA" || vec[alt]=="PAPEL" && bkc.value=="TIJERA" || vec[alt]=="PIEDRA" && bkc.value=="PAPEL"){
    computadora= vec[alt];
    estado="Gana el usuario"
    document.getElementById("res").innerHTML=computadora;
    document.getElementById("res2").innerHTML=estado;
    document.getElementById("res3").innerHTML=vec1[alt];
}

    else if (vec[alt]=="TIJERA" && bkc.value=="PAPEL" || vec[alt]=="PAPEL" && bkc.value=="PIEDRA" || vec[alt]=="PIEDRA" && bkc.value=="TIJERA"){
    computadora= vec[alt];
    estado="Gana la computadora"
    document.getElementById("res").innerHTML=computadora;
    document.getElementById("res2").innerHTML=estado;
    document.getElementById("res3").innerHTML=vec1[alt];
}


}
 else
     alert ("Porfavor escriba texto.");
}
