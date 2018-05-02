   
   var res = function(){
    var div = document.getElementById('div');
    div.innerHTML = "<div class='container'><div ><img class='spinner' src='spinner.png'></img></div><div class='center-spinner'></div><div class='text'>spinner</div></div>";
	var input= document.getElementById('input');
	var path =input.value;
	var xhr =  new XMLHttpRequest();
	xhr.open('GET',path ,true);
	 
	 xhr.onload = function(){
	   div.innerHTML = xhr.responseText;
	     console.log(input.value);

		xhr.onreadystatechange = function(){
		if(this.readyState == 2){
		div.innerHTML = "Соединение установлено";
		}
		}
	  
	 }

			  xhr.send();	 
}


		


	 
			
		
			
			
			  
		
	var btn = document.getElementById("button");
    btn.addEventListener('click', res);	
	
		 
		