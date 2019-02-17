Proceso sin_titulo
	Para i<-1 Hasta 10 Hacer
		Leer n
		Si n=0 Entonces
			neg<-neg+1
		Sino
			Si n>0 Entonces
				pos<-pos+1
			Sino
				nel<-nel+1
			FinSi
		FinSi
	FinPara
	Escribir 'Positivos',pos,'Negativos',neg,'Neutros',nel
FinProceso

