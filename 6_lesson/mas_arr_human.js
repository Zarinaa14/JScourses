var array = [{ 
name : "Sergey", 
human: { 
adress : "Mir 21", 
work: "economist" , 
experience : 8, 
hobby: "fishing" 
} 
}, 
{ 
name : "Vika", 
human: { 
adress : "Mirir 21", 
work: "decorator" , 
experience : 3, 
hobby: "drawing" 
} 

}, 
{ 
name : "Victor", 
human: { 
adress : "Mirir 21", 
work: "teacher" , 
experience : 5, 
hobby: "hunting" 
} 

}, 
{ 
name : "Darya", 
human: { 

adress : "Mirir 21", 
work: "instructor" , 
experience : 2, 
hobby: "dancing" //hunting 
} 

} 

]; 

var arr= array.length; 
var table = document.createElement('table'); 
document.write('<div className="table_t"><table className="table">'); 


for (var i = 0; i < arr; i++) { 
var adress = array[i].human.adress; 
var work = array[i].human.work; 
var hobby = array[i].human.hobby; 
var experience = array[i].human.experience; 
var name = array[i].name; 
document.write('<tr className="mess-hide"><td className="adress"><h4>' + adress + '</h4></td><td className="work"><h4>' + work + '</h4></td><td className="exp"><h4>' + experience + '</h4></td><td className="adress"><h4>' + hobby + '</h4></td></tr>'); 
} 

var tds = document.getElementsByTagName("td"); 

document.write('</table></div>'); 

for(var k = 0; k < tds.length; k++){ 
	ind=parseInt(k/4);
	(function(n){
tds[k].addEventListener("click",function(){ 
alert(n); 
}) } )(array[ind].name);
}