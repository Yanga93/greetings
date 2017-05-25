// declare a global variable//
var counter = 0;
var Language = document.getElementsByName("Language");
var demo = document.getElementById("demo");
var displayCounter = document.getElementById('displayCounter');
var greetMeButt = document.getElementById('greetMeButt');
var resetButt = document.getElementById('resetButt');


//Add global variable to store the names greeted
// var namesGreeted = {};

// Retrieve
var storedCounter = localStorage.getItem("counter");
// covert a stored value to be a number
if (storedCounter) {
  counter = Number(storedCounter)

  // manipulate HTML file
  displayCounter.innerHTML = counter;

}

//create test for the radio buttons and must be able to loop throw the list of radio buttons
function greetMsg(Language) {
  for (var i = 0; i < Language.length; i++) {
    var currentBtn = Language[i];
    if (currentBtn.checked && currentBtn.value === 'English') {
      return demo.innerHTML = "Hello, " ;
    } else if (currentBtn.checked && currentBtn.value === 'Setswana') {
      return demo.innerHTML = "Dumela, " ;
    } else {
      currentBtn.checked && currentBtn.value === 'IsiXosa'
      return demo.innerHTML = "Molo, " ;
    }
  }
};
var namesGreeted = {}
function getName() {
  var Inputtext = document.getElementById('Name').value;
  for (var i = 0; i < namesGreeted.length; i++) {
  if (namesGreeted === Inputtext) {
    return Inputtext;
    }
  }
 (namesGreeted ===) {

  }
  namesGreeted[i].push(Inputtext)
}

// creating function greetMe
greetMeButt.addEventListener("click", function() {
  greetMsg(Language) + Inputtext.value + "!";

  Inputtext.value = ""
  //   if (currentBtn.checked && namesGreeted[Inputtext] === undefined) {
  //     namesGreeted[Inputtext] = Inputtext;
  //     demo.innerHTML = "Hello, " +
  //       Inputtext.value + "!";
  //     displayCounter.innerHTML = counter += 1;
  //   } else if (currentBtn.checked && namesGreeted[Inputtext] !== undefined) {
  //     demo.innerHTML = "Good to see you again, " +
  //       Inputtext.value + "!";
  //   }
  //   // end of first if statement
  //   else if (currentBtn.checked && namesGreeted[Inputtext] === undefined) {
  //     namesGreeted[Inputtext] = 1;
  //     demo.innerHTML = "Dumela, " +
  //       Inputtext.value + "!";
  //     displayCounter.innerHTML = counter += 1;
  //
  //   } else if (currentBtn.checked && namesGreeted[Inputtext] !== undefined) {
  //     demo.innerHTML = "Ke thabela ho hobona hape, " +
  //       Inputtext.value + "!";
  //   }
  //   // end of first if statement
  //   else if (currentBtn.checked && namesGreeted[Inputtext] === undefined) {
  //     namesGreeted[Inputtext] = 1;
  //     demo.innerHTML = "Molo, " +
  //       Inputtext.value + "!";
  //     displayCounter.innerHTML = counter += 1;
  //
  //   } else if (currentBtn.checked && namesGreeted[Inputtext] !== undefined) {
  //     demo.innerHTML = "Kuhle ukubona kwakhona, " +
  //       Inputtext.value + "!";
  //
  //   }
  // };
  //
  //   // Store
  //   localStorage.setItem("counter", counter);

  //
});


// Reset the button to the value of 0 greetings
resetButt.addEventListener("click", function() {
  var count = 0;
  counter = 0;
  localStorage.setItem("count", 0);
  displayCounter.innerHTML = counter;

});
//End of reset button
