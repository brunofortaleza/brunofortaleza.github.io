const stopButton = document.querySelector('#stopButton'),
    stopButton22 = document.querySelector('#stopButton22'),
    stopButton33 = document.querySelector('#stopButton33'),
    stopButton44 = document.querySelector('#stopButton44'),
    stopButton55 = document.querySelector('#stopButton55'),
    stopButton66 = document.querySelector('#stopButton66'),
    stopButton77 = document.querySelector('#stopButton77');
  
const c4 = 261.6,
	d4 = 293.7,
    e4 = 329.6,
    f4 = 349.2,
    g4 = 392.0,
    a4 = 440.0,
    b4 = 493.9;

  	
var context,
	oscillator,
    contextGain,
    x = 1,
    type = 'sine',
    frequency;

function startFrequencia(){
    context = new AudioContext();
	oscillator = context.createOscillator();
    contextGain = context.createGain();
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    oscillator.connect(contextGain);
	contextGain.connect(context.destination);
	oscillator.start(0);
}

function stopFrenquencia(){
    startFrequencia();
    contextGain.gain.exponentialRampToValueAtTime(
  	    0.00001, context.currentTime + x
	)
}

var not = document.getElementById('nota')

ouvirSom.addEventListener('click', function(){
    frequency = not;
    stopFrenquencia();
});

stopButton.addEventListener('click', function(){
	frequency = c4;
    stopFrenquencia();
});
stopButton22.addEventListener('click', function(){
	frequency = d4;
    stopFrenquencia();
});
stopButton33.addEventListener('click', function(){
	frequency = e4;
    stopFrenquencia();
});
stopButton44.addEventListener('click', function(){
	frequency = f4;
    stopFrenquencia();
});
stopButton55.addEventListener('click', function(){
	frequency = g4;
    stopFrenquencia();
});
stopButton66.addEventListener('click', function(){
	frequency = a4;
    stopFrenquencia();
});
stopButton77.addEventListener('click', function(){
	frequency = b4;
    stopFrenquencia();
});

function meuValor(){
    var valor = document.getElementById("selecionaFrequencia").value;
    frequency = valor;
    return frequency;
}

ouvirSom.addEventListener('click', function(){
    frequency = meuValor();
    stopFrenquencia();
})