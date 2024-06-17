//Getting all buttons by class, and looping trought it

let allButtons = document.querySelectorAll(".drum");

//Loop
//EventListener for buttons
for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function () {
    let textValue = this.innerHTML.toUpperCase();
    let value = this.innerHTML;
    let button = this;

    button.style.transform = "scale(1.1)";

    setTimeout(function () {
      button.style.transform = "scale(1)";
    }, 200);

    setTimeout(function () {
      button.style.transform = "scale(1.1)"; //buggi~!!!
    }, 400);

    setTimeout(function () {
      button.style.transform = "scale(1)";
    }, 600);

    getSound(value);
    onKeyboardKeyPress(value);
    buttonAnimation(value);
  });
}

//Playing sound for key,which is pressed
//This part work's for mouse clicks
function getSound(key) {
  switch (key) {
    case "w":
      let sound1 = new Audio("sounds/sound1.mp3");
      sound1.play();
      break;
    case "a":
      let sound2 = new Audio("sounds/sound2.wav");
      sound2.play();
      break;
    case "s":
      let sound3 = new Audio("sounds/sound3.wav");
      sound3.play();
      break;
    case "d":
      let sound4 = new Audio("sounds/sound4.wav");
      sound4.play();
      break;
    case "q":
      let sound5 = new Audio("sounds/sound5.wav");
      sound5.play();
      break;
    case "e":
      let sound6 = new Audio("sounds/sound6.wav");
      sound6.play();
      break;
    case "h":
      let sound7 = new Audio("sounds/sound7.wav");
      sound7.play();
      break;
    default:
      console.log(key);
      break;
  }
}

//EventListener
//selecting whole page
//playing sound for button on keyboard.
function onKeyboardKeyPress() {
  document.addEventListener("keypress", (event) => {
    let key = event.key;
    getSound(key);
    buttonAnimation(key);
  });
}

//Animation, happend when key is pressed
function buttonAnimation(key) {
  let button = document.querySelector("." + key);
  if (button) {
    button.classList.add("animation");
    setTimeout(function () {
      button.classList.remove("animation");
    }, 100);
  }
}
