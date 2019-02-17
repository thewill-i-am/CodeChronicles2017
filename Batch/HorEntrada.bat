@echo off
echo.
set Hora_Completa=%TIME%
set Hora=%Hora_Completa:~1,2%
:menu
echo Elija el menu que desee consultar
echo 1) Hora de Entrada
echo 2) Hora de Salida
echo 3) Salir

set/p op=
if %op% == 1 goto Hora
if %op% == 2 goto HoraSalida
if %op% == 3 goto Salir

:Hora
cls
:Hora:
echo Hora: %Hora_Completa%
if %Hora% GTR 7 (echo imputual) else if %Hora% EQU 7 (echo Puntual) else (echo Temprano)
echo.

:HoraSalida
cls
:HoraSalida
if %Hora% GEQ 5 (echo Puede salir.) else (echo No puede salir.)
echo digite uno para volver
set/p op1=
if %op1% == 1 goto menu

:Salir
echo Toque 1 para volver
set/p op1=
if %op1% == 1 goto menu
pause>nul