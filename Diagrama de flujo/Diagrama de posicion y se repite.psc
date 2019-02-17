Proceso sin_titulo
	Dimension vecR(8)
	Escribir "Ingrese un numero"
	Leer a
	vecR(1)=1
	vecR(2)=2
	vecR(3)=3
	vecR(4)=4
	vecR(5)=3
	vecR(7)=7
	vecR(6)=8
	vecR(8)=6
	Para i<-1 Hasta 8 Hacer
		Si vecR(i)=a Entonces
			b=b+1
			Escribir "Posicion", i
		FinSi
	FinPara
	Escribir "Se repite", b "veces"
FinProceso

