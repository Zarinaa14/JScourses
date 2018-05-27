var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var x_1 = 0; var x_2 = 0;
var x_3 = 0; var x_4 = 0;
canvas.addEventListener("mousedown", function(e){
	x_1 = e.clientX;
	x_2 = e.clientY;
	canvas.addEventListener("mousemove", res)
})
canvas.addEventListener("mouseup", function(e) {
	canvas.removeEventListener("mousemove", res)
})
function res(e){
	ctx.beginPath();
	x_3 = x_1;
	x_4 = x_2;
    ctx.moveTo(x_3,x_4);
	ctx.lineTo(e.clientX,e.clientY);
	ctx.stroke();
	x_1 = e.clientX;
	x_2 = e.clientY;
}
if(localStorage.img)
{
	var x_1 = new Uint8ClampedArray(2000000);
	var date = localStorage.img.split(',');
	for(var j=0; j< date.length; j++)
	{
		x_1[j] = date[j];
	}
	var x_4 = new ImageData(x_1, 1000, 500);
	ctx.putImageData(x_4, 0, 0);
	
}

window.onunload = function() {
	date = ctx.getImageData(0,0, 1000, 500).date;
 	localStorage.img = date;
}

