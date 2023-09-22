let clickedElementByUser 
let grabBlock
const arrayOfId = ['green', 'yellow', 'red', 'blue']

let itemIndex = 0 
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

    //triggering blink
    $("#"+grabBlock).fadeOut(100).fadeIn(100);
    
    //add random block to array
    storeRandomBlockContainer.push(grabBlock)
}

// play sound based on selected random block
function playSelectedBlockSound(block){

    // grabbing block ID and paste as parameter for file 
    const audioElement = new Audio(`sounds/${block}.mp3`);
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
   
    let executeFunction1 = true;
 
    // set as flag so it can repeat function one by one
    if(executeFunction1 ){
    
        // checking if amount of clicked blocks are equal for both and make sure last items in array are matching, then function will be executed
        if(storeUserSelectedBlocks.length === storeRandomBlockContainer.length 
            && storeUserSelectedBlocks[itemIndex] === storeRandomBlockContainer[itemIndex] ){

        // set timeout so user can see what block was highlighted 
            setTimeout(function() {

                randomSelectBlock()
                // set flag to false so function will executed 1 time and move to next step
                executeFunction1 = false

                // set index to 0, so when user will be clicking it can start compared from begining of array
                itemIndex = 0

                // set array to empty state so user can fill out array from beginig and compare every value with array of random blocks
                storeUserSelectedBlocks = []
                }, 1000);
            }
            
            // user will be clicking until array lenght will match the random, and every value will be compared
        else if(storeUserSelectedBlocks.length <= storeRandomBlockContainer.length){

            // checking elements in array one by one aftre user click
            if(storeUserSelectedBlocks[itemIndex] === storeRandomBlockContainer[itemIndex]){
                itemIndex ++
            }

            // in case wrong item was clicked - triger the lost function and start from begining 
            else if(storeUserSelectedBlocks[itemIndex] != storeRandomBlockContainer[itemIndex]){
                userLost()
                storeRandomBlockContainer = [] 
                storeUserSelectedBlocks = []
               
            }
            
        }
    }
    
}
// if user lost - set title, make wrong sound, change background like blinking animation and set level to 0
function userLost(){

    document.getElementById('level-title').innerHTML = 'Game Over, Press "A" Key to Restart'
    
    playSelectedBlockSound('wrong')
    
    let body = document.querySelector("body")
    
    body.classList.add('game-over')
    
    setTimeout(function() {
        body.classList.remove('game-over');
    }, 100);

    levelCount = 0;
}
