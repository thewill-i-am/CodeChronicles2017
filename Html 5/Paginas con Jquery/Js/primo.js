 var i="";
var num=0;
var sum=0;
var mult;
var b="";
var acu=0;
function vaciar(){
	document.getElementById("n1").value="";
}
function procesar(){
    var num=document.getElementById("n1").value;
   	
	 for(i=1; i<=num; i++) {
            if(num%i==0) {
                    acu=acu+1;

            }
        }
  
        if(acu==2){
              document.getElementById('res').innerHTML="Primo";
            }
            else
                document.getElementById('res').innerHTML="No es Primo";
}
