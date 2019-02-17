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
function vaciar(){
	document.getElementById("n1").value="";
}
function imp(){
	document.getElementById('n1').value=cifra+1;
	cifra=document.getElementById('n1').value;
	a=document.getElementById("uno").value;
	r=Number(r)+Number(a);
	z=z+vec[0];
}
function imp1(){
	document.getElementById('n1').value=cifra+2;
	cifra=document.getElementById('n1').value;
	a=document.getElementById("dos").value;
	r=Number(r)+Number(a);
	z=z+vec[1];
}
function imp2(){
	document.getElementById('n1').value=cifra+3;
	cifra=document.getElementById('n1').value;
	a=document.getElementById("tres").value;
	r=Number(r)+Number(a);
		z=z+vec[2];
}
function imp3(){
	document.getElementById('n1').value=cifra+4;
	cifra=document.getElementById('n1').value;
	a=document.getElementById("cuatro").value;
	r=Number(r)+Number(a);
		z=z+vec[3];
}
function imp4(){
	document.getElementById('n1').value=cifra+5;
	cifra=document.getElementById('n1').value;
	a=document.getElementById("cinco").value;
	r=Number(r)+Number(a);
		z=z+vec[4];
}
function Carrito(){
	document.getElementById('res').innerHTML="monto a pagar"+r+"<br>";
	document.getElementById('cmt').innerHTML="Has comprado estos objetos"+"<br>"+z;
}