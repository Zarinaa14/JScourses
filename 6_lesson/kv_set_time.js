var max=prompt("N?"); 
document.write('<table border = "1" width = "10%" height = "50%" cellspacing="1" cellpadding="6" >') 
for (i=0; i<max; i++) { 
document.write('<tr>') 
for (j=0; j<max; j++) { 
document.write('<td>' +''+'</td>'); 
var tds = document.getElementsByTagName("td"); 

for(var k = 0; k < tds.length; k++) { 

tds[k].addEventListener("mouseover",set); 
var set = function (){ 
this.style.backgroundColor ="red"; 
(function (t) {
	setTimeout( function(){ t.style.backgroundColor="white"; } ,3000);
})(this)
} 
}
} 
document.write('</tr>'); 
} 
document.write('</table>'); 