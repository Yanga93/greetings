// declare a global variable//
var counter = 0;
var Language = document.getElementsByName("Language");
//Add global variable to store the names greeted
var namesGreeted = {};
//add  for loop looking if the userName exists in namesGreeted if not increment
for (var i = 0; i < namesGreeted.length; i++) {}
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
function greetMe() {
  var Inputtext = document.getElementById('Name');
  if (Language[0].checked && namesGreeted[Inputtext] === undefined) {
    //var empty = "";
    namesGreeted[Inputtext] = Inputtext;
    document.getElementById("demo").innerHTML = "Hello, " +
      Inputtext.value + "!";
    document.getElementById("count").innerHTML = counter += 1;
    //  counter += 1;
  } else if (Language[0].checked && namesGreeted[Inputtext] !== undefined) {
    document.getElementById("demo").innerHTML = "Good to see you again, " +
      Inputtext.value + "!";
  }
  // end of first if statement
  else if (Language[1].checked && namesGreeted[Inputtext] === undefined) {
    namesGreeted[Inputtext] = 1;
    document.getElementById("demo").innerHTML = "Dumela, " +
      Inputtext.value + "!";
    document.getElementById("count").innerHTML = counter += 1;

  } else if (Language[1].checked && namesGreeted[Inputtext] !== undefined) {
    document.getElementById("demo").innerHTML = "Ke thabela ho hobona hape, " +
      Inputtext.value + "!";
  }
  // end of first if statement
  else if (Language[2].checked && namesGreeted[Inputtext] === undefined) {
    namesGreeted[Inputtext] = 1;
    document.getElementById("demo").innerHTML = "Molo, " +
      Inputtext.value + "!";

  } else if (Language[2].checked && namesGreeted[Inputtext] !== undefined) {
    document.getElementById("demo").innerHTML = "Kuhle ukubona kwakhona, " +
      Inputtext.value + "!";
    document.getElementById("count").innerHTML = counter += 1;
  }
  //counter+=1;
  // end of first if statement
  // Store
  localStorage.setItem("counter", counter);
  Inputtext.value = ""
};


// Reset the button to the value of 0 greetings
function resetButton() {
  var count = 0;
  counter = 0;
  localStorage.setItem("count", 0);
  document.getElementById("count").innerHTML = counter;
}
//End of reset button
