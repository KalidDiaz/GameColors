function Colorin(){
	//Create 4 random number to choice colors (name and color)
var Nombre = Math.floor((Math.random()*10)+1);
var Color = Math.floor((Math.random()*5)+1);
var Nombre1 = Math.floor((Math.random()*5)+1);
var Color1 = Math.floor((Math.random()*5)+1);
//Colors names and colors values in hex
var NombreColor = ["","negro" , "amarillo" , "azul" , "rojo" , "verde", "azul" , "rojo", "verde", "amarillo", "negro"];
var ValorColor = ["", "#000000", "#fff000", "#0000ff", "#ff0000", "#32b92a"];
var Mostrar = NombreColor[Nombre];
var Mostrar1 = NombreColor[Nombre1];
var ElijeColor1 = ValorColor[Color] ;
var ElijeColor2 = ValorColor[Color1];


//Show the words at the screen
document.getElementById('NombreColorSup').innerHTML = Mostrar;
document.getElementById('NombreColorInf').innerHTML = Mostrar1;
$("#NombreColorSup").css("color", ElijeColor1);
$("#NombreColorInf").css("color", ElijeColor2);
return Mostrar1;
}

Colorin();

//Compare your anser vs the correct answer and increase or descreaser your result
function ComparaRespuesta(valor){
	var valor = valor;
	var total = parseFloat(document.getElementById('total').innerHTML);
	var totalmostrado;
	var comparacion = 0;
	var colorRGB = $("#NombreColorInf").css("color");
	color = hexc(colorRGB);
	if((document.getElementById('NombreColorSup').textContent=="negro") && (color=="#000000")){
		comparacion = 1;
	}
	else if((document.getElementById('NombreColorSup').textContent=="amarillo") && (color=="#fff000")){
		comparacion = 1;
	}
	else if((document.getElementById('NombreColorSup').textContent=="azul") && (color=="#0000ff")){
		comparacion = 1;
	}
	else if((document.getElementById('NombreColorSup').textContent=="rojo") && (color=="#ff0000")){
		comparacion = 1;
	}
	else if((document.getElementById('NombreColorSup').textContent=="verde") && (color=="#32b92a")){
		comparacion = 1;
	}
	else
		comparacion = 0;
	if(valor == comparacion){
		total = total + 10;
	}
	else
		total = total - 5;

	Colorin();
	totalmostrado = total.toString();
	return document.getElementById('total').innerHTML=""+totalmostrado;
}

//Change the color value RGB to Hex
function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');

    return color;
}


