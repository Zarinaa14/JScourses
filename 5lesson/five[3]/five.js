var mas = [ {
   images : "images/dom1.jpg" ,
dom:{ 
  
    adress : "Miroshnichenko 21",
	floor :  3,
	total_area : 320 ,
	number_of_tenants : 10
}},
   {images : "images/dom2.jpg",
dom:{   
   
    adress : "Solar 1",
	floor :  2,
	total_area : 220 ,
	number_of_tenants : 4
}},
   {images : "images/dom3.jpg",
dom:{ 
    
    adress : "Quiet 14",
	floor :  2,
	total_area : 120 ,
	number_of_tenants : 2
}},
 {images : "images/dom4.jpg",
dom:{ 
    
    adress : "Yellow 14",
	floor :  2,
	total_area : 220 ,
	number_of_tenants : 5
}}
];


var uh = document.getElementById("dom_list");
var ul = document.getElementById("dom_list");

var str = "";
for (var i = 0; i < mas.length; i++) { 

	str += "<li>"+"Adress: " + mas[i].dom.adress +"</li>" +"<li>"+ "Floor: "+ mas[i].dom.floor +"</li>"+"<li>"+"Total area: "+ mas[i].dom.total_area +"</li>"+"<li>"+"People: "+ mas[i].dom.number_of_tenants +"</li>"+  "<img src='" + mas[i].images + "'>" +"<li>"+"<hr/>";


uh.innerHTML = str;}
for (var i = 0; i < uh.children.length; i+=2) {
var add = uh.children[i];
add.setAttribute("class" , "set");
}

for (var i = 1; i < ul.children.length; i+=2) {
var ads = ul.children[i];
ads.setAttribute("class" , "setr");
}

   

