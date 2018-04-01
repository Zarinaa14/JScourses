var max=prompt("N?"); 
document.write('<table border = "1" width = "10%" height = "50%" cellspacing="1" cellpadding="6" >') 
for (i=0; i<max; i++) { 
document.write('<tr>') 
for (j=0; j<max; j++) { 
document.write('<td>' +''+'</td>'); 
var table = document.getElementsByTagName("table")[0]; 

 

table.addEventListener("click",function (e){
   var elem = e.target;
   
    if (elem.nodeName == 'TD') {

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    elem.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
}

} ) 
} 
document.write('</tr>'); 
} 
document.write('</table>'); 





 
