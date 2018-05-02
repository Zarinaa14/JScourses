
var div = document.getElementById('div');

var settings = {
	"#one" : {
		path : "a.html",
		handler : function(e){
			div.innerHTML = e;
			var bt2= document.getElementById('button1');
       bt2.addEventListener('click', function(){
		     var c = Number(prompt("Enter the first value: "));
						var Operation = prompt("Input the operation: ");
						var d = Number(prompt("Enter the second value: "));

						       if(c && d || c == 0 || d == 0)
							switch(Operation) {
								case '+': 
									alert(" + " + c + " and " + d + " = " + (c + d));
									break;
								case '-':
									alert(" - " + c + " and " + d + " = " + (c - d));
									break;
								case '*':
									alert("Multiplicate " + c + " and " + d + " = " + (c * d));
									break;
								case '/':
									alert(" Division " + c + " and " + d + " = " + (c/ d));
									break;
								case '^':
									alert(Math.pow(c, d));
									break;
								default:
									alert("It is not an operation");
							}
						else
							console.log("Error");

		  
		
		})
		}
		
	},
	"#two" : {
		path : "b.html",
		handler : function(e){
			div.innerHTML = e;
			var bt1= document.getElementById('button');
       bt1.addEventListener('click', function(){
								var arr = [3,2,5,6,9];
								function arraySum(array){
								var sum = 0;
								for(var i = 0; i < array.length; i++){
									if (array[i]%3==0){
									sum += array[i];}
														}
								 alert(sum);
								 }
								arraySum(arr);
			
		})
		}
	},
	
	"#three" : {
		path : "c.html",
		handler : function(e){
			div.innerHTML = e;
			var bt3= document.getElementById('button3');
       bt3.addEventListener('click', function(){
		      var names = ["Victor", "Ekaterina", "Igor", "Egor", "Alina", "Sergey", "Ivan", "Victoria"];
						    var arr = [], N = names.length;
						    for(var i = 0; i < 10; i++){
							rand = Math.floor(Math.random() * 100);
							randName = Math.floor(Math.random() * 6);
							arr.push({
								name: names[randName],
								age: rand,
								print: function(){
									console.log(this.name);
									 console.log(this.age);
									console.log("My name is  "+ this.name + ".  I am  " + this.age + " years old.");
								}
							});
							arr.forEach(function(elem){
							elem.print();
});
}
			
		})
		}
	},
	"#four" : {
		path : "d.html",
		handler : function(e){
			div.innerHTML = e;
			var bt4= document.getElementById('button4');
       bt4.addEventListener('click', function(){
							   var a =  String(prompt("Enter the first value: ")).toLowerCase(); 
					var b =  String(prompt("Enter the second value: ")).toLowerCase(); 

					function  Anogramma(a,b) {  
							  if    (a.length == b.length){
								 var arr1 = a.split('');
								 arr1.sort();
								console.log(arr1);
								 var arr2 = b.split('');
								  arr2.sort();
								console.log(arr2);
								var str1 = arr1.join(",");
								var str2 = arr2.join(",");

									 if(str1==str2){

										console.log("Анограмма");
									   return false;
										}
									  else {console.log(" не Анограмма");
									  return false; }
							}	     
							   else 
							   console.log("не Анограмма "); 
							   return false;
							} 
							Anogramma(a,b);
													
							})
							}
							
	}
	
}

var changeHashRoute = function(){
		if(location.hash in settings){
			var path = settings[location.hash].path;
			var xhr =  new XMLHttpRequest();
			xhr.open('GET',path ,true);
			xhr.onload =function (){
			settings[location.hash].handler(this.responseText);
			
			
				
			}
			  xhr.send(null);
		
		}
	}
		 
			window.onhashchange = changeHashRoute;
			changeHashRoute();
			