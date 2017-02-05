function actividad4(str)
{
	var h = 7;
	var letters = ['a', 'c', 'd', 'e', 'g', 'i', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'w'];
	for (var i = 0; i < str.length; i++) 
	{
	 	var letter = str[i];
	 	var index = letters.indexOf(letter);
	 	h = (h * 37) + index;
	}
	return h;
}

function decodificar(strCode, resultado = '')
{
	var letters = ['a', 'c', 'd', 'e', 'g', 'i', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'w'];

	if(!Number.isInteger(parseInt(strCode)))
		return false;

	if(strCode == 7)
	{
		document.getElementById('sin-codificar').innerHTML = invertirCadena(resultado);
		return true;
	}

	for (var i = 0; i < letters.length; i++)
	{
		var anterior = (strCode - i) / 37;

		if(Number.isInteger(anterior))
		{
			resultado += letters[i];
			decodificar(anterior,resultado);
		}
	}
}

function invertirCadena(str){
    return str.split("").reverse().join("");
}

function codificar(str)
{
	document.getElementById('codificada').innerHTML = actividad4(str);
}