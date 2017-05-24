// declare a global variable//
var counter = 0;
var Language = document.getElementsByName("Language");
var demo = document.getElementById("demo");
var displayCounter = document.getElementById('displayCounter');
var greetMeButt = document.getElementById('greetMeButt');
var resetButt = document.getElementById('resetButt');
var listOfRadioButtons = document.getElementsByClassName('listOfRadioButtons');
//Add global variable to store the names greeted
var namesGreeted = {};

// Retrieve
var storedCounter = localStorage.getItem("counter");
// covert a stored value to be a number
if (storedCounter) {
  counter = Number(storedCounter)

  // manipulate HTML file
  displayCounter.innerHTML = counter;

}
// creating function greetMe
greetMeButt.addEventListener("click", function() {
  var Inputtext = document.getElementById('Name');
  for (var i = 0; i < Language.length; i++) {
    var currentBtn = Language[i];
  if (currentBtn.checked && namesGreeted[Inputtext] === undefined) {
    namesGreeted[Inputtext] = Inputtext;
    demo.innerHTML = "Hello, " +
      Inputtext.value + "!";
    displayCounter.innerHTML = counter += 1;
  } else if (currentBtn.checked && namesGreeted[Inputtext] !== undefined) {
    demo.innerHTML = "Good to see you again, " +
      Inputtext.value + "!";
  }
  // end of first if statement
  else if (currentBtn.checked && namesGreeted[Inputtext] === undefined) {
    namesGreeted[Inputtext] = 1;
    demo.innerHTML = "Dumela, " +
      Inputtext.value + "!";
    displayCounter.innerHTML = counter += 1;

  } else if (currentBtn.checked && namesGreeted[Inputtext] !== undefined) {
    demo.innerHTML = "Ke thabela ho hobona hape, " +
      Inputtext.value + "!";
  }
  // end of first if statement
  else if (currentBtn.checked && namesGreeted[Inputtext] === undefined) {
    namesGreeted[Inputtext] = 1;
    demo.innerHTML = "Molo, " +
      Inputtext.value + "!";
    displayCounter.innerHTML = counter += 1;

  } else if (currentBtn.checked && namesGreeted[Inputtext] !== undefined) {
    demo.innerHTML = "Kuhle ukubona kwakhona, " +
      Inputtext.value + "!";

  }
};

  // Store
  localStorage.setItem("counter", counter);
  Inputtext.value = ""

});


// Reset the button to the value of 0 greetings
resetButt.addEventListener("click", function() {
  var count = 0;
  counter = 0;
  localStorage.setItem("count", 0);
  displayCounter.innerHTML = counter;

});
//End of reset button
