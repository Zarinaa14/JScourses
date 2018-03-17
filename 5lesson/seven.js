// Создать скрипт, который выводит в нижнем правом углу экрана каждые 2-3 секунды сообщение вида
 // " из г. купил(а) штук товара ". Данные в сообщение вставляются из определенных заранее списков случайно. 
//  Сообщения выстраиваются в столбик, сообщение пропадает через 10 секунд после появления.
 var  num=Math.floor(Math.random() * 000 )+1950;
var names = ["Roma", "Dasha", "Vika","Katya","Olya","Igor","Stepa","Misha","Lyba","Lyda","Nikita"];
 var cities = ["Baranovichi", "Polotsk", "Novopolotsk", "Vitebsk", "Mogilev"];
 var tovar = ["apple","cherry","strawberry","lemon","blueberry","melon","busderry","watermelon",];
 var summa = [500,300,400,200,100,600,900,800,700];

var divMain = document.getElementsByClassName("main")[0];

function ticks(){
	var spisoc = document.createElement("div");
		spisoc.setAttribute("class", "spisoc");

	var h = {};
		h.name = names[Math.floor(Math.random() * (names.length))];
		h.city = cities[Math.floor(Math.random() * (cities.length))];
		h.kol = Math.floor(Math.random() * 60);
		h.tov = tovar[Math.floor(Math.random() * (tovar.length))];
		h.sum = summa[Math.floor(Math.random() * (summa.length))];

	var pokup_name = document.createElement("p");
		pokup_name.setAttribute("id", "name");
	var b1 = document.createElement("b");
		b1.innerText ="Из " + h.city + " купил(а) " + h.name + " " + h.kol + " штук " + h.tov;
		pokup_name.appendChild(b1);

	spisoc.appendChild(pokup_name);

	

 setTimeout(ticks, num);

	divMain.appendChild(spisoc);

	setTimeout(function(){
		spisoc.remove();
	},10000)

};
ticks();