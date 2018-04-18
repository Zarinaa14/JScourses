
var video = document.getElementById('video');
var time = document.getElementById('time');
var range = document.getElementById('range');
var play = document.getElementById('play');
var begin = document.getElementById('begin');
var stop = document.getElementById('stop');
var faster = document.getElementById('faster');
var slower = document.getElementById('slower');

var repeat = document.getElementById('repeat');
var secs = video.duration;
var flag = false;
video.addEventListener('loadedmetadata', function(){
play.addEventListener('click', function(){
 if(video.paused){
	video.play();
	play.value="PAUSE"}
	else {video.pause();
	     play.value="PLAY"}
});
faster.addEventListener('click', function(){
	video.playbackRate *= 1.25;
});

slower.addEventListener('click', function(){
	video.playbackRate *= 0.8;
});

range.addEventListener('input', function(){
	video.volume = this.value / 60;
});
repeat.addEventListener('click', function(){
	flag = flag ? false : true;
	video.loop = flag;
	this.classList.toggle('active');
});


var time = document.getElementById('time');


setInterval(function(){

        begin.addEventListener('click', function(){
        video.currentTime = 0;
	
});
stop.addEventListener('click', function(){
       video.pause();
	
});
       
		var currSecs = video.currentTime;
		var CurrSecs = Math.floor(currSecs % 60);
		if(CurrSecs < 10){
			CurrSecs = "0" + CurrSecs;
		}
		document.getElementById('time').innerText = Math.floor(currSecs / 60) + ":" + CurrSecs;
		var width = CurrSecs / secs * 100;
		play.style.width = width + "%";
	}, 1);

});


	
	