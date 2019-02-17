var cifra=" ";
var a1=0;
var a2=0;
var a3=0;
var a4=0;
var a5=0;
var r1=0;
var r2=0;
var r3=0;
var r4=0;
var r5=0;
var b1=0;
var b2=0;
var b3=0;
var b4=0;
var b5=0;
var r=0;



function vaciar(){
	document.getElementById("n1").value= "";
}

function papas(){
	a1=document.getElementById("uno").value
	r1=Number(r1)+Number(a1);
	b1=1;
	return r1;
}

function suavitel(){
	a2=document.getElementById("dos").value
	r2=Number(r2)+Number(a2);
	b2=1;
	return r2;
}

function tila(){
	a3=document.getElementById("tres").value
	r3=Number(r3)+Number(a3);
	b3=1;
	return r3;
}
function xedex(){
	a4=document.getElementById("cuatro").value
	r4=Number(r4)+Number(a4);
	b4=1;
	return r4;
}

function pan(){
	a5=document.getElementById("cinco").value
	r5=Number(r5)+Number(a5);
	b5=1;
	return r5;
}


function carrito(){
	r=r1+r2+r2+r3+r4+r5;
document.getElementById("res").innerHTML=r;

if(b1==1){
	document.getElementById("img1").innerHTML="<img src='imagenes/papas.jpg' width='150px' height='150px'>" 
}

if(b2==1){
	document.getElementById("img2").innerHTML="<img src='imagenes/roca.jpg' width='150px' height='150px'>" 
}

if(b3==1){
	document.getElementById("img3").innerHTML="<img src='imagenes/tila.jpg' width='150px' height='150px'>" 
}
if(b4==1){
	document.getElementById("img4").innerHTML="<img src='imagenes/lel.jpg' width='150px' height='150px'>" 
}
if(b5==1){
	document.getElementById("img5").innerHTML="<img src='imagenes/pan.jpg' width='150px' height='150px'>" 
}
}

