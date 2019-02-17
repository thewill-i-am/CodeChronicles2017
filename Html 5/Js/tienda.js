var cifra="";
var a=0;
var r=0;
var vec=new Array(5);
vec[0]='<img src="Imagenes/descarga.jpg" width="300px" height="150px">';
vec[1]='<img src="Imagenes/CACTUS.jpg" width="300px" height="150px">';
vec[2]='<img src="Imagenes/chiles.jpg" width="300px" height="150px">';
vec[3]='<img src="Imagenes/nachos.jpg" width="300px" height="150px">';
vec[4]='<img src="Imagenes/taco_17.jpg" width="300px" height="150px">';
var msg;
var z="";
function vaciar(num){
	document.getElementById("n1").value="";
}
function imp(num1){
	document.getElementById('n1').value=cifra+num1;
	cifra=document.getElementById("n1").value;
	a=Number(num);
	r=Number(r)+Number(a);
	z=z+vec[0];
	if(cierto){
		document.getElementById("uno").value="Usado";
		cierto=false;
	}
	else{
		document.getElementById("uno").value = 1;
		cierto=true;
		}	
	}
function imp(num){
	document.getElementById('n1').value=cifra+1;
	cifra=document.getElementById('n1').value;
	a=Number(num);
	r=Number(r)+Number(a);
	z=z+vec[0];
}
function imp1(num){
	document.getElementById('n1').value=cifra+2;
	cifra=document.getElementById('n1').value;
	a=Number(num);
	r=Number(r)+Number(a);
	z=z+vec[1];
}
function imp2(num){
	document.getElementById('n1').value=cifra+3;
	cifra=document.getElementById('n1').value;
	a=Number(num);
	r=Number(r)+Number(a);
		z=z+vec[2];
}
function imp3(num){
	document.getElementById('n1').value=cifra+4;
	cifra=document.getElementById('n1').value;
	a=Number(num);
	r=Number(r)+Number(a);
		z=z+vec[3];
}
function imp4(num){
	document.getElementById('n1').value=cifra+5;
	cifra=document.getElementById('n1').value;
	a=Number(num);
	r=Number(r)+Number(a);
		z=z+vec[4];
}
function Carrito(){
	document.getElementById('res').innerHTML=" Monto a pagar "+r+"<br>";
	document.getElementById('cmt').innerHTML="Has comprado estos objetos"+"<br>"+z;
	$(document).ready(function(){
		$("label").hide().fadeIn(5000);
	});
}