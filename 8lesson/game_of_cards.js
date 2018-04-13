 var myCards = document.getElementById('container');
var resultsArray = [];
var counter = 0;
var text = document.getElementById('text');

var tries = 0;


var Interval ;
var images = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

var clone = images.slice(0);
var cards = images.concat(clone);


function random_cards(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i],   o[i] = o[j], o[j] = x);
  return o;
}
random_cards(cards);

for (var i = 0; i < cards.length; i++) {
  card = document.createElement('div');
  card.dataset.item = cards[i];
  card.dataset.view = "card";
  myCards.appendChild(card);

  card.addEventListener('click',function () {
    if (this.className != 'flipped' && this.className != 'correct'){
        this.className = 'flipped';
        var result = this.dataset.item;
        resultsArray.push(result);

  
    }


    if (resultsArray.length > 1) {
      if (resultsArray[0] === resultsArray[1]) {
        check("correct");
        counter ++;
		console.log(counter);
		
//        win();
if(counter==12){alert("Ты молодец, наконец-то ты прошел игру!!!");}
if(counter==1){alert("Ты нашел первую пару картинок! Продолжай");}
        resultsArray = [];
      } else {
        check("reverse");
        resultsArray = [];
      }

    }

  })

};

window.onload = function () {
    span = document.getElementById('triesid');
    var tries = 0;
    span.innerHTML = tries;
	  var bod=document.body
    bod.addEventListener('click',function (e) {
        e = e || event;
        var target = e.target || e.srcElement;
        if (target.className != 'flipped') return;
        tries++;
		if(tries==30)alert("Больше запоминай!");
		if(tries==50)alert("Меньше кликай,больше запоминай");
        span.innerHTML = Math.floor(tries / 2);
    })
}




var check = function(className) {
  var x = document.getElementsByClassName("flipped");

  setTimeout(function() {

    for(var i = (x.length - 1); i >= 0; i--) {
      x[i].className = className;
    }

  },500);

}
