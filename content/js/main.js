var words = document.querySelector('#mywords');
var mic = document.querySelector('#mic');
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = 'en-GB';
recognition.interimResults = true;
recognition.maxAlternatives = 1;

var state = 0;
const toggle = _ => {
  if (!state){start();}
  else {stop();}
};

const start = _ => {
  mic.style = "filter:invert(.8);"
  recognition.start();
  console.log('I\'m listening.');
  state = 1;
};

const stop = _ => {
  mic.style = "filter:invert(0);"
  recognition.stop();
  console.log('I\'m ignoring you.');
  state = 0;
};

recognition.onresult = function(event) {
  console.log("onresult");
  console.log(event);
  
  var result = event.results[0][0].transcript;
  console.log(result);
  words.innerText = result;
};

recognition.onspeechend = function() {
  console.log("onspeechend");
  console.log(event);
  recognition.stop();
};

recognition.onnomatch = function(event) {
  console.log("onnomatch");
  console.log(event);
};

recognition.onerror = function(event) {
  console.log("onerror");
  console.log(event);
};
