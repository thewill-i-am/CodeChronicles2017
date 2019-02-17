var color;
color=prompt("Escriba su color");
color=color.toUpperCase();
if (isNaN(color)){
if (color=="ROJO"){
	alert("alto");
}
else if (color=="AMARILLO"){
	alert("Cuidado");
}
else if (color=="VERDE"){
	alert("avance");
}
else 
	alert ("No existe");
}
else
	alert ("No datos Numerico");