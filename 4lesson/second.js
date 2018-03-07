ns4 = (document.layers)? true:false
ie4 = (document.all)? true:false


function mousemove() {
        var mouse_x = y = 0;
		mouse_x = window.event.clientX;
        mouse_y = window.event.clientY;
    
}

var height = 15;
var attempt = 4;
var intS = 0;
function scrollToEndPage() {
console.log("hight:" + height + " scrollHeight:" + document.body.scrollHeight + " att:" + attempt  );

if (height < document.body.scrollHeight)
{
   
    window.scrollTo(0, height);
    attempt++;
    height = parseInt(height) + attempt;
}
else
{
    clearInterval(intS);
}
}
intS = setInterval(scrollToEndPage,100);

var scrolled;
var timer;
function scrollToTop(){
if (scrolled=0){
window.scrollTo(650,scrolled);
scrolled =scrolled - 100;
timer=setTimeout(scrollToTop,100);
}
else {
clearTimeout(timer);
window.scrollTo(650,0);
}
}