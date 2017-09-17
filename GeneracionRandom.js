/** Logic Game File
*/

//Create random number to choice colors (name and color)
function GetRandomNumber(dataLength) {
	return Math.floor((Math.random()* dataLength - 1) + 1)
}

function Colorin() {
	var dataColorsName = ["negro" , "amarillo" , "azul" , "rojo" , "verde", "azul" , "rojo", "verde", "amarillo", "negro"];
	var dataColorsHexa = ["#000000", "#fff000", "#0000ff", "#ff0000", "#32b92a"];

	var textTop = dataColorsName[GetRandomNumber(dataColorsName.length)];
	var textBot = dataColorsName[GetRandomNumber(dataColorsName.length)];

	var colorTop = dataColorsHexa[GetRandomNumber(dataColorsHexa.length)];
	var colorBot = dataColorsHexa[GetRandomNumber(dataColorsHexa.length)];

	//Show the words at the screen
	$("#NombreColorSup").text(textTop);
	$("#NombreColorInf").text(textBot);
	$("#NombreColorSup").css("color", colorTop);
	$("#NombreColorInf").css("color", colorBot);
}

//Compare your answer vs the correct answer and increase or descreaser your result
function CheckAnswer(userAnswer) {
	var correctAnswer = 0;
	var totalScore = parseFloat($("#total").text());
	var nombreColorSup = $("#NombreColorSup").textContent;
	var colorRGB = 	$("#NombreColorInf").css("color");
	var colorHex = hexc(colorRGB);
	
	if(nombreColorSup == "negro" && colorHex == "#000000") {
		correctAnswer = 1;
	}
	else if(nombreColorSup == "amarillo" && colorHex == "#fff000") {
		correctAnswer = 1;
	}
	else if(nombreColorSup == "azul" && colorHex == "#0000ff") {
		correctAnswer = 1;
	}
	else if(nombreColorSup == "rojo" && colorHex == "#ff0000") {
		correctAnswer = 1;
	}
	else if(nombreColorSup == "verde" && colorHex == "#32b92a") {
		correctAnswer = 1;
	}

	totalScore += (userAnswer == correctAnswer) ? 10 : -5;
	
	Colorin();
	$("#total").text(totalScore.toString());
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

// initialize
function Init() {
	Colorin();
}
Init();