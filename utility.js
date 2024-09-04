// 1----------
function hideElementById(elementId){
    // 1. hide the home screen.
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// 2-------
function showElementById(elementId){
    // 2. show the playground
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

//3--------
function getARandomAlphabet(){
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split(''); // make array
  
    // get a random index between 0 - 25
    const randomNumber = Math.random() * 25
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index];
    return alphabet   
}

// 4------
function setBacgroundColorById(elementId){
    // show the keyboard Background color. 
    const element = document.getElementById(elementId);
    element.classList.add('bg-[aqua]');
}

// 5--------
function removeBackgroundColorById(elementId){
    // hide the keyboard Background color.
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[aqua]')
}

// 7--another--- 
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


// 8----
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}


// 6------
// capture keyboard key press
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    
    // 9-----
    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expectted to prress
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
   

    // check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continuGame();

    // 7------
        // update score:
        // 1. get the current score
            //const currentScoreElement = document.getElementById('current-score');
            //const currentScoreText = currentScoreElement.innerText;
            //const currentScore = parseInt(currentScoreText);
        const currentScore = getTextElementValueById('current-score');


        // 2. increase the score by 1
            //const newScore = currentScore + 1;
        const updateScore = currentScore + 1;
        

        // 3. show the updated score
            //currentScoreElement.innerText = newScore;
        setTextElementValueById('current-score', updateScore);    
    }
    else{
       // lost the Life count
       // 1. get the current Life number
            //const currentLifeElement = document.getElementById('current-life');
            //const currentLifeText = currentLifeElement.innerText;
            //const currentLife = parseInt(currentLifeText)
        const currentLife = getTextElementValueById('current-life')
            
       // 2. reduce the life count 
            //const newLife = currentLife - 1; 
        const updateLife = currentLife - 1;  
            
       // 3. display the life lost count
            //currentLifeElement.innerText = newLife;
        setTextElementValueById('current-life', updateLife);   
        
        if(updateLife === 0){
            gameOver()
        }
    }
    
}
document.addEventListener('keyup', handleKeyboardButtonPress);