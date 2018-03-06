var a =  String(prompt("Enter the first value: ")).toLowerCase(); 
var b =  String(prompt("Enter the second value: ")).toLowerCase(); 

function  Anogramma(a,b) {  
          if    (a.length == b.length){
             var arr1 = a.split('');
			 arr1.sort();
            console.log(arr1);
             var arr2 = b.split('');
			  arr2.sort();
            console.log(arr2);
			var str1 = arr1.join(",");
            var str2 = arr2.join(",");

                 if(str1==str2){

                    console.log("Анограмма");
				   return false;
		            }
				  else {console.log(" не Анограмма");
				  return false; }
		}	     
		   else 
           console.log("не Анограмма "); 
		   return false;
        } 
Anogramma(a,b);