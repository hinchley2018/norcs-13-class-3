//things not in fences are available to anyone
let items = []
function addItem(name, price, itemOnSale = false){
    
    let item = { name: name, price: price}
    items.push(item)
    if(itemOnSale){
        let discount = 5
    }
    console.log(name, "added")
}
//go look at the pool
function getTotal(){
    let total = 0;
    // go through our items add up total
    for (let i = 0;  i < items.length; i++){
        total += items[i].price
    }
    return total
}

//What will be the total of our items?
// debugger
//the function / house is visible but I can't go inside
addItem('pants', 40)
addItem('shirt', 20)
console.log("items after adding", items)
let total = getTotal()
console.log(total)


function withConflict(){
    let a = 5
    function nested(){
        let a = 0
        let result = a + 10
        console.log("nested" ,result)

    }
    nested()
}
withConflict()
let loggedInUser
//example 6 
function login(name){
    loggedInUser = name
}

function greetLoggedInUser(){
    document.body.append(`Welcome, ${loggedInUser}`)
}

login('Faizah')

greetLoggedInUser()