
var color = false;

function pozadina(colorString) {
	var canvas = document.getElementById('canvas');

	boja(colorString);
	pravougaonik(0, 0, canvas.width, canvas.height);
}

function boja(colorString) {
	color = colorString;
}

function elipsa(x, y, w, h){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	context.lineWidth = 1;
	context.beginPath();

	var scale = w/h;
	var radius = h
	var newY = y/scale;
	context.scale(1, scale);


	context.arc(x+w, newY+h, radius, 0, Math.PI * 2, false);

	if(color){
		context.fillStyle=color;
		context.fill();
	}

	context.stroke();
	color = false;

	context.scale(1, 1/scale);
}


function pravougaonik(x, y, w, h){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	context.lineWidth = 1;
	context.beginPath();

	if(color) {
		context.fillStyle=color;
		context.fillRect(x, y, w, h);
	}
	else {
		context.rect(x, y, w, h);
	}

	context.stroke();
	color = false;
}

