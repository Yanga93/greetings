// declare a global variable//
var Language = document.getElementsByName("Language");
var demo = document.getElementById("demo");
var displayCounter = document.getElementById('displayCounter');
var greetMeButt = document.getElementById('greetMeButt');
var resetButt = document.getElementById('resetButt');
var Inputtext = document.getElementById('Name');

//create function for the radio buttons and must be able to loop throw the list of radio buttons
function checkedRadioButton() {
  for (var i = 0; i < Language.length; i++) {
    var currentBtn = Language[i];
    if (currentBtn.checked) {
      return currentBtn.value;
    };
  };
  return "Please make sure language is selected.";
};
//create a function for chosenLanguage
function greetedLanguage(chosenLanguage) {

  if (chosenLanguage === 'English') {
    return "Hello, ";
  } else if (chosenLanguage === 'Setswana') {
    return "Dumela, ";
  } else if (chosenLanguage === 'IsiXhosa') {
    return "Molo, ";
  } else {
    return "Please make sure language is selected! ";
  }
};

//create function to capture the Name Inputtext
function nameInput() {
  var nameInput = Inputtext.value;
  if (nameInput.length > 0) {
    return Inputtext.value;
  } else {
    return "Please make sure your name is entered! ";
  }
}

// This function calls all the functionality and displays the results.
greetMeButt.addEventListener("click", function() {
  var checkedLanguage = checkedRadioButton();
  var greeting = greetedLanguage(checkedLanguage);
  demo.innerHTML = greeting + nameInput();
  Inputtext.value = "";
});

// Reset the button to the value of 0 greetings
resetButt.addEventListener("click", function() {
  var count = 0;
  counter = 0;
  localStorage.setItem("count", 0);
  displayCounter.innerHTML = counter;

});
//End of reset button
