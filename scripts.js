//Getting all buttons by class, and looping trought it

let allButtons = document.querySelectorAll(".drum");

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function () {
    let textValue = this.innerHTML.toUpperCase();
    getSound(textValue);
  });
}

function getSound(key) {
  switch (key) {
    case "W":
      let sound1 = new Audio("sounds/sound1.mp3");
      sound1.play();
      break;
    case "A":
      let sound2 = new Audio("sounds/sound2.wav");
      sound2.play();
      break;
    case "S":
      let sound3 = new Audio("sounds/sound3.wav");
      sound3.play();
      break;
    case "D":
      let sound4 = new Audio("sounds/sound4.wav");
      sound4.play();
      break;
    case "Q":
      let sound5 = new Audio("sounds/sound5.wav");
      sound5.play();
      break;
    case "E":
      let sound6 = new Audio("sounds/sound6.wav");
      sound6.play();
      break;
    case "H":
      let sound7 = new Audio("sounds/sound7.wav");
      sound7.play();
      break;
    default:
      console.log(key);
      break;
  }
}

function onKeyboardKeyPress() {
  document.addEventListener("keypress", (event) => {
    let key = event.key.toUpperCase();
    getSound(key);
  });
}
onKeyboardKeyPress();
