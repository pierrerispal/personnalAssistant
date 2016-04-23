// Require annyang
const annyang = require('annyang');
var $ = require('jQuery');
var fs = require('fs');
// file is included here:
eval(fs.readFileSync('voice.js')+'');

// Turn on debug messages
annyang.debug();
annyanf.setLanguage("fr-FR");
// Define sample command
var commands = {
  '*input': analyze
};

// Add our commands to annyang
annyang.addCommands(commands);

// Start listening. You can call this here, or attach this call to an event, button, etc.
annyang.start();

function talk(output){
  annyang.pause();
  responsiveVoice.speak(output);
  annyang.resume();
}

function analyze(input){
  switch(input){
    case "hello":
      talk("hi");
      break;
    default:
      talk("i didn't understand");
  }
}
