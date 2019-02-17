var vec=new Array() ,mensaje,imc,imc3;
            vec[0]="Obesidad morbida";
            vec[1]="Obesidad";
            vec[2]="Obesidad moderada";
            vec[3]="Peso ideal";
            vec[4]="Delgadez moderada";
            vec[5]="Delgadez severa";
            vec[6]="Obesidad morbida";
            vec[7]="No Coma";
            vec[8]="No Coma";
            vec[9]="Mantengase";
            vec[10]="Coma y amese a ud mismo";
            vec[11]="Haga actividad fisica , coma y amese";        

function masa (){
    document.getElementById("m").value= "";
}
function estatura (){

    document.getElementById("e").value= "";
}
function imc (){
    
    imc1=document.getElementById("m");
    imc2=document.getElementById("e");
   imc3=imc1.value/(imc2.value*imc2.value);

    if (imc3>=40){
        mensaje=vec[0];
         coma=vec[6];
    }

    else
        if (imc3>=30){
             mensaje=vec[1];
             coma=vec[7];
        }
    else
         if (imc3>=25){
        mensaje=vec[2];
        coma=vec[8];
        }
    else
        if (imc3>=20){
        mensaje=vec[3];
        coma=vec[9];
        }
    else
        if (imc3>=15){
        mensaje=vec[4];
        coma=vec[10];
        }
    else
     mensaje=vec[5];
    coma=vec[11];


document.getElementById("res").innerHTML=imc3;

document.getElementById("res2").innerHTML=mensaje;

document.getElementById("res3").innerHTML=coma;
}