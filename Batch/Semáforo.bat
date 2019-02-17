@echo off
:semaforo
echo elija el color del semaforo
color F1
echo 1)Verde
echo 2)Amarillo 
echo 3)Rojo
echo 4)Otro color
echo 5)Salir)

 
set/p op=
if %op% == 1 goto Verde
if %op% == 2 goto Amarillo
if %op% == 3 goto Rojo 
if %op% == 4 goto Otro color
if %op% == 5 goto Salir

:Verde
cls 
color 0a
echo puede pasar 
pause>nul
goto semaforo

:Amarillo
cls 
color 06
echo Mantengase con cuidado
pause>nul 
goto semaforo

:Rojo
cls 
color 04
echo Detengase 
pause>nul 
goto semaforo

:Otro color 
cls 
color F0
echo elija un color de la lista 
pause>nul 
goto semaforo

:Salir 
exit