Proceso sin_titulo
	Dimension mat(5,5)
	Para i<-1 Hasta 5 Hacer
		Para j<-1 Hasta 5 Hacer
			mat(1,1)<-((1))
			mat(1,2)<-((2))
			mat(1,3)<-((3))
			mat(1,4)<-((4))
			mat(1,5)<-((5))
			mat(2,1)<-((6))
			mat(2,2)<-((7))
			mat(2,3)<-((8))
			mat(2,4)<-((9))
			mat(2,5)<-((10))
			mat(3,1)<-((11))
			mat(3,2)<-((12))
			mat(3,3)<-((13))
			mat(3,4)<-((14))
			mat(3,5)<-((15))
			mat(4,1)<-((16))
			mat(4,2)<-((17))
			mat(4,3)<-((18))
			mat(4,4)<-((19))
			mat(4,5)<-((20))
			mat(5,1)<-((21))
			mat(5,2)<-((22))
			mat(5,3)<-((23))
			mat(5,4)<-((24))
			mat(5,5)<-((25))
			a=azar(5)+1
			b<-azar(5)+1
			Escribir "son las posiciones" a "," b
			Leer r
			Si mat(a,b)=r Entonces
				Escribir "Correcto"
			Sino
				Escribir "Tiene 3 oportunidades mas"
				Si mat(a,b)=r Entonces
					Escribir "Correcto"
				Sino
					Escribir "Tiene 2 oportunidades mas"
					Si condicion Entonces
					FinSi
				FinSi
			FinSi
		FinPara
	FinPara
FinProceso

