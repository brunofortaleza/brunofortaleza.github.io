var audio = document.getElementById("meuAudio");

function playAudio(){
    audio.play();
}

function pauseAudio(){
    audio.pause();
}

function stopAudio(){
    audio.pause();
    audio.currentTime = 0;
}

function aumentarVolume(){
    if( audio.volume < 1)  audio.volume += 0.1;
}

function diminuirVolume(){
    if( audio.volume > 0)  audio.volume -= 0.1;
}
     
function mute(){
    if( audio.muted ){
        audio.muted = false;
    }else{
        audio.muted = true;
    }
}