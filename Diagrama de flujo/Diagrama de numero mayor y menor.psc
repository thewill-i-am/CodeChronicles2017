Proceso sin_titulo
	Dimension vecnombre(5)
	Dimension vecedad(5)
	m<-0
	n<-0
	Para i<-1 Hasta 5 Hacer
		Escribir 'ingrese el nombre y la edades de las personas'
		Leer vecnombre(i)
		Leer vecedad(i)
	FinPara
	Para i<-1 Hasta 5 Hacer
		Si vecedad(i)>n Entonces
			n<-vecedad(i)
			b<-i
		FinSi
		Si vecedad(i)<n Entonces
			m=vecedad(i)
			a=i
		FinSi
	FinPara
	Escribir "El mayor es" vecnombre(b)
	Escribir "El menor es" vecnombre(a)
FinProceso

