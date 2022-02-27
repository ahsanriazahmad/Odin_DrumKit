// function playSound(e) {
//   //console.log(e);
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   //console.log(audio);
//   if (!audio) return; //stop the function from running all together
//   audio.currentTime = 0; // rewind to the start of the audio
//   audio.play();
//   key.ClassList.add("playing");
// }

// function removeTransition(e) {
//   if (e.propertyName !== "transform") return; //skip transform if it's not a transform
//   e.ClassList.remove("playing");
// }

// const keys = document.querySelectorAll(".key");
// keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// window.addEventListener("keydown", playSound);

function playSound() {
  //console.log(e);
  const audio = document.querySelector(`audio[data-key = 65]`);
  if (!audio) return; //stop the function from running all together
  audio.currentTime = 0; // rewind to the start of the audio
  audio.play();
}

document.addEventListener("click", playSound);
// window.addEventListener("click", (e) => {
//   console.log(e);
// });
