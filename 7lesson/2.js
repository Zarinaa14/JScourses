var txt=document.getElementById('inp');
	
		txt.addEventListener("keydown", function(e) {
			if(/[^a-zA-z@0-9\.]/g.test(e.key)) {
            e.preventDefault(); 
               return;
                 }
			
			if(txt.value.length==0) {
				if(e.key=='0' || e.key=='1' || e.key=='2' || e.key=='3' || e.key=='4' || e.key=='5'
				 || e.key=='6' || e.key=='7' || e.key=='8' || e.key=='9') {
					e.preventDefault();
					return;
				}
			}
			else{

				
				if(txt.value.split("@").length>1 && e.key=='@') {
					e.preventDefault(); return;
				}
				
				if(txt.value.split(".").length>1 && e.key=='.') {
					e.preventDefault(); return;
				}
			}
		});