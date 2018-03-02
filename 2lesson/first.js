var a =  String(prompt("Enter the first value: ")).toLowerCase(); 
var b =  String(prompt("Enter the second value: ")).toLowerCase(); 

function  Anogramma(a,b) {  
          if    (a.length == b.length){
             var arr1 = a.split('');
			 arr1.sort();
//             console.log(arr1);
             var arr2 = b.split('');
			  arr2.sort();
//             console.log(arr2);
			 for( var i = 0; i < arr1.length; i++ ){
                 for( var j = 0; j < arr2.length; j++ ){

                 if(arr1[i] == arr2[j]){

                    console.log("Анограмма");
				   return false;
		            }
				  else {console.log(" не Анограмма");
				  return false; }
			     
			  }
		   }	
        }
		   else 
           console.log("не Анограмма "); 
		   return false;
           
		
         
} 
Anogramma(a,b);
 //arr1.join(a);