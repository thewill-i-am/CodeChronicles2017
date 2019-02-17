@Echo off
echo.
echo.
set horaCompleta=%TIME%
set Hora=%horaCompleta:~1,2%
:inicio
echo Bienvenido al Parqueo
echo.
echo Su hora de entrada es: %horacompleta%
echo.
echo Digite la hora de Salida:
set/p horasalida=
set/a cantidadhoras= %horasalida%-%Hora%
echo.
echo cantidad de horas %cantidadhoras%
if %cantidadhoras% LEQ 4 (goto tarifa) else (goto chayanne)

:tarifa
echo su tarifa es de 600

echo digite uno para volver
set/p op1=
if %op1% == 1 goto inicio


:chayanne
set/a cuenta= %cantidadhoras% -4
set/a cuenta1= %cuenta%*1000
set/a cuenta2= %cuenta1% +600
echo su cuenta es de %cuenta2%

echo digite uno para volver
set/p op1=
if %op1% == 1 goto inicio

pause>nul



