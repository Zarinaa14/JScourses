 
 var data=[];

 var list = document.getElementById("list");

 
 var xhr = new XMLHttpRequest();
		  xhr.open("GET","index.json",true);
		  xhr.onload = function(){
			   data = JSON.parse(xhr.responseText);
			  onDataLoaded(data);

      }
 xhr.send();
 cnt=0;
 

 
  function  onDataLoaded(data){
	  console.log(data);
	  var str ="";
	  data.forEach(function(e,i){
		  var arr=[];
		 var t = e.tags;
		   var arr = t.split(',');
		 //arr.push(t);
		 console.log(arr);
		  var str1 = arr.join(" ");
		   console.log(str1);
		  
		   str+="<div   data-item='"+cnt+"' id='desc_"+cnt+"'  ><img src='"+e.img+"'></img><h3 >Name - " +e.name+ "</h3><h4 >Date of publication - " + e.data_pub  + "</h4><h4  >Description - " + e.br_description+"</h4><h4 id='full_desc_"+cnt+"'></h4><h4>"+str1+"</h4></div><hr/>" ;
		     cnt++;
	  });
	  
	  
	  list.innerHTML=str;
	  
	  for(jj=0; jj<cnt; jj++)
	  {
		  aa=document.getElementById("desc_"+jj);
	  
		aa.addEventListener('click', divClick(jj))
	  }
  }
  
   function divClick(index){
		 return function(e) 
		 {
			// var index = e.target.getAttribute("data-item");
			//debugger;
			//alert(index);
			console.log(data[index]);
			yy=data[index];
		//	debugger;
		  var st;			
	//	st="<div><h4>"+yy.full_description+"</h4></div>" ;
			document.getElementById("full_desc_"+index).innerHTML=yy.full_description;
		//	e.target.innerHTML=st;
			
		  
		}
   }
  