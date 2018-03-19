 var mas = [ {
  
human:{ 
  
    adress : "Miroshnichenko 21",
	name :  "Sergey",
	work: "engineer" ,
	experience : 10
},
human:{ 
  
    adress : "Miroshn 21",
	name :  "Sveta",
	work: "decorator" ,
	experience : 3
},
human:{ 
  
    adress : "Mir 21",
	name :  "Sacha",
	work: "economist" ,
	experience : 8
} }
];

				

 

        var table = document.createElement('table');

        table.setAttribute('border', '1');

        table.setAttribute('color', '000');

        table.setAttribute('width','500');

        table.setAttribute('height', '300');

 

        var tbody = document.createElement('tbody');

        var tr = document.createElement('tr');

            tr.innerHTML = '<td>Адресс</td><td>работа</td><td>Опыт</td><td>Name</td>';

            tbody.appendChild(tr);

        var items = ['human'];
		 var countGoods = mas.length;

   

            var tr = document.createElement('tr');

                for (var i = 0; i < mas.length; i++) {
                    var td = document.createElement('td');
                    var str = "";
					
					str+="<td>" +  mas[i].human.adress + "</td>"+ "<td>" + mas[i].human.work + "</td>" +"<td>" +  mas[i].human.experience + "</td>"+ "<td>" + mas[i].human.name + "</td>" ;
              
                    tr.innerHTML += str;

             

                tbody.appendChild(tr);

        }

        table.appendChild(tbody);

        document.getElementById('table').appendChild(table);

 
