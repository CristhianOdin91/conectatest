var iguales = false;

function init()
{
	var rect1 = {
		x: Math.abs(parseInt( document.getElementById('x1').value )),
		y: Math.abs(parseInt( document.getElementById('y1').value )),
		width: Math.abs(parseInt( document.getElementById('w1').value )),
		height: Math.abs(parseInt( document.getElementById('h1').value) )
	};

	var rect2 = {
		x: Math.abs(parseInt( document.getElementById('x2').value )),
		y: Math.abs(parseInt( document.getElementById('y2').value )),
		width: Math.abs(parseInt( document.getElementById('w2').value )),
		height: Math.abs(parseInt( document.getElementById('h2').value) )
	};

	iguales = ((rect1.width == rect2.width) && (rect1.height == rect2.height)) ? true : false;

	dibujaRectangulo(rect1,rect2);
	document.getElementById('resultado').innerHTML = (interseccion(rect1,rect2)) ? 'Los rectángulos colisionan' : 'Los rectángulos NO colisionan';
}

function dibujaRectangulo(rect1,rect2)
{
	var contenedor = document.getElementById('contenedor');

	var div1 = document.createElement('div');
	div1.style.width = rect1.width+'px';
	div1.style.height = rect1.height+'px';
	div1.style.position = 'absolute';
	div1.style.left = rect1.x+'px';
	div1.style.top = rect1.y+'px';
	div1.style.background = 'rgba(221,200,55,0.7)';

	var div2 = document.createElement('div');
	div2.style.width = rect2.width+'px';
	div2.style.height = rect2.height+'px';
	div2.style.position = 'absolute';
	div2.style.left = rect2.x+'px';
	div2.style.top = rect2.y+'px';
	div2.style.background = 'rgba(200,15,40,0.7)';


	contenedor.innerHTML = '';
	contenedor.appendChild(div1);
	contenedor.appendChild(div2);
}

function interseccion(rect1,rect2)
{
	var vertices1 = getVertices(rect1);
	var vertices2 = getVertices(rect2);

	var numCoincidencias = (compararAristas(vertices1,vertices2) + compararAristas(vertices2,vertices1));
	console.log(numCoincidencias);

	return (numCoincidencias >= 4) ? true : false;
}

function getVertices(rect)
{
	return {
		v1: { 
			x: rect.x, 
			y: rect.y 
			},
		v2: { 
			x: (rect.x + rect.width), 
			y: rect.y 
			},
		v3: { 
			x: (rect.x + rect.width), 
			y: (rect.y + rect.height) 
			},
		v4: { 
			x: rect.x, 
			y: (rect.y + rect.height) 
			},
	};
}

function compararAristas(base,compara)
{
	var coincidencias = 0;
	var puntosX = 
				{
					min: base.v1.x,
					max: base.v3.x 
				};
	var puntosY = 
				{
					min: base.v1.y,
					max: base.v3.y 
				};

	if(iguales)
	{
		if( 
			( ((compara.v1.x > puntosX.min) && (compara.v1.x <= puntosX.max)) && ((compara.v1.y > puntosY.min) && (compara.v1.y <= puntosY.max)) )
			||
			( ((compara.v2.x > puntosX.min) && (compara.v2.x <= puntosX.max)) && ((compara.v2.y > puntosY.min) && (compara.v2.y <= puntosY.max)) )
		)
			coincidencias++;

		if( 
			( ((compara.v2.y > puntosY.min) && (compara.v2.y <= puntosY.max)) && ((compara.v2.x > puntosX.min) && (compara.v2.x <= puntosX.max)) )
			||
			( ((compara.v3.y > puntosY.min) && (compara.v3.y <= puntosY.max)) && ((compara.v3.x > puntosX.min) && (compara.v3.x <= puntosX.max)) )
		)
			coincidencias++;

		if( 
			( ((compara.v3.x > puntosX.min) && (compara.v3.x <= puntosX.max)) && ((compara.v3.y > puntosY.min) && (compara.v3.y <= puntosY.max)) )
			||
			( ((compara.v4.x > puntosX.min) && (compara.v4.x <= puntosX.max)) && ((compara.v4.y > puntosY.min) && (compara.v4.y <= puntosY.max)) )
		)
			coincidencias++;

		if( 
			( ((compara.v4.y > puntosY.min) && (compara.v4.y <= puntosY.max)) && ((compara.v4.x > puntosX.min) && (compara.v4.x <= puntosX.max)) )
			||
			( ((compara.v1.y > puntosY.min) && (compara.v1.y <= puntosY.max)) && ((compara.v1.x > puntosX.min) && (compara.v1.x <= puntosX.max)) )
		)
			coincidencias++;
	}
	else
	{
		if( 
			( ((compara.v1.x > puntosX.min) && (compara.v1.x < puntosX.max)) )
			||
			( ((compara.v2.x > puntosX.min) && (compara.v2.x < puntosX.max)) )
		)
			coincidencias++;

		if( 
			( ((compara.v2.y > puntosY.min) && (compara.v2.y < puntosY.max)) )
			||
			( ((compara.v3.y > puntosY.min) && (compara.v3.y < puntosY.max)) )
		)
			coincidencias++;

		if( 
			( ((compara.v3.x > puntosX.min) && (compara.v3.x < puntosX.max)) )
			||
			( ((compara.v4.x > puntosX.min) && (compara.v4.x < puntosX.max)) )
		)
			coincidencias++;

		if( 
			( ((compara.v4.y > puntosY.min) && (compara.v4.y < puntosY.max)) )
			||
			( ((compara.v1.y > puntosY.min) && (compara.v1.y < puntosY.max)) )
		)
			coincidencias++;
	}


	return coincidencias;
}