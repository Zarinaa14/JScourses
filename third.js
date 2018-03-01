var c = Number(prompt("Enter the first value: "));
var Operation = prompt("Input the operation: ");
var d = Number(prompt("Enter the second value: "));

if(c && d || c == 0 || d == 0)
	switch(Operation) {
		case '+': 
			alert(" + " + c + " and " + d + " = " + (c + d));
			break;
		case '-':
			alert(" - " + c + " and " + d + " = " + (c - d));
			break;
		case '*':
			alert("Multiplicate " + c + " and " + d + " = " + (c * d));
			break;
		case '/':
		    alert(" Division " + c + " and " + d + " = " + (c/ d));
			break;
		case '^':
			alert(Math.pow(c, d));
			break;
		default:
			alert("It is not an operation");
	}
else
	console.log("Error");
