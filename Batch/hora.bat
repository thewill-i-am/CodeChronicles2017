@echo off
echo.
set Hora_Completa=%TIME%
set Hora=%Hora_Completa:~0,2%
set Minutos=%Hora_Completa:~3,2%
set Segundos=%Hora_Completa:~6,2%
echo Hora completa:%Hora_Completa%
echo Hora:%Hora%
echo Minutos:%Minutos%
echo Segundos:%Segundos%
pause>nul