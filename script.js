// Project: make a counter
// Step 1: create elements: done
// Step 2: create functions: done 
// Step 3: add when 'add' button is pressed: done
// Step 4: substract when 'subtract' button is pressed: done
// Step 5: reset button: done
// Project: complete


// elements
const addEl = document.getElementById("add-btn");
const substactEl = document.getElementById("substract-btn");
var counter = 0;


//display counter
let counterDisplayEl = document.getElementById('counter');


// functions
function subtract(){
  // console.log("subtract button clicked");
  counter --;
  counterDisplayEl.innerText = "Counter: " + counter;
}
function add(){
  // console.log("add button clicked");
  counter ++;
  counterDisplayEl.innerText = "Counter: " + counter;
}
function reset(){
  // console.log("reset button clicked");
  counter = 0;
  counterDisplayEl.innerText = "Counter: " + 0;
}

// counterDisplayEl.innerText = "Counter: " + 0;
