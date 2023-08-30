function submitAssignment(student,name,isOnTime = true){
    if(isOnTime){
        console.log("Pass")
    }
    else{
        console.log("Try again")
    }
    
}

function gradeAssignment(){
    console.log("Graded assignment")
}

let students = [
    {
        name: "Bob",
        //defins a function for student
        submitAssignment: submitAssignment
    },
    {
        name: "John",
        submitAssignment: submitAssignment
    }
]

let instructor = {
    name: "Jonathon",

}

//call them like this
// for(let i = 0; i < students.length; i++){
//     submitAssignment(students[i], "Web game 1")
// }

let bob = students[0]
bob.submitAssignment(bob.name, "Web game 1")
// submitAssignment()

function doSomething(f){
 console.log("What is this?", f)   
}
//pass function as arg
doSomething(submitAssignment)

function foldLaundry(){
    console.log("foldLaundry")
}

function washDishes(){
    console.log("washDishes")
}
function doHomework(){
    console.log("doHomework")
}

function feedDog(){
    console.log("feedDog")
}

let chores = [foldLaundry, washDishes, doHomework, feedDog]

console.log(bob)

console.log(students)
console.log(chores)

//how would i do all my chores?
//hint for-loop
for (let index = 0; index < chores.length; index++) {
    console.log("Chore:", chores[index])
    //how do i exceute a function
    chores[index]()
}
function eatDinner(){
    console.log("eaat dinner asdfdsfasdfadf")
}

function vaccumm(){
    console.log("vaccumm")
}
let rooms = [
    {
        name: "Living room",
        chore: vaccumm
    },
    {
        name: "Dining",
        chore: eatDinner
    },
    {
        name: "Kitchen",
        chore: washDishes
    }
]

for (let index = 0; index < rooms.length; index++) {
    console.log(rooms[index])
    //how to do that chore? // invoke the chore?
    rooms[index].chore()
}