let mic;
let micStarted = false;
let sound = 1;
let easing = 1;

function setup() {
  	createCanvas(1, 1);
	// fixing p5 audio context issue 
	getAudioContext().suspend();
}

function draw() {

  	if(micStarted) {
  		// Get the input volume (between 0.0 and 1.0)
  		let vol = mic.getLevel();

  		// Send the volume to the page
  		let currentSound = map(vol, 0, 1, 0, 200);

      let averageSound = currentSound - sound;
      sound += averageSound * easing;

  		document.body.style.setProperty('--sound', sound);
  	
  	} else {
  		// Send 0 when sound has not started
  		document.body.style.setProperty('--sound', 0);
  	}
  	

}

function startSound() {
	// only start audio once
	if (!micStarted) {
		// start audio context only now
		userStartAudio();
		mic = new p5.AudioIn();
		mic.start();
		micStarted = true;
		console.log('sound started!')
	}
}

document.addEventListener("click", startSound)
