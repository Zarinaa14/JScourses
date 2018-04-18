var Menu = document.getElementsByTagName("div")[0];
Menu.style.height = "640px";
var obj = [
	{
		title: "Open",
		
	},
	{
		title: "Close",
			
	},
	{
		title: "information",
			
	},
	
	{
		title: "registration",
			
	}
]
var ContextMenu = document.createElement("div");
ContextMenu.setAttribute("class","context");
for(var i = 0; i < obj.length; i++){
	var Element = document.createElement("div");
	Element.innerHTML = "<p>" + obj[i].title + "</p>"; 
	ContextMenu.appendChild(Element);
}
ContextMenu.addEventListener("click", function(e){
	

})
    Menu.addEventListener("contextmenu", function(e){
	e.preventDefault();
	ContextMenu.style.position = "absolute";
	ContextMenu.style.left = e.clientX +  10 +'px';
	ContextMenu.style.top = e.clientY + 10 + 'px';
	ContextMenu.style.backgroundColor="gray";
	ContextMenu.style.width="139px";
	ContextMenu.style.height="159px";
	
	
	

	
	ContextMenu.style.left = (document.documentElement.clientWidth > e.clientX + 150) ? e.clientX + 10 + "px" : e.clientX -145 + "px" ;
	ContextMenu.style.top = (document.documentElement.clientHeight > e.clientY + 150) ? e.clientY + 10 + "px" : e.clientY -156 + "px" ;
    this.appendChild(ContextMenu);

	
})

Menu.addEventListener("click", function(){
	ContextMenu.remove();
})