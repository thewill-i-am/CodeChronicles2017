
var mensaje=["Obesidad morbida","Obesidad","Obesidad moderada","Peso ideal","Delgadez moderada","Delgadez severa", "Deje lol gorda", "Haga ejercicio", "Coma más saludable", "No empiece a jugar lol", "Coma mejor", "Tragese todo lo que encuentre"];
var mensajeHTML;
var evaluar=true;

function vaciar1(){
	document.getElementById("n1").value = "";
}
function vaciar2(){
	document.getElementById("n2").value = "";
}
function imca(){
	var peso= document.getElementById("n1");
	var altura = document.getElementById("n2");
	var a= document.getElementById("res");
var resul= document.getElementById("res1");

imc= Number(peso.value)/(Number(altura.value)*Number(altura.value));


if(imc>=40){
	mensajeHTML=mensaje[0];
}
else
if(imc>=30){
	mensajeHTML=mensaje[1];
}
else
if(imc>=25){
	mensajeHTML=mensaje[2];
}
else
if(imc>=20){
	mensajeHTML=mensaje[3];
}
if(imc>=15){
	mensajeHTML=mensaje[4];
}
else
	mensajeHTML=mensaje[5];


	document.getElementById("res1").innerHTML = mensajeHTML;
 
document.getElementById("res").innerHTML = imc;
}





function rec(){
	var peso= document.getElementById("n1");
	var altura = document.getElementById("n2");
	var a= document.getElementById("res");
var result= document.getElementById("res3");

imc= Number(peso.value)/(Number(altura.value)*Number(altura.value));


if(imc.value>=40){
	mensajeHTML=mensaje[6];
}
else
if(imc.value>=30){
	mensajeHTML=mensaje[7];
}
else
if(imc.value>=25){
	mensajeHTML=mensaje[8];
}
else
if(imc.value>=20){
	mensajeHTML=mensaje[9];
}
if(imc.value>=15){
	mensajeHTML=mensaje[10];
}
else
	mensajeHTML=mensaje[11];

	document.getElementById("res3").innerHTML = mensajeHTML;
 
}