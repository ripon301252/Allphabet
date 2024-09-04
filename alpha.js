//function play(){
//   const homeSection = document.getElementById('home-screen');
    // 1. hide the home screen.
//    homeSection.classList.add('hidden');

    // 2. show the playground
//    const playgroundSection = document.getElementById('play-ground');
//    playgroundSection.classList.remove('hidden');
//}


function play(){
    // 1. hide the home screen.
    hideElementById('home-screen');
    // 2. show the playground
    showElementById('play-ground');
    // 3. Game
    continuGame();


     // hide final score
     hideElementById('final-score');


     // reset score and life
     setTextElementValueById('current-life', 5)
     setTextElementValueById('current-score', 0)

}

function continuGame(){
    // random alphabet generate
    const alphabet = getARandomAlphabet();

    // alphabet generated to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // alphabet generated Background color
    setBacgroundColorById(alphabet); 
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);


    // clear the last selected alphabet highlite
    const currentAlphabet =  getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

}
