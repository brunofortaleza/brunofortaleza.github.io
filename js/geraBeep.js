var context, oscillator, statusPlayer = true;

function player(tipoSom){
	statusPlayer ? iniciaBeep(tipoSom) : paraBeep()
	statusPlayer = !statusPlayer
	statusPlayer ? document.getElementById("player").innerText = "Iniciar" : document.getElementById("player").innerText = "Parar"	
}

function iniciaBeep(tipoSom){
	context = new AudioContext()
	oscillator = context.createOscillator();
	oscillator.type = tipoSom;
	oscillator.connect(context.destination);
	oscillator.start();
}

function paraBeep(){
	oscillator.stop(context.currentTime + 0);
}
