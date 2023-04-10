// Iteration 1: Names and Input
let hacker1 = 'Matrix';
//console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Trinity';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals



if (hacker2.length > hacker1.length){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops

let driver = "";

for (let i=0; i<hacker1.length; i++) {
    driver += hacker1[i].toUpperCase() + " " 
}

console.log(driver)

let navigator = "";
for (let i=hacker2.length - 1; i>=0; i--) {
navigator += hacker2[i].toUpperCase() + " "  
}
console.log(navigator)

///

let spaceX = hacker1.localeCompare(hacker2);

if (spaceX < 0 ){ 
console.log("The driver's name goes first")
}else if
(spaceX > 0 ){
console.log("Yo, the navigator goes first definitely")
}else{
console.log("What?! You both have the same name")    
}

let spaceX2 = "";
for (let i=0; i < hacker1.length; i++){
 spaceX2 += hacker1[i].toUpperCase()+ " ";
}
console.log(spaceX2)




