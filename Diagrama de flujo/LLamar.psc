Proceso sin_titulo
	Repetir
		Escribir 'Digite su opción'
		Escribir '1) Perfecto'
		Escribir '2) Primo'
		Escribir '3) Factorial de Numero'
		Escribir '4) Potencia'
		Escribir '5) Salir'
		Leer op
		Borrar Pantalla
		Segun op  Hacer
			1:
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
				Borrar Pantalla
			2:
				p<-1
				Leer b
				Leer e
				Si e=0 Entonces
					p<-1
				Sino
					Para i<-1 Hasta e Hacer
						p<-p*b
					FinPara
				FinSi
				Escribir p
				Borrar Pantalla
			3:
				num<-1
				Leer n
				Para i<-1 Hasta n Hacer
					num<-i*num
				FinPara
				Escribir num
				Borrar Pantalla
			4:
				p<-1
				Leer b
				Leer e
				Si e=0 Entonces
					p<-1
				Sino
					Para i<-1 Hasta e Hacer
						p<-p*b
					FinPara
				FinSi
				Escribir p
			5:
			De Otro Modo:
				Escribir 'No existe pa'
		FinSegun
	Hasta Que op=4
FinProceso

