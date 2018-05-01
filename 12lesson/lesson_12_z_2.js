   
   var res = function(){


	 

	var path ="N.txt";
	var xhr =  new XMLHttpRequest();
	xhr.open('GET',path ,true);
	 
	 xhr.onload = function(){
	   var N  = xhr.responseText;
	   console.log(N);
	    table(N);

     
	  
	 }

			  xhr.send();	 
}


 function table(n){
		document.write("<table>");
 
for (var i = 1; i <= n; i++ ) {
  document.write("<tr>");
  document.write("<td>" + i + "</td>");
 
 for ( var j = 2; j <= n; j++ ) {
   document.write("<td>" + i * j + "</td>");
}
   document.write("</tr>");
}
 document.write("</table>");}


	 

			
			
			
			
			
	var btn = document.getElementById("button");
    btn.addEventListener('click', res);	
	
		 
		