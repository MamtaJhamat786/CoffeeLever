
let firstName =prompt("whats your first name")
let lastName =prompt("whats your last name")
let age= prompt("what your age")
let height =prompt("How much is your height")
let dogName =prompt("Whats your dog name")
alert("information is saved")

let nameCond=null
let ageCond= null
let heightCond= null
let dogCond= null   

// // Logic
if (firstName[0] === lastName[0]) {
    nameCond = true    
} else {
    nameCond = false
    
}

if (age >18 && age<25) {
    ageCond= true
    
} else {
    ageCond= false
    
}
if (height>165) {
    heightCond= true
    
} else {
    heightCond= false
}

if ( dogName[0] === 'y' && dogName[dogName.length-1] === 'y') {
    dogCond=true
    
} else {
    dogCond= false
    
}

if (nameCond && ageCond &&  heightCond &&  dogCond) {
    console.log(" Wlcome to secret chat")
    
} else {
    console.log("sorry here is nothing for you")
    
}