//Play sound with Keyboard
function playSound(e) {
  //console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(audio);
  if (!audio) return; //stop the function from running all together
  audio.currentTime = 0; // rewind to the start of the audio
  audio.play();
  key.ClassList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip transform if it's not a transform
  e.ClassList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

// function playSound(e) {
//   //console.log(e);
//   const audio = document.querySelector(
//     `audio[data-key="${e.keyCode || e.target.closest("div.key").dataset.key}"]`
//   );
//   if (!audio) return; //stop the function from running all together
//   audio.currentTime = 0; // rewind to the start of the audio
//   audio.play();
// }

const mouseKeys = document.querySelectorAll(".key");
mouseKeys.forEach((element) => {
  element.addEventListener("click", () => {
    // Fetch the key for the audio object that matches the key of
    // this element
    const audioKey = element.getAttribute("data-key");

    // Query the document for the audio object corresponding to
    // this element's key.

    // The document.querySelector will get the first element from
    // the document that matches the selector you pass.

    // The audio[data-key="${ audioKey } part means "get an audio
    // element that has a data-key attrbitute whose value matches
    // that of the current element's "data-key" (ie 78, 83, etc)

    const audio = document.querySelector(`audio[data-key="${audioKey}"]`);

    // Play the audio in the same way as you currently are
    audio.play();
    audio.currentTime = 0;
    //element.classList.add("playing");
  });
});

const touchKeys = document.querySelectorAll(".key");
touchKeys.forEach((element) => {
  element.addEventListener("touchStart", () => {
    // Fetch the key for the audio object that matches the key of
    // this element
    const audioKey = element.getAttribute("data-key");

    // Query the document for the audio object corresponding to
    // this element's key.

    // The document.querySelector will get the first element from
    // the document that matches the selector you pass.

    // The audio[data-key="${ audioKey } part means "get an audio
    // element that has a data-key attrbitute whose value matches
    // that of the current element's "data-key" (ie 78, 83, etc)

    const audio = document.querySelector(`audio[data-key="${audioKey}"]`);

    // Play the audio in the same way as you currently are
    audio.play();
    audio.currentTime = 0;
    //element.classList.add("playing");
  });
});

// const button = document.querySelector("button");
// button.addEventListener("click", playSound);
// window.addEventListener("click", (e) => {
//   console.log(e);
// });
