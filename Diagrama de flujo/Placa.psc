Proceso sin_titulo
	Escribir "Ingrese la placa"
	Leer p
	f=p mod 10
	Si f=1 o f=2 Entonces
		Si f=1 Entonces
			Escribir "Dia de restricion lunes y mes de revision enero"
		Sino
			Escribir "Dia de restricion lunes y mes de revision Febrero"
		FinSi
	Sino
		Si f=3 o f=4 Entonces
			Si f=3 Entonces
				Escribir "Dia de restricion martes y mes de revision Marzo"
			Sino
				Escribir "Dia de restricion es martes y mes de revision Abril"
			FinSi
		Sino
			Si f=5 o f=6 Entonces
				Si f=5 Entonces
					Escribir "Dia de restricion miercoles y mes de revision Mayo"
				Sino
					Escribir "Dia de restriccion miercoles y mes de restriccion Mayo"
				FinSi
			Sino
				Si f=7 o f=8 Entonces
					Si f=7 Entonces
						Escribir "Dia de restriccion es Jueves y mes Junio"
					Sino
						Escribir "Dia de restriccion es Jueves y mes Agosto"
					FinSi
				Sino
					Si f=9 o f=0 Entonces
						Si f=9 Entonces
							Escribir "El dia de restriccion es Viernes y mes Setiembre"
						Sino
							Escribir "El dia de restriccion es viernes y mes Octubre"
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
FinProceso

