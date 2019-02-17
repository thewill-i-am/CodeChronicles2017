function dolares()
{
	document.getElementById("n1").value="";
}

function convertir()
{
	var t1=document.getElementById("n1");
	var pp=(t1.value)/705;
	pp=pp.toFixed(2);
	alert(pp);

	document.getElementById("res").innerHTML=pp;
}