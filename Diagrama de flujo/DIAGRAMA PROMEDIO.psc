Proceso sin_titulo
	Leer T1
	Leer T2
	Leer T3
	P=(T1+T2+T3)/3
	Si P>=95 Entonces
		Escribir "Excelente"
	Sino
		Si P>=85 Entonces
			Escribir "Muy bien"
		Sino
			Si P>=75 Entonces
				Escribir "Bien"
			Sino
				Si P>=70 Entonces
					Escribir "Puede mejorar"
				Sino
					Si P>=50 Entonces
						Escribir "Aplazo"
					Sino
						Escribir "Reprobo"
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
FinProceso

