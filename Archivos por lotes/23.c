#include<stdio.h>
int a;
main(){
     do{
        srand(time(NULL));
        a=1+rand()% 7;
        printf("el numero es %d" , a);
    scanf("%d,",&a);
    switch (a){
    case 1:
        system("cls");
        printf("San Jose \n");
        system("pause>null");
        break;
    case 2:
        system("cls");
        printf("Alajuela \n");
        system("pause>null");
        break;
    case 3:
        system("cls");
        printf("Heredia \n");
        system("pause>null");
        break;
    case 4:
        system("cls");
        printf("Cartago \n");
        system("pause>null");
        break;
    case 5:
        system("cls");
        printf("Puntarenas \n");
        system("pause>null");
        break;
    case 6:
        system("cls");
        printf("Guanacaste \n");
        system("pause>null");
        break;
    case 7:
    system("cls");
    printf("Limon \n");
    system("pause>null");
        break;
    default:
        system("cls");
        printf("Numero incorrecto");
        system("pause>null");
    }
    }while(op!=3);
}





