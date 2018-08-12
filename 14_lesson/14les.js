let promise = new Promise(function(resolve, reject){
var xhr = new XMLHttpRequest();
	xhr.open("GET","tasks.json",true);
	xhr.onload = function(){
		data = JSON.parse(xhr.responseText);
		resolve(data);

 	}
 	xhr.onerror = function() {
 		reject("Error loading data");
 	}
 	xhr.send();
});

let task_plan;
let task_list;
let filtered_task_plan;
let filtered_task_list;

promise.then(function(data) {
	let tasks = [];
	data.tasks.forEach(function(item) {
		tasks.push(new Task(item.name, item.prio, item.date_end));
	})
	task_plan = new TaskPlan(tasks);
	task_list = new TaskList(tasks);
	filtered_task_plan = task_plan.get_task_at_day('');
	filtered_task_list = task_plan.get_task_at_day('');
	console.log();
},function(error) {
	console.error(error);
});


class Task {
	constructor(name, prio,date_end){
		 this.name = name;
		 this.prio = prio;
		 this.date_end = date_end;
	}
}

class TaskPlan {
	constructor(list) {
		this.list = list;
	}

	add_task(...items) {
		for(let i = 0; i < items.length; i++) {
			this.list.push(items[i]);
		}
		console.log(this.list);
		
		//(function(my_list) {
		//	items.map(function(item) {
		//		debugger
		//	})
		//})(this)
	}
	
	
	remove_task(name) {
		let filtered_list = this.list.filter(function(list_item) {
			return list_item.name !== name;
		});
		this.list = filtered_list;
	}
	
	get_task_by_prio(prio) {
		return this.list.filter(function (task){
			return task.prioritet === prio;
		});
	}
	
	get_task_at_day(day){
		return this.list.filter(function (task){
			return task.date_end === day;
		});
	}
}

class TaskList {
	constructor(list) {
		this.list = new Set(list);
	}
	
	add(task){
		this.list.add(task)
		return this.list;
	}

	remove(task) {
		this.list.delete(task);
		return this.list;
	}

	get_task_at_day(day){
		return this.list.filter(function (task){
			return task.date_end === day;
		});
	}
}