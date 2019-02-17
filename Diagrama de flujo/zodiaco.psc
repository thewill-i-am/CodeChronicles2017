Proceso sin_titulo
	Escribir 'Ingrese el numero de mes de su nacimiento:'
	Leer m
	Escribir 'Ingrese el dia de su nacimiento:'
	Leer d
	Si (d>=21 Y m=3) O (d<=20 Y m=4) Entonces
		Escribir 'Aries'
	Sino
		Si (d>=24 Y m=9) O (d<=23 Y m=10) Entonces
			Escribir 'Libra'
		Sino
			Si (d>=21 Y m=4) O (d0<=21 Y m=5) Entonces
				Escribir 'Tauro'
			Sino
				Si (d>=24 Y m=10) O (d<=22 Y m=11) Entonces
					Escribir 'Escorpio'
				Sino
					Si (d>=22 Y m=5) O (d<=21 Y m=6) Entonces
						Escribir 'Geminis'
					Sino
						Si (d>=23 Y m=11) O (d<=21 Y m=12) Entonces
							Escribir 'Sagitario'
						Sino
							Si (d>=21 Y m=6) O (d<=23 Y m=7) Entonces
								Escribir 'Cancer'
							Sino
								Si (d>=22 Y m=12) O (dia<=20 Y m=1) Entonces
									Escribir 'Capricornio'
								Sino
									Si (d>=24 Y m=7) O (d<=23 Y m=8) Entonces
										Escribir 'Leo'
									Sino
										Si (d>=21 Y m=1) O (d<=19 Y m=2) Entonces
											Escribir 'Acuario'
										Sino
											Si (d>=24 Y m=8) O (d<=23 Y m=2) Entonces
												Escribir 'Virgo'
											Sino
												Si (d>=20 Y m=2) O (d<=20 Y m=3) Entonces
													Escribir 'Piscis'
												FinSi
											FinSi
										FinSi
									FinSi
								FinSi
							FinSi
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
FinProceso

