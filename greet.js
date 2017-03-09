// declare a global variable//
var counter = 0;
var Language = document.getElementsByName("Language");
// var Inputtext = document.getElementById('Name');

// Retrieve

var storedCounter = localStorage.getItem("counter");
// covert a stored value to be a number
if (storedCounter) {
  counter = Number(storedCounter)
  // manipulate your HTML file
  document.getElementById("count").innerHTML = counter;
  // reset line
  var reset = document.getElementById("count");
}

function greetMe() {
  var Inputtext = document.getElementById('Name');
  if (Language[0].checked && Inputtext.value !== "") {
    var empty = "";
    //var Inputtext = document.getElementById('Name');
    document.getElementById("demo").innerHTML = "Hello, " +
      Inputtext.value + "!";
    document.getElementById("count").innerHTML = counter += 1;

  } else if (Language[1].checked && Inputtext.value !== "") {
    var Inputtext = document.getElementById('Name')
    document.getElementById("demo").innerHTML = "Dumela, " +
      Inputtext.value + "!";
    document.getElementById("count").innerHTML = counter += 1;

  } else if (Language[2].checked && Inputtext.value !== "") {
    var Inputtext = document.getElementById('Name')
    document.getElementById("demo").innerHTML = "Molo, " +
      Inputtext.value + "!";
    document.getElementById("count").innerHTML = counter += 1;
  }
  // Store
  localStorage.setItem("counter", counter);
  Inputtext.value = ""
}

// Reset the button to the value of 0 greetings
function resetButton() {
  var count = 0;
  counter = 0;
  localStorage.setItem("count", 0);
  document.getElementById("count").innerHTML = counter;
}
