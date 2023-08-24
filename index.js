let clickedElementByUser 
let grabBlock
const arrayOfId = ['green', 'yellow', 'red', 'blue']

//let newArrayUser = []

// container for random and selected blocks
let storeRandomBlockContainer = [] 
let storeUserSelectedBlocks = []

console.log("where is undefined? " + storeUserSelectedBlocks)
// Press any key to start

    document.querySelector('body').addEventListener('keypress',(event) =>{
        if(event.key === "a" || event.key === "A"){
            
            randomSelectBlock()

           
            userClickedBlock()
            //userClickedBlock()
            // if(storeUserSelectedBlocks.length > 0){
            //     storeUserSelectedBlocks.push(clickedElementByUser)
    
            // }

            const countMe = storeUserSelectedBlocks.length
            console.log(countMe)
            //compareUserSelectedBlock()
            
            
          
            //userClickedBlock()
            
            //compareUserSelectedBlock()
           
        }
       
      
    })

// selecting random block, adding animation for blinking and sound
function randomSelectBlock(){

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


function userClickedBlock() {
    let btnSelector = document.querySelectorAll('.btn') //grabbing all elements with same class
  
    // going though each element in collection and add Event in each of them   
   btnSelector.forEach((el) => {
 
     el.addEventListener('click', (event) => {
 
        clickedElementByUser =  event.target.id // grabbing id from block which was clicked by user
        
        el.classList.add("pressed") // adding and removing css class when user click the block
        setTimeout(function() {
            el.classList.remove("pressed",1000)
        })
            
        playSelectedBlockSound(clickedElementByUser) // adding sounds to clicked block

        })
        
    })
    storeUserSelectedBlocks.push(clickedElementByUser)
    console.log()
    
    //compareUserSelectedBlock()
 }
  


function compareUserSelectedBlock(){

    let newArrayUser = []

    // if(storeUserSelectedBlocks[0] == 'undefined'){
    //     storeUserSelectedBlocks.pop()
    //     storeUserSelectedBlocks.push(clickedElementByUser)
    // }

 
   //storeRandomBlockContainer.push(grabBlock)

    //storeRandomBlockContainer.push(grabBlock)
    
    // let random_block
    // let user_block

    console.log("random block:  " + storeRandomBlockContainer)
    console.log(storeUserSelectedBlocks)

    if(storeRandomBlockContainer ===  storeUserSelectedBlocks ){
        console.log("Here we gooooo")
        // storeUserSelectedBlocks = []
        
        randomSelectBlock()

        // while (storeRandomBlockContainer.length > newArrayUser.length){
        //     userClickedBlock()
        //     newArrayUser.push(clickedElementByUser)
        //     for (let i=0; i < storeRandomBlockContainer.length; i++){
        //         // random_block = storeRandomBlockContainer[i]
        //         // user_block = storeUserSelectedBlocks[i]
                
        //         if(storeRandomBlockContainer[i] === newArrayUser[i+1]){
                   
        //             console.log("Winner")
                
        //         }
        //         else{
        //             console.log('Loooozer')
        //        }
        //  }

        // for (let i=0; i < storeRandomBlockContainer.length; i++){
        //     // random_block = storeRandomBlockContainer[i]
        //     // user_block = storeUserSelectedBlocks[i]
            
        //     if(storeRandomBlockContainer[i] === storeUserSelectedBlocks[i+1]){
               
        //         console.log("Winner")
            
        //     //}
        //     // else{
        //     //     console.log('Loooozer')
        //     }

       // }
    }
}
    




