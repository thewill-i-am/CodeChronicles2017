
#include<stdio.h>
int a;
main(){
     do{
        srand(time(NULL));
        a=1+rand()% 7;
        printf("el numero es %d" , a);
    switch (a){
    case 1:
        system("cls");
        printf("San Jose %d \n");
        system("pause>null");
        break;
    case 2:
        system("cls");
        printf("Alajuela %d \n" ,a);
        system("pause>null");
        break;
    case 3:
        system("cls");
        printf("Heredia %d \n", a);
        system("pause>null");
        break;
    case 4:
        system("cls");
        printf("Cartago %d \n", a);
        system("pause>null");
        break;
    case 5:
        system("cls");
        printf("Puntarenas %d \n", a);
        system("pause>null");
        break;
    case 6:
        system("cls");
        printf("Guanacaste %d \n", a);
        system("pause>null");
        break;
    case 7:
        system("cls");
        printf("Limon %d \n" ,a);
        system("pause>null");
        break;
    default:
        system("cls");
        printf("Numero incorrecto");
        system("pause>null");
    }
    }while(a!=8);
}





