Proceso sin_titulo
	Escribir "Hola bienvenido"
	Leer Jugador1
	Leer Jugador2
	Si Jugador1="Tijera" y Jugador2="Papel" Entonces
		Escribir "Jugador1 Gano"
	Sino
		Si (Jugador1="Papel" y Jugador2="Piedra") o (Jugador1="Papel" y Jugador2="Piedra") o (Jugador1="Tijera" y Jugador2="Papel") Entonces
			Escribir "Jugador 1"
		Sino
			Escribir "Jugador2"
		FinSi
	FinSi
FinProceso

