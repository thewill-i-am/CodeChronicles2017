Proceso sin_titulo
	Repetir
		Escribir 'Elija una opcion'
		Escribir '1) Combustibles'
		Escribir '2) Servicios'
		Escribir '3) Venta de accesorios'
		Escribir '4) Facturar'
		Escribir '5) Salir'
		Leer op
		Borrar Pantalla
		Segun op  Hacer
			1:
				Repetir
					Escribir 'Elija una opcion'
					Escribir '1) Gasolina Regular'
					Escribir '2) Gasolina Super'
					Escribir '3) Diesel'
					Escribir '4) Volver'
					Leer op2
					Borrar Pantalla
					Segun op2  Hacer
						1:
							Escribir 'Ingrese la cantidad de litros'
							Leer litros
							Si litros=10 Entonces
								d<-6000
							Sino
								d<-litros*750
							FinSi
							cont=cont+d
							Escribir 'El monto es de',d
						2:
							Escribir 'Ingrese la cantidad de litros'
							Leer litros2
							Si litros2=10 Entonces
								d1<-7000
							Sino
								d1<-litros2*800
							FinSi
							cont=cont+d1
							Escribir 'El monto es de',d1
						3:
							Escribir 'Ingrese la cantidad de litros'
							Leer litros3
							Si litros3=10 Entonces
								d2<-5000
							Sino
								d2<-litros3*600
							FinSi
							cont=cont+d2
							Escribir 'El monto es de',d2
						4:
						De Otro Modo:
							Escribir 'Opcion no valida'
					FinSegun
				Hasta Que op2=4
			2:
				Repetir
					Escribir 'Elija una opcion'
					Escribir '1) Lavado'
					Escribir '2) Revision de frenos'
					Escribir '3) Revision total'
					Escribir '4) Volver'
					Leer op3
					Borrar Pantalla
					Segun op3  Hacer
						1:
							Escribir 'Ingrese el dia de lavado'
							Leer dia
							Si dia='Sabado' O dia='Domingo' Entonces
								d4<-6000
							Sino
								d4<-5000
							FinSi
							cont=cont+d4
							Escribir 'El monto a pagar es de',d4
						2:
							d5<-3000
							cont=cont+d5
							Escribir 'El monto a pagar es de',d5
						3:
							d6<-5000
							cont=cont+d6
							Escribir 'El monto a pagar es de',d6
						4:
						De Otro Modo:
							Escribir 'Opcion no valida'
					FinSegun
				Hasta Que op3=4
			3:
				Repetir
					Escribir 'Elija una opcion'
					Escribir '1) Aros'
					Escribir '2) Escobillas'
					Escribir '3) Frenos'
					Escribir '4) Volver'
					Leer op4
					Borrar Pantalla
					Segun op4  Hacer
						1:
							Escribir 'Ingrese la cantidad'
							Leer cant
							Si cant=4 Entonces
								d7<-3000
							Sino
								d7<-cant*1000
							FinSi
							cont=cont+d7
							Escribir 'El monto a pagar es de',d7
						2:
							Escribir 'Ingrese la cantidad'
							Leer cant2
							d8<-cant2*3000
							cont=cont+d8
							Escribir 'El monto a pagar es de',d8
						3:
							Escribir 'Ingrese la cantidad'
							Leer cant3
							d9<-cant3*5000
							coont=cont+d9
							Escribir 'El monto a pagar es de',d9
						4:
						De Otro Modo:
							Escribir 'Opcion no valida'
					FinSegun
				Hasta Que op4=4
			4:
				Borrar pantalla
				Escribir 'El monto total es de', cont
			5:
				Escribir 'Adiós'
			De Otro Modo:
				Escribir 'Opcion no valida'
		FinSegun
	Hasta Que op=5
FinProceso

