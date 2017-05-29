var counter = 0;
function greetingCounter() {

  // Retrieve
  var storedCounter = localStorage.getItem("counter");

  // covert a stored value to be a number
  if (storedCounter) {
    counter = Number(storedCounter)

    // manipulate HTML file
    displayCounter.innerHTML = counter;

    // Store
    localStorage.setItem("counter", counter);
}

// Retrieve
var storedCounter = localStorage.getItem("counter");
// covert a stored value to be a number
if (storedCounter) {
  counter = Number(storedCounter)
  // manipulate HTML file
  document.getElementById("count").innerHTML = counter;
  // reset line
  var reset = document.getElementById("count");
}
// creating function greetMe
//  counter += 1;
function greetMe() {
    document.getElementById("count").innerHTML = counter += 1;

  } 
  localStorage.setItem("counter", counter);
  Inputtext.value = ""
};
