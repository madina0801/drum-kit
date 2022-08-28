const drumBtns = document.querySelectorAll('.drum');

for(let i = 0; i < drumBtns.length; i++) {
	drumBtns[i].addEventListener('click',  function() {
		let btnInnerHTML = this.textContent;

			switch (btnInnerHTML) {
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
	});
};