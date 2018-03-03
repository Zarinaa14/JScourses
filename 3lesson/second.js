var names = ["Victor", "Ekaterina", "Igor", "Egor", "Alina", "Sergey", "Ivan", "Victoria"];
var arr = [], N = names.length;
for(var i = 0; i < 100; i++){
	rand = Math.floor(Math.random() * 100);
	randName = Math.floor(Math.random() * 6);
	arr.push({
		name: names[randName],
		age: rand,
		print: function(){
		    console.log(this.name);
			 console.log(this.age);
			console.log("My name is  "+ this.name + ".  I am  " + this.age + " years old.");
		}
	});
	arr.forEach(function(elem){
	elem.print();
});
}