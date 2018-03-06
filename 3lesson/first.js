var s = prompt("Enter :  s");
var p = prompt("Enter :  p");
function RandomArray( s, p){
    var min = s - p * s / 100;
	var max = s + p * s / 100;
	var arr =[];
	for(var i = 0; i < 1000; i++){
		arr[i] = (min + Math.random() * (max + 1 - min)).toFixed(0);
 	}


	console.log("array before sorting: ");	 
	 console.log(arr); 
	
       
		                           

	console.log("array after sorting by modul 10: ");	
	arr.sort(function(a,b){
		return b%10-a%10 ;
	})
	console.log(arr);
    
}
	RandomArray( s, p);