function vaciar(){
	document.getElementById("n1").value="";
}
var i=0;
var sum=0;
var mult;
function total(){
	 for(i=1; i<num; i++) {
            mult=num%i;
            if(mult==0) {
                    sum+=i;
            }
        }
        if(sum==num){
               document.getElementById('res').innerHTML="el numero"+num+"es perfecto";
            }
            else
                document.getElementById('cmt').innerHTML="el numero"+num+"no es perfecto";
}