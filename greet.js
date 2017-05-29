// declare a global variable//
var Language = document.getElementsByName("Language");
var demo = document.getElementById("demo");
var displayCounter = document.getElementById('displayCounter');
var greetMeButt = document.getElementById('greetMeButt');
var resetButt = document.getElementById('resetButt');

//create test for the radio buttons and must be able to loop throw the list of radio buttons
function greetMsg(Language) {
  for (var i = 0; i < Language.length; i++) {
    var Inputtext = document.getElementById('Name').value;
    var currentBtn = Language[i];
    if (currentBtn.checked && currentBtn.value === 'English') {
      return demo.innerHTML = "Hello, " + Inputtext;
    } else if (currentBtn.checked && currentBtn.value === 'Setswana') {
      return demo.innerHTML = "Dumela, " + Inputtext;
    } else {
      currentBtn.checked && currentBtn.value === 'IsiXosa'
      return demo.innerHTML = "Molo, " + Inputtext;
    }
  }
};
// creating function greetMe
greetMeButt.addEventListener("click", function() {
  greetMsg(Language);
  greetCounter();
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
