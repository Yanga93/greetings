// declare a global variable//
var counter = 0;
var Language = document.getElementsByName("Language");
// var Inputtext = document.getElementById('Name');

// Retrieve

var storedCounter = localStorage.getItem("counter");
if (storedCounter){
  counter = Number(storedCounter)
  document.getElementById("count").innerHTML = counter;
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

  Inputtext.value = "";
  // Store
  localStorage.setItem("counter", counter);
  return empty;
}
greetMe();
// document.getElementById("demo").innerHTML="Hello, " + Inputtext +"!";
// var Inputtext = document.getElementById('Name').value="";
// }
