var arr = [3,2,5,6,9];
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    if (array[i]%3==0){
    sum += array[i];
	}
	
	
    }
console.log(sum);
}
arraySum(arr);