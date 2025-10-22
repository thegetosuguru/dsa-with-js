const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your age: ", (input) => {
  const age = Number(input);
  
    if(isNaN(age)){
        console.log("Wrong input 😒🙄");
    } else if(age >= 18) {
        console.log(`You are ${age} years old, You can vote 😊👌`);
        
    }else {
        console.log(`You are ${age} years old, voting is only allowed those who are above 18 years old. So, You can't vote 🥱`);
    }

});
