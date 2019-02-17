@echo off
color 0A
:menu
echo elija opcion 
echo 1)Suma
echo 2)Resta
echo 3)Multiplicar
echo 4)Dividir
echo 5)Salir

set/p op=
if %op% == 1 goto Sumar
if %op% == 2 goto Restar
if %op% == 3 goto Multiplicar
if %op% == 4 goto Dividir
if %op% == 5 goto Salir 

:Sumar
cls

echo escriba 2 digitos
set/p n1=
set/p n2=

set/a suma=%n1%+%n2%
echo la suma es %suma%
pause>null
cls
goto menu

:Restar
cls

echo escriba 2 digitos
set/p n1=
set/p n2=

set/a resta=%n1%-%n2%
echo la resta es %resta%
pause>null
cls
goto menu

:Multiplicar
cls

echo escriba 2 digitos
set/p n1=
set/p n2=

set/a multi=%n1%*%n2%
echo la multiplicacion es es %multi%
pause>null
cls
goto menu

:Dividir
cls

echo escriba 2 digitos
set/p n1=
set/p n2=

set/a div=%n1%/%n2%
echo la divicion es %div%
pause>null
cls
goto menu


:Salir 
exit
