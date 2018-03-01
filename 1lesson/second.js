var N, X, arcsin;
X=prompt("Input -1 to 1");
N=prompt("Input N");
arcsin=0;
X=Number(X); 
N=Number(N);
function factorial(value){
	if (value==0 || value==1) {
		return 1;
	} 
	else {
		return value*factorial(value-1);
	} 
}


	for (var i = 0; i<=N; i++) {
		arcsin+=(factorial(2*i) / (Math.pow(4, i) * Math.pow(factorial(i), 2) * (2*i+1))) * Math.pow(X, 2*i+1)
	}
	alert("arcsin  = " + arcsin);


