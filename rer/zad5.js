var max=prompt("N?");
document.write('<table border = "1" width = "10%" height = "50%" cellspacing="1" cellpadding="6" >')
for (i=0; i<max; i++) {

    document.write('<tr>')
    for (j=0; j<max; j++) {
        document.write('<td>' +''+'</td>');
		var tds = document.getElementsByTagName("td");
		function express(){
		 tds[k].addEventListener("mouseout",stop)}
		 
		for(var k = 0; k < tds.length; k++) {
		 var red = function (){
		 this.style.backgroundColor ="red";}
		 var stop = function (){
		 this.style.backgroundColor ="#fff";}
      
		 

		 tds[k].addEventListener("mouseover",red);
		 
		 
		
		 setTimeout( express ,3000);
		 
		
		 }
    }
    document.write('</tr>');
}
document.write('</table>');


 