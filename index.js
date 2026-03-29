//note: index.js works on the bottom. the code after index.js won't work unless index.js is after the code

//console.log("Hello");
//console.log("I'm here, test test");

//window.alert("Alert test")

document.getElementById("h1one").textContent = "Test";
document.getElementById("pone").textContent = "More test wow";

// comment

//let x = 100 + 100 - 50;
let x = -10;
//x = x + 1;
let x2 = x - 1 + "%";

console.log(x);
console.log(x2);

//console.log(Math.PI);
//console.log(Math.E);
//console.log(`One has ${x} stuff`);
//console.log(`This has ${x}`)

// boolean
let online = true;
let woah = "woah";
console.log(typeof online);
console.log(`Go: ${woah}`);

document.getElementById("wow1").textContent = woah;

//input test
//let prompt = window.prompt("Prompt?");
//console.log(prompt);

//textbox
let prompt;

document.getElementById("submit0").onclick = function(){
prompt = document.getElementById("text0").value;
prompt = document.getElementById("h1one").textContent = `Test, ${prompt}`
console.log(prompt);
}

//random number test
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum)

if(x > 0){
console.log("variable 'x' is greater than 0");
}
else{
console.log("variable 'x' is not greater than 0");
}