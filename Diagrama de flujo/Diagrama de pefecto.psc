Proceso sin_titulo
	Leer n
	m<-n-1
	Para i<-1 Hasta m Hacer
		Si n MOD i=0 Entonces
			r<-r+i
		FinSi
	FinPara
	Si r=n Entonces
		Escribir 'Perfecto'
	Sino
		Escribir 'No perfecto'
	FinSi
FinProceso

