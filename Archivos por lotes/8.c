#include<stdio.h>
int a,total;
main(){
    printf("Digite el precio del articulo\n ");
    scanf("%d", &a);
    total=a%10;
    printf("El digito es %d" ,total);
    if (total % 2==0){
            printf("   es par");
    }
    else
            printf("         No es par");
}
