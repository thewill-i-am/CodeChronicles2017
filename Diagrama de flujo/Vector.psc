Proceso sin_titulo
	Dimension vec(5)
	Para i<-1 Hasta 5 Hacer
		Leer vec(i)
	FinPara
	a=1
	Para i<-1 Hasta 5 Hacer
		Si i<>1 y i<>5 Entonces
			a=a*vec(i)
		FinSi
	FinPara
	Escribir a
FinProceso

