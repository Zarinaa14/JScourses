// Составить массив объектов вида "Дом". У каждого дома есть адрес, этажность, изображение, 
// общая площадь и кол-во жильцов. На базе массива объектов сгенерировать стилизованный список домов 
// в HTML-коде, где будут фигурировать все данные о доме.
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
	floor :  1,
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


var ul = document.getElementById("dom_list");
var str = "";
for (var i = 0; i < mas.length; i++) { 

	str += "<li>"+"Adress: " + mas[i].dom.adress +"</li>" +"<li>"+ "Floor: "+ mas[i].dom.floor +"</li>"+"<li>"+"Total area: "+ mas[i].dom.total_area +"</li>"+"<li>"+"People: "+ mas[i].dom.number_of_tenants +"</li>"+  "<img src='" + mas[i].images + "'>" +"<li>"+"<hr/>";


ul.innerHTML = str;}
for (var i = 0; i < ul.children.length; i+=2) {
var add = ul.children[i];
add.setAttribute("class" , "set");
}   


