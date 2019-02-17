var resu = new Array(12);

function vaciar(){
	document.getElementById("n1").value= " ";
}

function desglose(){
	mont=document.getElementById('n1').value;

var pri= mont*0.30;
pri=Math.floor(pri);
resu[0]= "Alimentos= "+pri+"<br>";

var seg= mont*0.15;
seg=Math.floor(seg);
resu[1]= "Gastos escolares= "+seg+"<br>";

var ter= mont*0.10;
ter=Math.floor(ter);
resu[2]= "Prendas de vestir= "+ter+"<br>";

var cua= mont*0.05;
cua=Math.floor(cua);
resu[3]= "Ahorro= "+cua+"<br>";

var quin= mont*0.03;
quin=Math.floor(quin);
resu[4]= "Entretenimiento= "+quin+"<br>";

var sext= mont*0.17;
sext=Math.floor(sext);
resu[5]= "Pago de recibos= "+sext+"<br>";

var sep= mont*0.10;
sep=Math.floor(sep);
resu[6]= "Meriendas= "+sep+"<br>";

var dec= mont*0.10;
dec=Math.floor(dec);
resu[7]= "Salud= "+dec+"<br>";


	document.getElementById("res").innerHTML = resu;
}