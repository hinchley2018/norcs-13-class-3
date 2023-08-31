//get the element from html
let heading = document.querySelector("#heading")
console.log("grabbed html", heading)

//listen for clicks on that element
heading.addEventListener('click', function(){
    console.log("hello students")
})

//define function
function addToCart(e){
    console.log('event', e)
    console.log("Added item to cart")
}

//easier to grab the buttons
let buttons = document.querySelectorAll(".add-to-cart")
console.log("grabbed html", buttons)
for (let index = 0; index < buttons.length; index++) {
    //listen for clicks for ech button
    buttons[index].addEventListener('click',addToCart)
}
//why would this accept a function?
function submitAssignment(steps){
    for(let i = 0; i< steps.length; i++){
        steps[i]()
    }
    console.log("Upload to canvas")
}

function cloneGithub(){

}
function solveProblem1(){

}

function solveProblem2(){

}

function gitAddCommitPush(){

}
submitAssignment([cloneGithub, solveProblem1, gitAddCommitPush])
submitAssignment([cloneGithub, solveProblem2, gitAddCommitPush])

function getEvent(eventType){
    return {
        fired: true
    }
}

//proxy for what addevent listener looks like
//click happened 
//call user defined function
function customAddEventListener(eventType, callback_fn){
    let event = getEvent(eventType)
    if(event.fired){
        //call users code with event object
        callback_fn(event)
    }
}