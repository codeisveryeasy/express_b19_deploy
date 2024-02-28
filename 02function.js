console.log("Working with functions")

function welcomeClassic(){
    console.log("I am classic function")
}

function welcomeClassicParameter(name){
    console.log(`${name}, welcome to classic function`)
    console.log(name + ", welcome to classic function")
}

let welcomeArrow = ()=>{
    console.log("I am arrow function")
}

let welcomeArrowParameter=(name)=>{
    console.log(`${name}, welcome to arrow function`)
    console.log(name + ", welcome to arrow function")
}

//call the functions 
welcomeClassic()
welcomeClassicParameter("PD")
welcomeArrow()
welcomeArrowParameter("PD")