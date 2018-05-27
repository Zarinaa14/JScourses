
 var data=[];
var but=document.getElementById("but");

 var list = document.getElementById("list");

 
 var xhr = new XMLHttpRequest();
		  xhr.open("GET","event.json",true);
		  xhr.onload = function(){
			   data = JSON.parse(xhr.responseText);
			  onDataLoaded(data);

      }
 xhr.send();
 var cnt=0;
 var c=0;
 
 

 





function Calendar3(id, year, month) {
var Dlast = new Date(year,month+1,0).getDate(),
    D = new Date(year,month,Dlast),
    DNlast = D.getDay(),
    DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
    calendar = '<tr>',
    m = document.querySelector('#'+id+' option[value="' + D.getMonth() + '"]'),
    g = document.querySelector('#'+id+' input');
	
	
if (DNfirst != 0) {
  for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
}else{
  for(var  i = 0; i < 6; i++) calendar += '<td>';
}

for(var  i = 1; i <= Dlast; i++) {
  if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
    calendar += '<td class="today">' + i;
  }else{
    if ( 
        (i == 1 && D.getMonth() == 0 && ((D.getFullYear() > 1897 && D.getFullYear() < 1930) || D.getFullYear() > 1947)) || 
        (i == 2 && D.getMonth() == 0 && D.getFullYear() > 1992) || 
        ((i == 3 || i == 4 || i == 5 || i == 6 || i == 8) && D.getMonth() == 0 && D.getFullYear() > 2004) || 
        (i == 7 && D.getMonth() == 0 && D.getFullYear() > 1990) || 
        (i == 23 && D.getMonth() == 1 && D.getFullYear() > 2001)  
      
       ) {
      calendar += '<td class="holiday">' + i;
    }else{
      calendar += '<td>' + i;
    }
  }
  if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
    calendar += '<tr>';
  }
}
for(var  i = DNlast; i < 7; i++) calendar += "<td >&nbsp;";


document.querySelector('#'+id+' tbody').innerHTML = calendar;

g.value = D.getFullYear();
m.selected = true;
if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {
    document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td></tr>;';
	
}
document.querySelector('#'+id+' option[value="' + new Date().getMonth() + '"]').style.color = 'rgb(220, 0, 0)'; // в выпадающем списке выделен текущий месяц
}
Calendar3("calendar3",new Date().getFullYear(),new Date().getMonth());
document.querySelector('#calendar3').onchange = function Kalendar3() {
  Calendar3("calendar3",document.querySelector('#calendar3 input').value,parseFloat(document.querySelector('#calendar3 select').options[document.querySelector('#calendar3 select').selectedIndex].value));
}


	  function  onDataLoaded(data){
	  var tds = document.getElementsByTagName("td"); 
	console.log(tds);
	for(var k = 0; k < tds.length; k++) {
	
	tds[k].addEventListener('click',function(){
	var str;
	this.style.backgroundColor ="green"; 
   // this.className += "'class_"+c+"'";  
	//this.attr('id', "'class_"+c+"'");
	this.classList.add("'class_"+c+"'");
	 //this.html+="<div id='class_"+c+"' > Some stuff </div>";
	
	c++;
	 
	 but.addEventListener('click',function(){
	 for(j=0; j<c; j++)
	  {
		//document.getElementsByclassName("class_"+j).innerText='h';
	  
		//a.addEventListener('click', divClick(jj))
		
		
	  }
	   })
	})  }
	
	  console.log(data);
	  var str ="";
	  data.forEach(function(e,i){
		 
		  
		   str+="<div  id='desc_"+cnt+"' ><span >Event - " +e.event+ "</span><span >Time of event - " + e.time + "</span></div>" ;
	       cnt++;
	  });
	  //desk_0
	  //desk_1
	  //desk_2
	  
	  
	  list.innerHTML=str;
	  
	  
	  
  }
  