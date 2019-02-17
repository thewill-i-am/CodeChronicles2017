!DOCTYPE html> 
<html> 
<head> 
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script> 
    <script type="text/javascript" src="script.js"></script> 
    <link rel="stylesheet" type="text/css" href="style.css"/>
</head> 
<body> 
        <h1>¿Piedra, Papel o Tijera?</h1> 
    <div class="u">Jugador: </div><div class="usuario">0</div> 
    <div class="ordenador">0</div><div class="o">Maquinola: </div>
    <div class="clear"></div> 
    <div id="resultado"></div> 
    <div id="opciones"> 
        <input type="radio" name="elemento" id="piedra" value="piedra"><label for="piedra">Piedra</label>
        <input type="radio" name="elemento" id="papel" value="papel"><label for="papel">Papel</label>
        <input type="radio" name="elemento" id="tijera" value="tijera"><label for="tijera">Tijera</label>
    </div> 
    <h1>Bender-69 TARINGA</h1> 
</body> 
</html>


el css 


html { 
    background: #444444; 
} 

body { 
    width: 450px; 
    padding:15% 25px 25px 25px;
    margin:auto; 
    background: #fff; 
    text-align:center; 
} 

.usuario, .u { 
    float: left; 
    font-size: 30px; 
    color: blue 
} 

.ordenador, .o { 
    float:right; 
    font-size:30px; 
    color: red 
} 

.o{ 
    margin-left:40px; 
} 

.clear { 
    clear:both; 
} 

input.radio { 
    width: 50px; 
} 
#resultado { 
    margin-top: 30px; 
    text-align: center; 
} 
#opciones { 
    margin-top: 30px; 
    font-size:30px; 
    text-align:center; 
} 

input{display: test} /* eliminamos el botón de los botones de selección */


script: 

[color=#000000][color=#000000]$(function() { 
    $('input[type="radio"]').click(function(){ 
        var elemento = $('input:radio[name=elemento]:checked').val();
        var aleatorio=Math.floor(Math.random()*3);
        if (aleatorio == 0) elemento_contra = "piedra";
        else if (aleatorio == 1) elemento_contra = "papel";
        else elemento_contra = "tijera";
        var ganador; 
        if (elemento == elemento_contra) ganador = "empate";
        else if ((elemento == "piedra" && elemento_contra == "tijera") || (elemento == "papel" && elemento_contra == "piedra") || (elemento == "tijera" && elemento_contra == "papel")) {
            ganador = "gana usuario";
            var actual = parseInt($('.usuario').html());
            actual += parseInt(1);
            $('.usuario').html(actual);
        } 
        else { 
            ganador = "gana ordenador";
            var actual = parseInt($('.ordenador').html());
            actual += parseInt(1);
            $('.ordenador').html(actual);
        } 
        $('#resultado').html("Usuario juega " + elemento + " - Ordenador juega " + elemento_contra + "<br> El resultado es " + ganador);
         
    }); 
});