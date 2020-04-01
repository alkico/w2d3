// Async and Callbacks

// javascript is a synchronous language with some asynchronous behaviours
// javascript is executed line by line and the next line is only 
// executed when the current line is finished

// javascript is 
// single threaded - only one thing can be done at a time
// synchronous - one line after the other


// if at a certain line there is some very time consuming code running 
// it would stop the execution of the lines below - that would be very bad 😩
// for executions that take an unpredictable amount of time we use async

// while the async function runs in the background and the rest of the code 
// can continue to execute 



// example
/*
function getFirstElementOfArray (array) {
    return array[0];
  }

  const array = ["Madrid", "Barcelona", "Miami"];
  const firstElement = getFirstElementOfArray(array);

  console.log(firstElement); // <== Madrid
*/
// fast enough (or inexpensive) so we don't have to make it asynchronous


// hypothetical example

// this function would have to be async to prevent textsize to be undefined
// function readFile (file) {
//     // read the file - or some other expensive operation
//     return contentFile.length;
//   }

//   const textSize = readFile("odyssey.txt");
//   console.log(textSize); // => undefined


// Callback functions
// The callback function contains the code that will be executed 
// when the async function finishes its execution


// Let's look at an async function : setTimeout

function someCallbackFunction() {
    console.log("Hey there, Ironhackers! 😎");
}
const timeoutId = setTimeout(someCallbackFunction, 3000);
console.log(timeoutId);
clearTimeout(timeoutId);
console.log('runs first ⏰');
console.log('runs first ⏰');
console.log('runs first ⏰');


// more common way to write a settimeout : 

// const timeoutId = setTimeout(function () {
//     console.log("Hey there, Ironhackers! 😎");
// }, 5000);



// https://repl.it/@janRedmann/setTimeout-counter

// change the counter so that it stops at 5












// a counter can better be done with setinterval


let i = 1;
const intervalId = setInterval(function () {
    console.log(i);

    i++;

    if (i > 10) {
        clearInterval(intervalId);
    }
}, 1000);




// now take that example and change it so the counter is counting backwards
// and at the end you log : Boooom 💣 






/*
let students = [
    "Aleah",
    "Benjamin",
    "Dioni",
    "Jesus",
    "Jony",
    "Maria",
    "Nate",
    "Tim",
    "Yosra",
    "Agustina",
    "Avtandil",
    "Chantel",
    "Clara",
    "Karl",
    "Sebastian",
    "Lucas",
    "Mah",
    "Manuel",
    "Olah",
    "Paula",
    "Robert",
    "Phillip",
    "Victoria",
    "Yung-Ting",
    "Sam",
    "Marie"
];
//console.log(students.length);

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function extractRandomCoupleFromArray(students) {
    const firstPerson = students.splice(
        getRandomIndex(students),
        1
    );
    const secondPerson = students.splice(
        getRandomIndex(students),
        1
    );
    return [firstPerson[0], secondPerson[0]];
}

function anounceNewPairSlowly() {
    console.log(extractRandomCoupleFromArray(students));
    if (students.length > 1) {
        setTimeout(anounceNewPairSlowly, 2000);
    }
}

anounceNewPairSlowly();
*/