// function hello(){
//     console.log("hello world")
// }
var roaster=[]

function addNew(){
    var name= prompt("what name you want to add?")
    roaster.push(name)
}
function remove(){
    var remName= prompt("what name you want to remove?")
    var index = roaster.indexOf(remName)
    roaster.splice(index,1)
}
function display(){
    console.log(roaster)
}


var start = prompt("would you like to start roaster app? y/n")
var request = "empty"
if (start === 'y'){
    while(request!== "quit"){
        request= prompt("Please select an action: add, remove, display, or quit")
        if (request === 'add'){
            addNew()
        }
        else if (request=== 'display'){
            display();
        }
        else if (request === 'remove'){
            remove()
        }
        else{
            alert(" not recognized")
            request ="quit"
        }
        
    }
}