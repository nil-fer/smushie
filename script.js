let mic;
let micStarted = false;
let sound = 1;
let easing = 0.5;

function setup() {
  	createCanvas(1, 1);
  	mic = new p5.AudioIn();
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
	mic.start();
	micStarted = true;
	console.log('sound started!')
}

document.addEventListener("click", startSound)