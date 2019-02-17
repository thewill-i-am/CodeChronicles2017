#include<stdio.h>
int a,b,c;
main(){
    printf("Ponga 3 numeros");
    scanf("%d", &a);
    scanf("%d", &b);
    scanf("%d", &c);
    if(a>b && a>c){
            printf("El mayor es: %d@",a);
    }
    else
    if(b>a && b>c){
            printf("El mayor es: %d@",b);
    }
    else
        printf("El mayor es: %d",c);
}

