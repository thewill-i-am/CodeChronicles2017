function vaciar1()
{
	document.getElementById("dolares").value="";
}

function convertir()
{
	var t1=document.getElementById("dolares");
	var pp=(t1.value)*565;
	pp=pp.toFixed(2);
	document.getElementById("res").innerHTML=pp+" colones";
}