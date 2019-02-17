Proceso sin_titulo
	Repetir
		Escribir 'Digite su opción'
		Escribir '1) Suma'
		Escribir '2) Resta'
		Escribir '3) Mutiplicar'
		Escribir '4) Salir'
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
				borrar pantalla
			2:
				Escribir 'Digite 2 numeros'
				Leer c
				Leer d
				res<-c-d
				Escribir 'La resta es',res
				esperar 2 segundos
				borrar pantalla
			3:
				p=1
				Leer b
				Leer e
				Si e=0 Entonces
					p=1
				Sino
					Para i<-1 Hasta e Hacer
						p=p*b
					FinPara
				FinSi
				Escribir p
				borrar pantalla
			4:
				Escribir 'Bye'
				Escribir 'Chao'
			De Otro Modo:
				Escribir 'No existe pa'
		FinSegun
	Hasta Que op=4
FinProceso

