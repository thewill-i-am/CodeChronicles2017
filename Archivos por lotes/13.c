#include<stdio.h>
int a,i,resultado;
main(){
printf("escriba el numero");
scanf("%d", &a);
for(i=1 ; i<=12 ;i++){
   printf("%d x %d=",a,i);
   resultado=a*i;
   printf("%d \n", resultado);
    }

}
