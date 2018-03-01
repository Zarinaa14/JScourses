var string =String( prompt("input a string"));
var l = string.length
var s = 0;

for(var i = 0; i < l; i++)
{
	if(string[i] == "(")
		s++;
	else 
		if(string[i] == ")")
		s--;
if(s < 0)
		break;
}

if(s == 0)
	alert("true");
else
	alert("false");
