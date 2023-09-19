let clickedElementByUser 
let grabBlock
const arrayOfId = ['green', 'yellow', 'red', 'blue']

let levelCount = 0



// container for random and selected blocks
let storeRandomBlockContainer = [] 
let storeUserSelectedBlocks = []

// Press any key to start

    document.querySelector('body').addEventListener('keypress',(event) =>{
        if(event.key === "a" || event.key === "A"){   
            randomSelectBlock()
            
            }
            userPlay()
    })

    

// selecting random block, adding animation for blinking and sound
function randomSelectBlock(){

    levelCount = levelCount + 1

    document.getElementById('level-title').innerHTML = "Level " + levelCount

    // selecting random block ID 

    const randomNumber = Math.floor(Math.random() * 4)

    // store selected block in variable 
    grabBlock= arrayOfId[randomNumber]

    playSelectedBlockSound(grabBlock)

    $("#"+grabBlock).fadeOut(100).fadeIn(100);

    storeRandomBlockContainer.push(grabBlock)
}

// play sound based on selected random block
function playSelectedBlockSound(block){

    // grabbing block ID and paste as parameter for file 
    const audioElement = new Audio(`/sounds/${block}.mp3`);
    audioElement.play() 
}


function userClickedBlock(event) {
  
    // Get the clicked button element
    clickedElementByUser = event.target.id;
    
    // Add the "pressed" class to the clicked button
     event.target.classList.add("pressed");
    
    // Remove the "pressed" class after a delay
    setTimeout(function() {
        event.target.classList.remove("pressed");
    }, 100);
    
    // Play sound associated with the clicked block
    playSelectedBlockSound(clickedElementByUser);
    
     // Store the clicked block's ID in the array
    storeUserSelectedBlocks.push(clickedElementByUser);

    // Compare random and selected blocks
    compareUserSelectedBlock(storeRandomBlockContainer,storeUserSelectedBlocks)

    }
    
function userPlay(){

    // Grab all elements with the class "btn" and add click event listeners
    let btnSelector = document.querySelectorAll('.btn');
    btnSelector.forEach((el) => {
        el.addEventListener('click', userClickedBlock);
    });

}


function compareUserSelectedBlock(random_block,user_block){
 
    // console.log("random block:  " + storeRandomBlockContainer)
    // console.log(storeUserSelectedBlocks)

    
    let executeFunction1 = true;

    console.log("random choise: " + grabBlock)
    console.log("my choise: " + clickedElementByUser)

    if(executeFunction1 && grabBlock === clickedElementByUser){
        setTimeout(function() {
            randomSelectBlock()
            executeFunction1 = false
            }, 1000);
        }
       
    else{
        userLost()
        storeRandomBlockContainer = [] 
        storeUserSelectedBlocks = []
    }    
} 


function userLost() {

    document.getElementById('level-title').innerHTML = 'Game Over, Press "A" Key to Restart'
    
    playSelectedBlockSound('wrong')
    
    let body = document.querySelector("body")
    
    body.classList.add('game-over')
    
    setTimeout(function() {
        body.classList.remove('game-over');
    }, 100);

    levelCount = 0
}

