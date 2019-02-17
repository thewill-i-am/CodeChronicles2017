@echo off
set ct= 0
:Menu1
echo Elija el menu que desee consultar
echo 1) Novelas
echo 2) Diccionarios
echo 3) Revistas
echo 4) Articulos varios
echo 5) Facturacion
echo 6) Salir
set/p op=
if %op% == 1 goto Novelas
if %op% == 2 goto Diccionarios
if %op% == 3 goto Revistas
if %op% == 4 goto Articulos varios
if %op% == 5 goto Facturacion
if %op% == 6 goto Salir
:Novelas
cls
:Novelas
echo 1) Nacionales
echo 2) Internacionales
echo 3) Volver
set/p op=
if %op% == 1 goto Nacionales
if %op% == 2 goto Internacionales
if %op% == 3 goto Volver1
:Nacionales
cls
:Nacionales
echo 1) Unica mirando al mar
echo 2) Marco Ramirez
echo 3) Volver
set/p op=
if %op% == 1 goto Unica mirando al mar
if %op% == 2 goto Marco Ramirez
if %op% == 3 goto Volver
:Unica mirando al mar
echo Digite la cantidad que desea comprar
set/p n1=
set/a monto1= %n1% * 5500
set/a ct= ct + %monto1%
echo El resultado total es %monto1%
pause>nul
goto Nacionales
:Marco Ramirez
echo Digite la cantidad que desea comprar
set/p n1=
set/a monto2= %n1% * 5000
set/a ct= ct + %monto2%
echo El resultado total es %monto2%
pause>nul
goto Nacionales
:Volver
cls
goto Novelas
:Internacionales
cls
:Internacionales
echo 1) Diario de Ana Frank
echo 2) Frankestein
echo 3) Volver
set/p op=
if %op% == 1 goto Diario de Ana Frank
if %op% == 2 goto Frankestein
if %op% == 3 goto Volver
:Diario de Ana Frank
cls
echo Digite la cantidad que desea comprar
set/p n1=
set/a monto3= %n1% * 6000
set/a ct= ct + %monto3%
echo El resultado total es %monto3%
pause>nul
goto Internacionales
:Frankestein
cls
echo Digite la cantidad que desea comprar
set/p n1=
set/a monto4= %n1% * 7080
set/a ct= ct + %monto4%
echo El resultado total es %monto4%
pause>nul
goto Internacionales
:Volver
cls
goto Novelas
:Volver1
cls
goto Menu1
:Diccionarios
cls
:Diccionarios
echo 1) Significados
echo 2) Sinonimos-Antonimos
echo 3) Ingles-Español
echo 4) Volver2
set/p op=
if %op% == 1 goto Significados
if %op% == 2 goto Antonimos-Sinonimos
if %op% == 3 goto Ingles-Español
if %op% == 4 goto Volver2
:Significados
cls
echo Digite la cantidad que desea comprar
set/p n1=
set/a monto5= %n1% * 10000
set/a ct= ct + %monto5%
echo El resultado total es %monto5%
pause>nul
goto Diccionarios
:Antonimos-Sinonimos
cls
echo Digite la cantidad que desea comprar
set/p n1=
set/a monto6= %n1% * 8000
set/a ct= ct + %monto6%
echo El resultado total es %monto6%
pause>nul
goto Diccionarios
:Ingles-Español
cls
echo Digite la cantidad que desea comprar
set/p n1=
set/a monto7= %n1% * 7500
set/a ct= ct + %monto7%
echo El resultado total es %monto7%
pause>nul
goto Diccionarios
:Volver
cls
goto Diccionarios
:Volver2
cls
goto Menu1
:Revistas
cls
:Revistas
echo 1) Comidas
echo 2) Viajes
echo 3) Deportes
echo 4) Volver3
set/p op=
if %op% == 1 goto Comidas
if %op% == 2 goto Viajes
if %op% == 3 goto Deportes
if %op% == 4 goto Volver4
:Comidas
cls
echo Digite la cantidad que desea comprar
set/p n1=
set/a monto8= %n1% * 6000
set/a ct= ct + %monto8%
echo El resultado total es %monto8%
pause>nul
goto Revistas
:Viajes
cls
echo Digite la cantidad que desea comprar
set/p n1=
set/a monto9= %n1% * 5000
set/a ct= ct + %monto9%
echo El resultado total es %monto9%
pause>nul
goto Revistas
:Deportes
cls
echo Digite la cantidad que desea comprar
set/p n1=
set/a monto10= %n1% * 3000
set/a ct= ct + %monto10%
echo El resultado total es %monto10%
pause>nul
goto Revistas
:Volver
cls
goto Revistas
:Volver4
cls
goto Menu1
:Articulos Varios
cls
echo 1) Cuadernos
echo 2) Lapiceros
echo 3) Hojas Bond
echo 4) Volver5
set/p op=
if %op% == 1 goto Cuadernos
if %op% == 2 goto Lapiceros
if %op% == 3 goto Hojas Bond
if %op% == 4 goto Volver5
:Cuadernos
cls
echo Digite la cantidad que desea comprar
set/p n1=
set/a monto11= %n1% * 5000
set/a ct= ct + %monto11%
echo El resultado total es %monto11%
pause>nul
goto Articulos Varios
:Lapiceros
cls
echo Digite la cantidad que desea comprar
set/p n1=
set/a monto12= %n1% * 350
set/a ct= ct + %monto12%
echo El resultado total es %monto12%
pause>nul
goto Articulos Varios
:Hojas Bond
cls
echo Digite la cantidad que desea comprar
set/p n1=
set/a monto13= %n1% * 1000
set/a ct= ct + %monto13%
echo El resultado total es %monto13%
pause>nul
goto Articulos Varios
:Volver
cls
goto Articulos Varios
:Volver5
cls
goto Menu1
:Facturacion
cls
echo El total de su factura es igual a %ct%
goto Menu1
:Salir
cls



