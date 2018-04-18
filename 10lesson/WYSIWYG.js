var commands = ['bold', 'italic', 'underline', 'insertunorderedlist',
 'insertorderedlist'];
var elems = ['bold', 'cursive', 'underline', 'ul', 'ol'];
var valuedCmds = ['fontsize', 'fontname', 'forecolor'];
var elemsForValued = ['fontsise', 'font-name', 'fontcolor', 'font-back']


var container =document.getElementById("container");
var iner =document.getElementById("inner");
var fontselect =document.getElementById("fontsise");
var color=document.getElementById("color");

color.addEventListener('change',function(){
document.execCommand("forecolor",false,this.value);
})


var change_exec = function(id, event, title){
	document.getElementById(id).addEventListener(event, function(){
	document.execCommand(title, false,this.value);
	});
	}
change_exec('fontsise', 'change', 'fontsize');
change_exec('fontcolor', 'change', 'backcolor');
change_exec('font-name', 'change', 'fontname');


    var exec = function(id, event, title){
	document.getElementById(id).addEventListener(event, function(){
	document.execCommand(title, false,null);
	});
	}



exec('bold', 'click', 'bold');
exec('cursive', 'click', 'italic');
exec('underline', 'click', 'underline');
exec('delete', 'click', 'removeformat');
exec('ul', 'click', 'insertunorderedlist');
exec('ol', 'click', 'insertorderedlist');

	

document.getElementById('link').addEventListener('click', function(){
var str = prompt('Введите ссылку');
	document.execCommand('createlink', false, str);
})	
document.getElementById('delete_link').addEventListener('click', function(){

	document.execCommand("Unlink", false, null);
})	
document.getElementById("im").addEventListener("click",function(){
      var val = document.getElementById("img").value
	  
      document.execCommand('insertImage', false, val);
	  
});
	

	


setInterval(function(){
var ContextMenu = document.createElement("div");


if(!document.queryCommandEnabled("bold")){
document.getElementById("bold").disabled=true;}
else {document.getElementById("bold").disabled=false;}

if(!document.queryCommandEnabled("delete")){
document.getElementById("delete").disabled=true;}
else {document.getElementById("delete").disabled=false;}

if(!document.queryCommandEnabled("underline")){
document.getElementById("underline").disabled=true;}
else {document.getElementById("underline").disabled=false;}





var fontsize=document.queryCommandValue("fontsize");// значение шрифта 
var fontname=document.queryCommandValue("fontname");
var fontcolor=document.queryCommandValue("backcolor");
var bold=document.queryCommandState("bold");
var cursive=document.queryCommandState("italic");
var ul=document.queryCommandState("insertunorderedlist");
var ol=document.queryCommandState("insertorderedlist");



var underline=document.queryCommandState("underline");
ContextMenu.setAttribute("class","context");
    var fontsize=document.queryCommandValue("fontsize");
	var Element = document.createElement("div");
	
	if(underline==true){underline="underline";}
	else{underline="";}
		
	if(bold==true){bold="bold";}
	else{bold="";}
	
	if(cursive==true){cursive="cursive";}
	else{cursive="";}
	
    if(ul==true){ul="ul";}
	else{ul="";}
	
    if(ol==true){ol="ol";}
	else{ol="";}
	
	Element.innerHTML = "<p>" + fontsize + "<br/>"+fontcolor+ "<br/>"+bold +"<br/>"+cursive+"<br/>"+ underline+"<br/>"+ fontname+"<br/>"+ul+"<br/>"+ol+ "</p>"; 
	
	
	ContextMenu.appendChild(Element);

ContextMenu.addEventListener("click", function(e){
	

})
    container.addEventListener("mousemove", function(e){
	ContextMenu.style.position = "absolute";
	ContextMenu.style.left = e.clientX +  10 +'px';
	ContextMenu.style.top = e.clientY + 10 + 'px';
	ContextMenu.style.backgroundColor="gray";
	ContextMenu.style.width="139px";
	ContextMenu.style.height="159px";
	this.appendChild(ContextMenu);

	
})


},10)
