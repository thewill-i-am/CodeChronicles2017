var vec=new Array() ,mensaje,imc3;
            vec[0]="Obesidad morbida";
            vec[1]="Obesidad";
            vec[2]="Obesidad moderada";
            vec[3]="Peso ideal";
            vec[4]="Delgadez moderada";
            vec[5]="Delgadez severa";    
            vec[6]="Obesidad morbida";
            vec[7]="Obesidad";
            vec[8]="Obesidad moderada";
            vec[9]="Peso ideal";
            vec[10]="Delgadez moderada";
            vec[11]="Delgadez severa";    

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
    }

    else
        if (imc3>=30){
        }
    else
         if (imc3>=25){
        mensaje=vec[2];
        }
    else
        if (imc3>=20){
        mensaje=vec[3];
        }
    else
        if (imc3>=15){
        mensaje=vec[4];
        }
    else mensaje=vec[5];


document.getElementById("res").innerHTML=imc3+mensaje;

document.getElementById("res2").innerHTML=mensaje;
}