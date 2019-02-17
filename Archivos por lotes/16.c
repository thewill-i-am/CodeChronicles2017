#include<stdio.h>
int b,p,t=1,i;
main(){
printf("elija la base:");
scanf("%d", &b);
printf("elija la potencia");
scanf("%d", &p);
for(i=1 ; i<=p ;i++){
t=t*b;
}
printf("El numero es %d" ,t);
}
