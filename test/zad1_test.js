
let showPizza = `https://gp-js-test.herokuapp.com/pizza`;

var waiting = document.getElementById("waiting");
var button = document.getElementById("button");
button.innerHTML = "Loading";	
var vivod_json = document.getElementById("div");
var eats_pizza = document.getElementById("eats_pizza");

button.addEventListener("click", function(){

		button.classList.toggle("button"); 
	    vivod_json.innerHTML = "    ";	
	    eats_pizza.innerHTML = "    ";
        button.innerHTML = "loading is coming";
	     waiting.innerHTML = "waiting...";

start();
  

 }); 
		  
function start(){
		
function status(response) {
	   if (status!=0){ 
		            
	                  button.innerHTML = "Loading";
	                 }  	   
	     
	             	
     if  (response.status >= 200 && response.status < 300) {
	    
		  return Promise.resolve(response);	
       } 
  else {
		return Promise.reject(new Error(response.statusText))
       }
                          }

function json(response) {
		return response.json();
			
  
                        }

fetch(showPizza)
  .then(status)
  .then(json)
  .then(function(data) {
	  
	   var timeout = (Math.random() * 10 + 1) * 1000;// if you want see waiting
	   console.log( data); 
	   setTimeout( function() {
		   Show_Party(data); 
		}, timeout);
		

  }).catch(function(error) {
    console.log('Request failed', error);
  });
  
  
function Show_Party(data_a){	
         let str = " ";
		 let items = 10;
		 var people = 0;
		 waiting.innerHTML = "  ";
		 var htmlLine1 = "<div><div class=\"circle-div \" id=\"outerCirlceId\"><div class='tom_1'></div><div class='tom_2'></div><div class='tom_3'></div><div class='tom_4'></div><div class='tom_5'></div><div class='tom_6'></div><div class='tom_7'></div><div class='tom_8'></div><div class='tom_9'></div><div class='tom_10'></div><div class='tom_11'></div><div class='tom_12'></div><div class='tom_13'></div><div class=\"center-div\" id=\"centerDivId\"></div></div></div>";
		 document.getElementById("pizzaId").innerHTML = htmlLine1;
         data_a.party.forEach(function(key) { 
		    	str+= '<div >' +key.name+'</div>'+'<div id="sca";>' + key.eatsPizza +'</div>'+'<br/>';	
          //  if (key.eatsPizza==true){items++;}
			people++;
				
		    
		 });							 
         vivod_json.innerHTML = str;	
		 eats_pizza.innerHTML = "People at the party "+ people+ ". How many people will eat pizza: " + items + ". Pizza is divided into " + items ;	
	 
	    
	
	//рисуем круг 
	   if(items==4){create_4();}
       if(items==6){create_6();}
       if(items==8){create_8();}
	   if(items==12){create_12();}
	   if(items==10){create_10();}
	
function create_12(){
                    var p =1;
					var temp = 0;
					
					var count = 12;
					
					var ul = document.createElement('ul');
					ul.setAttribute('class','circle');
					var li =document.createElement('li');
					li.classList.toggle("nth-child"); 
					li.setAttribute('class','li');
					
					ul.appendChild(li);
					var div = document.createElement('div');
					div.setAttribute('class','text');
					div.style.transform="skewY(60deg) rotate(15deg)";
					li.appendChild(div);
					document.body.appendChild(ul);
					div.innerHTML= div.innerHTML + "1";
					li.classList.toggle("first-child"); 
							
					div.style.background="orange";
					div.style.border="1px solid black";
                   				
	   
       li.style.transform="rotate(0deg) skewY(-60deg)";
       for (var i=2; i<count+1; i++){
					var li =document.createElement('li');
					li.classList.toggle("nth-child"); 
					li.setAttribute('class','li');
					temp+=30; 
					p+=1;
					ul.appendChild(li);
					var div = document.createElement('div');
					div.setAttribute('class','text');
					div.style.transform="skewY(60deg) rotate(15deg)";
					li.appendChild(div);
					
				   
					div.innerHTML = div.innerHTML + p;
					li.classList.toggle("nth-child["+i+"]");
					li.style.transform="rotate("+temp+"deg) skewY(-60deg)";	
					
					div.style.background="orange";
					div.style.border="1px solid black";	
                    					
								
                     }
          }
		  
function create_4(){
                    var p =1;
					var temp = 0;
					
					let count = 4;
					
					var ul = document.createElement('ul');
					ul.setAttribute('class','circle');
					var li = document.createElement('li');
					li.classList.toggle("nth-child"); 
					li.setAttribute('class','li');
					
					ul.appendChild(li);
					var div = document.createElement('div');
					div.setAttribute('class','text');
					//div.style.transform="skewY(1 deg) rotate(0deg)";
					li.appendChild(div);
					document.body.appendChild(ul);
					li.classList.toggle("first-child"); 
							
					div.style.background="orange";
					div.style.border="1px solid black";	
					var tom =document.createElement('div');
			        tom.setAttribute('class','tom_14');
			         div.appendChild(tom);
	   
       li.style.transform="rotate(0deg)";
       for (var i=2; i<count+1; i++){
					var li =document.createElement('li');
					li.classList.toggle("nth-child"); 
					li.setAttribute('class','li');
					
					temp+=90; 
					p+=1;
					ul.appendChild(li);
					var div = document.createElement('div');
					div.setAttribute('class','text');
					div.style.color="black";
					
					li.appendChild(div);
					
				   
					
					li.classList.toggle("nth-child["+i+"]");
					
					li.style.transform="rotate("+temp+"deg)";	
					li.style.transform="rotate("+temp+"deg)";	
					
					div.style.background="orange";
					li.style.border="1px solid black";		
					var tom =document.createElement('div');
			        tom.setAttribute('class','tom_14');
			         div.appendChild(tom);			
                     }
          }
		  
function create_6(){
                    var p =1;
					var temp = 0;
					
					var count = 6;
					
					var ul = document.createElement('ul');
					ul.setAttribute('class','circle');
					var li =document.createElement('li');
					li.classList.toggle("nth-child"); 
					li.setAttribute('class','li');
					
					ul.appendChild(li);
					var div = document.createElement('div');
					div.setAttribute('class','text');
					div.style.transform="skewY(0 deg) rotate(-45deg)";
					li.appendChild(div);
					document.body.appendChild(ul);
					li.classList.toggle("first-child"); 
							
					div.style.background="orange";
					div.style.border="1px solid black";	
					var tom =document.createElement('div');
			        tom.setAttribute('class','tom_14');
			         div.appendChild(tom);
	   
       li.style.transform=" skewY(-30deg)";
       for (var i=2; i<count+1; i++){
					var li =document.createElement('li');
					li.classList.toggle("nth-child"); 
					li.setAttribute('class','li');
					temp+=60; 
					p+=1;
					ul.appendChild(li);
					var div = document.createElement('div');
					div.setAttribute('class','text');
					div.style.color="black";
					//div.style.transform="skewY(45deg) rotate(-45deg)";
					li.appendChild(div);
					
				   
				
					li.classList.toggle("nth-child["+i+"]");
					
					li.style.transform="rotate("+temp+"deg) skewY(-30deg)";	
					
					div.style.background="orange";
					div.style.border="1px solid black";	
                    var tom =document.createElement('div');
			        tom.setAttribute('class','tom_14');
			         div.appendChild(tom);					
								
                     }
          }
		  
function create_8(){
                    var p =1;
					var temp = 0;
					
					let count = 8;
					
					var ul = document.createElement('ul');
					ul.setAttribute('class','circle');
					var li =document.createElement('li');
					li.classList.toggle("nth-child"); 
					li.setAttribute('class','li');
					
					ul.appendChild(li);
					var div = document.createElement('div');
					div.setAttribute('class','text');
					div.style.transform ="skewY(90 deg) rotate(45deg)";
					li.appendChild(div);
					document.body.appendChild(ul);
					
					li.classList.toggle("first-child"); 
							
					div.style.background="orange";
					div.style.border="1px solid black";	
					var tom =document.createElement('div');
			        tom.setAttribute('class','tom_14');
			         div.appendChild(tom);
	   
       li.style.transform="rotate(0deg)";
       for (var i=2; i<count+1; i++){
					var li =document.createElement('li');
					li.classList.toggle("nth-child"); 
					li.setAttribute('class','li');
					temp+=45; 
					p+=1;
					ul.appendChild(li);
					var div = document.createElement('div');
					div.setAttribute('class','text');
					div.style.color="black";
					//div.style.transform="skewY(90deg) rotate(-1deg)";
					li.appendChild(div);
					
				   
					
					li.classList.toggle("nth-child["+i+"]");
					
					li.style.transform="rotate("+temp+"deg)";	
					
					div.style.background="orange";
					div.style.border="1px solid black";		
					var tom =document.createElement('div');
			        tom.setAttribute('class','tom_14');
			         div.appendChild(tom);			
                     }
          }
		  
function create_10(){
                    var p =1;
					var temp = 0;
					
					var count = 10;
					
					var ul = document.createElement('ul');
					ul.setAttribute('class','circle');
					var li =document.createElement('li');
					li.classList.toggle("nth-child"); 
					li.setAttribute('class','li');
					
					ul.appendChild(li);
					var div = document.createElement('div');
					div.setAttribute('class','text');
					div.style.transform="skewY(36deg) rotate(-36deg)";
					li.appendChild(div);
					document.body.appendChild(ul);
					div.innerHTML= div.innerHTML + "1";
					li.classList.toggle("first-child"); 
					div.innerHTML= div.innerHTML + "1";		
					div.style.background="orange";
					div.style.border="1px solid black";	
					
	   
       li.style.transform="rotate(0deg) skewY(-36deg)";
       for (var i=2; i<count+1; i++){
					var li =document.createElement('li');
					li.classList.toggle("nth-child"); 
					li.setAttribute('class','li');
					temp+=36; 
					p+=1;
					ul.appendChild(li);
					var div = document.createElement('div');
					div.setAttribute('class','text');
					div.style.transform="skewY(36deg) rotate(8deg)";
					li.appendChild(div);
					
				   
					div.innerHTML = div.innerHTML + p;
					li.classList.toggle("nth-child["+i+"]");
					
					li.style.transform="rotate("+temp+"deg) skewY(-36deg)";	
				
					div.style.background="orange";
					div.style.border="1px solid black";	
			
								
                     }
          }
		  
       }			 
	
}			  
			  




  

