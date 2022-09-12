var vid=document.querySelector('video');

// slider
var currentT = document.querySelector('#currentTime');
var durationT=document.querySelector('#durationtime');

var sliderRange=document.querySelector('.slider');
var speedslider=document.querySelector('#speed');
function setspeed(){
    // var slidespeed=vid.playbackRate *(speedslider.value /100);
    if(speedslider.value==1){
        vid.playbackRate=2.0;
    }
if(slidespeed.value==2){
    vid.playbackRate=2.5;
}
if(slidespeed.value==3){
    vid.playbackRate=3.0;
}
if(slidespeed.value==4){
    vid.playbackRate=3.5;
}
}
function changeslider(){
    var slideto = vid.duration * (sliderRange.value / 100);
	vid.currentTime = slideto;

}

function videotimeupdate(){

    var nt = vid.currentTime * (100 / vid.duration);
	sliderRange.value = nt;
    console.log(nt);
	var curmins = Math.floor(vid.currentTime / 60);
	var cursecs = Math.floor((vid.currentTime - curmins * 60));
	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.floor(vid.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	currentT.innerHTML = curmins+":"+cursecs;
	durationT.innerHTML = durmins+":"+dursecs;
}
//play pause
  var playbtn=document.querySelector('#playpausebtn');
  
  function playPause(){
    if(vid.paused){
		vid.play();
		playbtn.innerHTML = "pause";
	} else {
		vid.pause();
		playbtn.innerHTML= "play";
	}
  }
  //stop button
  function stop(){
    vid.pause();
  }
  // return to start 
  function returnToStart(){
    vid.load();
    vid.play();
  }
  // return 5 sec
  function return5sec(){
   vid.currentTime-=5;
    
	
	
   
  }
  // add 5 sec
  function add5sec(){
    vid.currentTime+=5;
  }
  function gotoend(){
    var slideto = vid.duration - ((sliderRange.value / 100)-(5));
	vid.currentTime = slideto;
  }

  // mute button
  var mutebtn=document.querySelector('#mutebtn');
 function muteVid(){
    if(vid.muted){
		vid.muted = false;
		mutebtn.innerHTML = "Mute";
	} else {
		vid.muted = true;
		mutebtn.innerHTML = "Unmute";
	}

  }

  // set volume
  var volumeslider=document.querySelector('#volumeslider');
 function setVolume(){
    vid.volume = volumeslider.value / 100;

 }

 // set full screen
 var fullscreenbtn=document.querySelector('#fullscreenbtn');
function fullScreen(){
    if(vid.requestFullScreen){
		vid.requestFullScreen();
	} else if(vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();
	} else if(vid.mozRequestFullScreen){
		vid.mozRequestFullScreen();
	}
}