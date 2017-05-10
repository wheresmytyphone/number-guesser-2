var numGuess = document.querySelector('.num-guess');
var guess = document.querySelector('.guess');
var guessDisplay = document.querySelector('.guess-disp');
var submit = document.querySelector('.submit');
var clear = document.querySelector('.clear');
var reset = document.querySelector('.reset');
var go = document.querySelector('.go')
var hint = document.querySelector('.hint')
var correctNumber;

function randomNumber() {
  var randomNumber = Math.floor(Math.random() * 100 +1);
  correctNumber = randomNumber;
}

randomNumber()

submit.addEventListener("click", function() {
    guessDisplay.innerText = numGuess.value;
    go.innerText = ""
    console.log(numGuess.value)
    compare()
    numGuess.value = ""
})

reset.addEventListener('click', function() {
    numGuess.value = ""
    guessDisplay.innerText = ""
    go.innerText = "Go ahead!"
    hint.innerText = "Take a guess!"
    randomNumber()
})

clear.addEventListener('click', function() {
  numGuess.value = ""
})
function compare() {
  var guessed = parseInt(numGuess.value)
  if (guessed < correctNumber) {
      hint.innerText = "Too low!"
  } else if (guessed > 100) {
      alert("I like your style but it's gotta be under a hundred")
      guessDisplay.innerText = ""
  } else if (guessed > correctNumber) {
      hint.innerText = "Too high!"
  } else if (guessed === correctNumber) {
      hint.innerText = "BOOM!"
  } else if (NaN) {
      alert('Numbers only, folks.')
  }
}
