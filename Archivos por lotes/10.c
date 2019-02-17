#include<stdio.h>
float peso,b,altura,total;
main(){
    printf("Digite la masa\n ");
    scanf("%f", &peso);
    printf("Digite la altura\n");
    scanf("%f", &b);
    altura=b*b;
    total=peso/altura;
    printf("El indice de masa corporal es %f", total);{

    if (total>25){
            printf("   obeso");
    }
    if (total<=25 && total>=20){
            printf("   normal");
    }
    if (total<20){
            printf("   bajo de peso");
    }
    }
}
