var ud=0;
var po=0;
var n=parseInt(prompt("Digite un numero"));
	while (n>0){
	ud=n%10;
	n=n/10;
	n=Math.floor(n);
	document.write(ud);

}
