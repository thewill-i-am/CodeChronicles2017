Proceso sin_titulo
	Escribir 'Inserte un año'
	Leer anio
	Si anio>=1896 Entonces
		Si anio MOD 4=0 Entonces
			Si anio>=2017 Entonces
				Escribir 'Si habran o hay Juegos'
			Sino
				Escribir 'Si hubo Juegos Olimpicos'
			FinSi
		Sino
			Si anio>=2017 Entonces
				Escribir 'NO habran Juegos olimpicos'
			Sino
				Escribir 'No hubo Juegos'
			FinSi
		FinSi
	Sino
		Escribir 'En este año no existian :('
	FinSi
	Si anio>=1930 Entonces
		Si anio MOD 4=2 Entonces
			Si anio>=2017 Entonces
				Escribir 'Si habra Mundial'
			Sino
				Escribir 'Si hubo Mundial'
			FinSi
		Sino
			Si anio>=2017 Entonces
				Escribir 'No habra Mundial'
			Sino
				Escribir 'No hubo Mundial'
			FinSi
		FinSi
	Sino
		Escribir 'No existian mundiales :('
	FinSi
FinProceso

