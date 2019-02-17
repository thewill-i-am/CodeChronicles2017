#include<stdio.h>
int op,i,num=0,sum=0,mult,j,a,b,tb,f,c;
main(){
     do{
    system("cls");
    system("color 0a");
    system("pause>null");
    printf("1)opcion Perfecto \n");
    printf("2)opcion Numeros Primos del 1 al 100 \n");
    printf("3)opcion Valor Absoluto \n");
    printf("4)opcion Factorial Numero \n");
    printf("5)opcion Elecciones Presidenciales CR \n");
    printf("6)opcion Salir \n");
    scanf("%d,",&op);
    switch (op){
    case 1:
        sum=0;
        system("cls");
        printf("Ingrese el numero \n");
        scanf("%d", &num);

        for(i=1; i<num; i++) {
            mult=num%i;
            if(mult==0) {
                    sum+=i;
            }
        }
            if(sum==num){
                printf("El numero %d es perfecto ", num);
            }
            else
                printf("El numero %d no es perfecto", num);
        system("pause>null");
        break;
    case 2:
        system("cls");
        for(i=1; i<=100;i++) {
        for(j=1; j<=i;j++) {
            if(i % j==0){
                a++;
            }

        }
        if(a==2){
            printf("%d \t",i);
        }
        a=0;
        }
        system("pause>null");
        break;
    case 3:
        system("cls");
        printf("Escriba el digito que le quira sacar valor absoluto \n");
        scanf("%d", &b);
        if(b>0){
            printf("es %d", b);
        }
        else
        if(b<0){
            b=-1*b;
            printf("es %d", b);

        }

        system("pause>null");
        break;
    case 4:
        f=1;
        system("cls");
        printf("Ingrese el numero \n");{
            scanf("%d", &c);
            for(i=1; c<=i,i++) {
            c=c*i;
            c=0;
            printf("el numero es %d", c);

        }
        }



        system("pause>null");
        break;
    case 5:
        system("cls");
        printf(" \n");
        system("pause>null");
        break;
    case 6:
        system("cls");
        printf("Adios \n");
        system("pause>null");
        break;
    default:
        system("cls");
        printf("Numero incorrecto");
        system("pause>null");
    }
    }while(op!=3);

}





