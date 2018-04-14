var arr_flowers=[
               {
			   name:"Подснежник белый",
               price:15,
			   img:"img/image1.jpg"
			    },{
			   name:"Фиалка",
			   price:8.9,
			   img:"img/image2.jpg"
				},{
			   name:"Эхинацея",
			   price:8.0,
			   img:"img/image3.jpg"
			   },{
				name:"Подснежник голубой",
				price:10.5,
				img:"img/image4.jpg"
				},{
			   name:"Ромашка",
			   price:2.1,
			   img:"img/image5.jpg"
			   },{
			   name:"Фиалка голубая",
			   price:3.5,
			   img:"img/image6.jpg"
			   },{
			   name:"Лотос",
			   price:25.6,
			   img:"img/image7.jpg"
			   },{
			   name:"Роза желтая",
			   price:10.5,
			   img:"img/image8.jpg"
			   },{
			   name:"Роза красная",
			   price:10.0,
			   img:"img/image9.jpg"
			   },{
			   name:"Роза белая",
			   price:13.0,
			   img:"img/image10.jpg"
			   },
]

var image=document.getElementById("image");
var col=document.getElementById("col");
var upakovki=document.getElementById("vid_upakovki");
var discount=document.getElementById("discount");
var str="";
arr_flowers.forEach(function(item){
	var html= "<span style='height:60px'><label><input type='radio' name='rad0' value='0' style='display: none;'><img id='flowers'; style='width:10%; height:15%;' src ='"+item.img+"'><h1 style='font-size: 12px; '>"+item.name+"</h1></label></span>";
	
		//var html= "<h1>+item.name+</h1>";
str+=html;	
})
image.innerHTML = str;

var ht="<label><font style='size:10px font-family:cursive' ></font>Количество цветов<input class='inp' type='text' id='numb' value='1'></label>"
col.innerHTML = ht;

var vid="<label><input type='radio' name='radio1' value='0' checked id='1'>нет упаковки</label><br><label><input type='radio' name='radio1' value='2'>бумажная упаковка</label><br><label><input type='radio' name='radio1' value='3'>фольга</label>"	
upakovki.innerHTML = vid;
var dis= "<label><input type='radio' name='radio2' value='0' id='box-1' checked>нет дисконтной карты</label><br><label><input type='radio' name='radio2' value='5'>дисконтная карта со скидкой 1%</label><br><label><input type='radio' name='radio2' value='10'>дисконтная карта со скидкой 5%</label>"
discount.innerHTML = dis;





var fl=document.getElementsByName("rad0");
var prices=0;
var n=document.getElementById('numb');
var summa=document.getElementById('Summa');
var chec=document.getElementsByName("radio1");
var price_packaging=0;
var vid_dostavki=document.getElementById("vid_dostavki");
var prices_s=0;
var discount=document.getElementsByName("radio2");



for (var i = 0; i < fl.length; i++) {
	fl[i].value=arr_flowers[i].price;
}








function result_price(){
	if (discount[1].checked) {
		summa.value=Math.round(((n.value*prices+price_packaging+prices_s)*0.95)*100)/100;
	} 
	else {
		if (discount[2].checked) {
			summa.value=Math.round(((n.value*prices+price_packaging+prices_s)*0.9)*100)/100;
		} 
		else {
			summa.value=Math.round((n.value*prices+price_packaging+prices_s)*100)/100;}
		}
}

n.addEventListener("input",result_price);
for(var k=0;k<3;k++){
chec[k].addEventListener("change",function(){
		price_packaging=Number(chec[0].value);
		result_price();
})
}


vid_dostavki.addEventListener("change",function(){
		price_delivery=Number(vid_dostavki.value);
		result_price();
})

discount[0].addEventListener("change",function(){
		summa.value=Math.round((n.value*prices+price_packaging+price_delivery)*100)/100;
})
discount[1].addEventListener("change",function(){
		summa.value=Math.round(((n.value*prices+price_packaging+price_delivery)*0.5)*100)/100;
})
discount[2].addEventListener("change",function(){
		summa.value=Math.round(((n.value*prices+price_packaging+price_delivery)*0,7)*100)/100;
})

 image.addEventListener("change",function(e){
	 prices=e.target.value;
	 result_price();
	 
	 e.target.nextSibling.classList.toggle("true");
 })