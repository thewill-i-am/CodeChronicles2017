@echo off 
echo esciba el nombre 
set/p W=
cls
echo escriba las tres notas
set/p n1=
set/p n2=
set/p n3=
set/a promedio=(%n1%+%n2%+%n3%)/3
echo hola %W% su promedio es %promedio%
if %promedio% GEQ 70 (echo aprobado) else if %promedio% GEQ 50 (echo Aprobado) else if %promedio% LSS 50 (echo Reprobado)

pause 
