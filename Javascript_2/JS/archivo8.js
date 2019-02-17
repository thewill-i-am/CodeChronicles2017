var ud=0;
var n=parseInt(prompt("Digite un numero"));

	ud=n%10;
	if (ud%2==1) {
		document.write("Impar el numero es: ");
	}
	else
		document.write("Par el numero es: ");
	ud=Math.floor(ud);
	document.write(ud);