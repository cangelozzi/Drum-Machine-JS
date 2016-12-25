// on window add and event listner when "keydown", where (e) is the event
window.addEventListener('keydown', function (e) {
  // console.log (e)
  // on the event we need the e.keyCode, which returns a number associated with data-key
  // console.log (e.keyCode)
  
  // create a CONST variable audio, assign the data-key relative to the event
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // create a CONST for the KEY transition effect
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(key)
  
  if(!audio) return; // stop the function from running
  audio.currentTime = 0; // retrigger sound without waiting the sound to finish
  audio.play();
  
  // add class to key, like jQuery .addClass()
  key.classList.add('playing');
  
})

function removeTransition (e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove('playing');
}

// create an event listner to reset transition once finished(ended)
const keys = document.querySelectorAll('.key');

// now we need to listen to each key event when transition happens
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
