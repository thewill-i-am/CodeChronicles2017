var i="";
var num=0;
var sum=0;
var mult;
var b="";
function vaciar(){
	document.getElementById("n1").value="";
}
function procesar(){
    var num=document.getElementById("n1").value;
	 for(i=1; i<num; i++) {
            mult=num%i;
            if(mult==0) {
                    sum+=i;
            }
        }
        if(sum==num){
              document.getElementById('res').innerHTML="perfecto";
            }
            else
                document.getElementById('res').innerHTML="no perfecto";
}
