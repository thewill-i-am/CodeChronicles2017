Proceso sin_titulo
	Dimension mat(4,4)
	Para i<-1 Hasta 4 Hacer
		Para j<-1 Hasta 4 Hacer
			Leer mat(i,j)
		FinPara
	FinPara
	Para i<-1 Hasta 4 Hacer
		Para j<-1 Hasta 4 Hacer
			Si j=i Entonces
				Escribir mat(i,j)
			FinSi
		FinPara
	FinPara
FinProceso

