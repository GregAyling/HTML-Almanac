function playAudio(){
      document.getElementById("Audio").src = sound.value;
      document.getElementById("Audio").play(); 
      document.getElementById("playButton").setAttribute("hidden", "hidden"); 
      document.getElementById("pauseButton").removeAttribute("hidden");	  
}
function pauseAudio(){
      document.getElementById("Audio").src = sound.value;
      document.getElementById("Audio").pause();
      document.getElementById("Audio").load();
      document.getElementById("pauseButton").setAttribute("hidden", "hidden"); 
      document.getElementById("playButton").removeAttribute("hidden");	  
}