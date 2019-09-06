const startButton = document.querySelector('#startButton'),
  stopButton1 = document.querySelector('#stopButton1'),
  stopButton2 = document.querySelector('#stopButton2'),
  stopButton3 = document.querySelector('#stopButton3');

var context,
	oscillator,
  contextGain,
  x = 0;

function start(){
	startButton.style.display = 'none';
  stopButton1.style.display = 'block';
  stopButton2.style.display = 'block';
  stopButton3.style.display = 'block';
  
	context = new AudioContext();
	oscillator = context.createOscillator();
  contextGain = context.createGain();
  
  oscillator.connect(contextGain);
	contextGain.connect(context.destination);
	oscillator.start(0);
}

function stop(){
	startButton.style.display = 'block';
  stopButton1.style.display = 'none';
  stopButton2.style.display = 'none';
  stopButton3.style.display = 'none';
  
  contextGain.gain.exponentialRampToValueAtTime(
  	0.00001, context.currentTime + x
	)
}

startButton.addEventListener('click', start);
stopButton1.addEventListener('click', function(){
	x = 0.1;
  stop();
});
stopButton2.addEventListener('click', function(){
	x = 1;
  stop();
});
stopButton3.addEventListener('click', function(){
	x = 5;
  stop();
});

  stopButton1.style.display = 'none';
  stopButton2.style.display = 'none';
  stopButton3.style.display = 'none';
