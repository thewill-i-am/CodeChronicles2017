@echo off
echo.
echo.
md curriculum
echo creando curriclum
pause
cd curriculum
md Aficionados amigos "datos personales" estudios familia
echo creando carpetas
cd aficionados
md ocio pasatiempos
cd..
cd amigos
md cercanos lejanos
echo creando carpetas en amigos
cd..
cd "datos personales"
md direccion nombre
cd..
cd estudios
md actuales concluidos
cd..
cd familia
md cercanos lejanos
cd..
echo presione control+z para cerrar el texto 
copy con aficionados\pasatiempos\pasatiempos.txt
echo documento de Word cerrar con Control+z
copy con amigos\cercanos\cercanos.doc
echo documento de excell cerrar con Control+z
copy con estudios\actuales\Estudios.xls
copy Aficionados\pasatiempos\pasatiempos.txt estudios\actuales
rd /s amigos\cercanos
move estudios\actuales\estudios.xls aficionados\ocio

pause 
tree
echo este es el arbol
pause
