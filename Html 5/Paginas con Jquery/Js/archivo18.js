var cifra="";
var a=0;
var r=0;
function vaciar(){
	document.getElementById("n1").value="";
}
function imp(){
	document.getElementById('n1').value=cifra+1;
	cifra=document.getElementById('n1').value;
	a=document.getElementById("uno").value;
	r=Number(r)+Number(a);
}
function imp1(){
	document.getElementById('n1').value=cifra+2;
	cifra=document.getElementById('n1').value;
	a=document.getElementById("dos").value;
	r=Number(r)+Number(a);
}
function proces(){
	document.getElementById('res').innerHTML=r;
}