var memory=0;
        operationArray = [];

		    function updateDisplay () {
		        document.getElementById("display").innerText = operationArray.join(' ');
		    };

		    function addToLast(input) {
		        operationArray[operationArray.length - 1] += input;
		    };

		    function getLastItem() {
		        return operationArray[operationArray.length - 1];
		    };

		    function handleNumber(number) {
		        if (isNaN(getLastItem())) {
		            operationArray.push(number.toString());
		        } else {
		            addToLast(number.toString());
		        }
		        updateDisplay()
		    };

		    function handleOperator (operator) {
		        if (!isNaN(getLastItem())) {
		            if (operator === '.') {
		                addToLast(operator);
		            } else {
		                operationArray.push(operator);
		            }
		            updateDisplay();
		        }
		    };

		    function allClear (funcName) {
		        operationArray = [];
		        updateDisplay();
		    };

		    function clearEntry () {
		        operationArray[operationArray.length - 1] = getLastItem().toString().slice(0, -1);
		        if (getLastItem().length < 1) {
		            operationArray.pop();
		        }
		        updateDisplay();
		    };

		    function getTotal() {
		        if (isNaN(getLastItem())) {
		            operationArray.pop();
		        }
		        var total = eval(operationArray.join(''));
		        operationArray = [total];
		        updateDisplay();
				return total;
		    };


		    document.getElementById('ac').addEventListener('click', function() {
		        allClear();
		    });

		    document.getElementById('ce').addEventListener('click', function() {
		        clearEntry();
		    });

		    document.getElementById('=').addEventListener('click', function() {
		        getTotal();
		    });
			
		    document.getElementById('MP').addEventListener('click', function() {
		       	memory+=getTotal();
				document.getElementById('memory').innerHTML="M";
		    });
			
		    document.getElementById('MM').addEventListener('click', function() {
		       	memory-=getTotal();
				document.getElementById('memory').innerHTML="M";			
		    });
			
		    document.getElementById('MR').addEventListener('click', function() {
				allClear();
				handleNumber(memory);
				updateDisplay();
				
				
		    });
		
		    document.getElementById('MC').addEventListener('click', function() {
				memory=0;
				document.getElementById('memory').innerHTML="";							
		    });	
			
			
		    var operatorControls = document.getElementsByClassName('operator'),
		        numberControls = document.getElementsByClassName('number');

		    for (var i = 0; i < operatorControls.length; i++) {
		        operatorControls[i].addEventListener('click', function() {
		            handleOperator(this.getAttribute('id'));
		        });
		    }

		    for (i = 0; i < numberControls.length; i++) {
		        numberControls[i].addEventListener('click', function() {
		            handleNumber(this.getAttribute('id'));
		        });
		    }

		 
