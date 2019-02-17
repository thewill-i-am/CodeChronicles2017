var i="";
var num=0;
var sum=0;
var mult;
var b="";
function vaciar(){
    document.getElementById("n1").value="";
}
function procesar(){
     var num=document.getElementById("n1").value;
    if (num%4==0) {
          document.getElementById('res').innerHTML="Juegos Olimpicos";
    }
    else
        if(num%4==2){
              document.getElementById('res').innerHTML="Hay mundial";
            }
            else
                document.getElementById('res').innerHTML="No hay nada";
}
