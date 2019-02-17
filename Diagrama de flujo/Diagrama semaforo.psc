Proceso sin_titulo
	Leer color
	Si color="verde" Entonces
		Escribir "avance"
	Sino
		Si color="amarillo" Entonces
			Escribir "Precaucion"
		Sino
			Si color="rojo" Entonces
				Escribir "alto"
			Sino
				Escribir "No existe"
			FinSi
		FinSi
	FinSi
FinProceso

