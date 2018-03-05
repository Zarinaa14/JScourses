var s = prompt("Enter :  s");
var p = prompt("Enter :  p");
function RandomArray( s, p){
    var min = s - p * s / 100;
	var max = s + p * s / 100;
	var arr =[];
	var arr2 =[];
	for(var i = 0; i < 1000; i++){
		arr[i] = (min + Math.random() * (max + 1 - min)).toFixed(2);
 	}
// 	return arr;

	console.log("array before sorting: ");	
	console.log(arr);
		
	for(var i = 0; i < 1000; i++){
	Math.floor(arr2.push(arr[i]%10));
       
		                           }
			
	console.log("array after sorting by modul 10: ");	
	arr2.sort(function(a,b){
		return b-a })
//	console.log(arr2);
    for(var k = 0; k < arr2.length; k++){
	     Math.floor(arr2[i]);           }
         console.log(arr2);	
	   
				
		
}		


	RandomArray( s, p);
	