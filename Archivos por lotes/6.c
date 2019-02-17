#include<stdio.h>
float a,impuesto,total;
main(){
    printf("Digite el precio del articulo\n ");
    scanf("%f", &a);
    impuesto=a*0.15;
    total=a+impuesto;
    printf("El precio es %.2f" ,total);
    if (total>=1000000){
            printf("     Excelente producto");
    }
    else
        if (total<1000000 && total>=800000){
            printf("     Buen producto");
        }
          else
            if (total<800000 && total>=500000){
                printf("     Regular ");
            }
             else
                    printf("     De segunda");

}


