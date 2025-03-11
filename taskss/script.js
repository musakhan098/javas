//calculater take data from user
function calculator() {
      let num1 = parseFloat(prompt("Enter first number:"));
      let num2 = parseFloat(prompt("Enter second number:"));
      let operator = prompt("Enter operator (+, -, *, /):");
  
      let result;
      switch (operator) {
          case '+': 
              result = num1 + num2;
              break;
          case '-': 
              result = num1 - num2;
              break;
          case '*': 
              result = num1 * num2;
              break;
          case '/': 
              result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
              break;
          default: 
              result = 'Invalid operator';
      }
  
      alert('Result: ${result}');
  }

  
  calculator();
  //to do last
  //user add remove and delete task
  let todoList = [];

function addTask() {
    let task = prompt("Enter a task:");
    if (task) {
        todoList.push(task);
        alert('Task added: ${task}');
    }
}

function removeTask() {
    let index = parseInt(prompt("Enter task number to remove:"));
    if (index >= 0 && index < todoList.length) {
        let removedTask = todoList.splice(index, 1)[0];
        alert('Removed task: ${removedTask}');
    } else {
        alert("Invalid index");
    }
}

function showTasks() {
    alert('To-Do List:\n${todoList.join("\n")}');
}

// Example Usage
addTask();
addTask();
showTasks();

 //number gassing game
 function guessingGame() {
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      let guess = null;
      
      while (guess !== randomNumber) {
          guess = parseInt(prompt("Guess a number between 1 and 100:"));
          
          if (guess > randomNumber) {
              alert("Too high! Try again.");
          } else if (guess < randomNumber) {
              alert("Too low! Try again.");
          } else {
              alert('Congratulations! You guessed the number: ${randomNumber}');
              break;
          }
      }
  }
  
  guessingGame();


  //temperature converter
function convertTemperature() {
    let temp = parseFloat(prompt("Enter temperature:"));
    let unit = prompt("Convert to (C/F)?").toUpperCase();

    let convertedTemp;
    if (unit === 'C') {
        convertedTemp = (temp - 32) * (5 / 9);
        alert('Temperature in Celsius: ${convertedTemp.toFixed(2)}°C');
    } else if (unit === 'F') {
        convertedTemp = (temp * 9 / 5) + 32;
        alert('Temperature in Fahrenheit: ${convertedTemp.toFixed(2)}°F');
    } else {
        alert("Invalid choice! Use 'C' or 'F'.");
    }
}

convertTemperature();




//word counter
function wordCounter() {
      let sentence = prompt("Enter a sentence:");
      
      let wordCount = sentence.trim().split(/\s+/).length;
      let charCount = sentence.replace(/\s/g, "").length;
  
      alert('Words: ${wordCount}, Characters (excluding spaces): ${charCount}');
  }
  
  wordCounter();