const drumBtns = document.querySelectorAll('.drum');

function playDrums(e) {
	switch (e) {
		case "w":
			const drumSoundW = new Audio('sounds/tom-1.mp3');
			drumSoundW.play();
			break;

		case "a":
			const drumSoundA = new Audio('sounds/tom-2.mp3');
			drumSoundA.play();
			break;

			case "s":
				const drumSoundS = new Audio('sounds/tom-3.mp3');
				drumSoundS.play();
				break;

			case "d":
				const drumSoundD = new Audio('sounds/tom-4.mp3');
				drumSoundD.play();
				break;

			case "j":
				const drumSoundJ = new Audio('sounds/snare.mp3');
				drumSoundJ.play();
				break;

			case "k":
				const drumSoundK = new Audio('sounds/crash.mp3');
				drumSoundK.play();
				break;

			case "l":
				const drumSoundL = new Audio('sounds/kick-bass.mp3');
				drumSoundL.play();
				break;
			
		default: console.log(btnInnerHTML);
			break;
	}
}

// Animate drum buttons when triggered

function btnAnimation(e) {
	let activeBtn = document.querySelector(`.${e}`);
	activeBtn.classList.add('pressed');
	setTimeout(() => {
		activeBtn.classList.remove('pressed');
	}, 100);
}

// Play drums on click

for(let i = 0; i < drumBtns.length; i++) {
	drumBtns[i].addEventListener('click',  function() {
		let btnTextContent = this.textContent;
		playDrums(btnTextContent);

		btnAnimation(btnTextContent);
	});
};

// Play drums on keypress

document.addEventListener('keydown', function(event) {
	const key = event.key;
	playDrums(key);

	btnAnimation(key);
})