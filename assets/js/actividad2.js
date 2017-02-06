function init()
{
	var numeros = parseArray(document.getElementById('numeros').value.split(','));

	var iteraciones1 = mayorDiferencia1(numeros);
	var iteraciones2 = mayorDiferencia2(numeros);
	var rendimiento = document.getElementById('rendimiento');

	rendimiento.innerHTML = (iteraciones1 < iteraciones2) ? 
							'La primera función es mejor al tener un menor número de pasos' :
							'Ambas funciones tienen el mismo rendimiento';

	document.getElementById('contenedor-resultado').style.display = 'block';
}

function parseArray(arreglo)
{
	var arregloNumerico = new Array();
	arreglo.forEach(function(value,index)
		{
			if(!isNaN(value))
				arregloNumerico.push(parseInt(value));
		});
	return arregloNumerico;
}

function mayorDiferencia1(numeros)
{
	if(numeros.length <= 1)
		return false;

	var iteraciones = 1;
	var mayorNumero = numeros[0], 
		menorNumero = numeros[0];

	for(iteraciones; iteraciones < numeros.length; iteraciones++)
	{
		mayorNumero = (numeros[iteraciones] > mayorNumero) ? numeros[iteraciones] : mayorNumero;
		menorNumero = (numeros[iteraciones] < menorNumero) ? numeros[iteraciones] : menorNumero;
	}

	document.getElementById('resultado-1').innerHTML = 'La mayor diferencia es la de '+menorNumero+' menos '+mayorNumero+' = '+(menorNumero - mayorNumero);
	document.getElementById('iteraciones-1').innerHTML = iteraciones;

	return iteraciones;
}

function mayorDiferencia2(numeros)
{
	if(numeros.length <= 1)
		return false;

	var iteraciones = 0;
	var minuendo = numeros[0],
		sustraendo = numeros[1],
		diferencia = minuendo - sustraendo;

	for(var k = 0; k < numeros.length; k++)
	{
		for(var i = 0; i < numeros.length; i++)
		{
			if(numeros[k] != numeros[i])
			{
				if((numeros[k] - numeros[i]) < diferencia)
				{
					minuendo = numeros[k];
					sustraendo = numeros[i];
					diferencia = minuendo - sustraendo;
				}
			}
			iteraciones++;
		}
	}

	document.getElementById('resultado-2').innerHTML = 'La mayor diferencia es la de '+minuendo+' menos '+sustraendo+' = '+diferencia;
	document.getElementById('iteraciones-2').innerHTML = iteraciones;

	return iteraciones;
}