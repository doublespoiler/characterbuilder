//Business Logic

  //functions to calculate whatever stats we want
    //armor class
    //attack
    //damage
    //HP
    //MP
    //??

//function to 



function buildCharacter(){
  //calculate
}



// UI Logic
function handleSubmission(event) {
  event.preventDefault();

  //parseint all numbers from forms
  const name = document.querySelector("input#nameInput").value;
  const race = document.querySelector("input[name='race']:selected").value;
  const size = parseInt(document.querySelector("input[name='race']:selected").value);
  const playerClass = document.querySelector("input[name='playerClass']:checked").value;
  const str = document.querySelector("input#strInput").value;
  const dex = document.querySelector("input#dexInput").value;
  const int = document.querySelector("input#intInput").value;

  console.log("name" + name);
  console.log("race" + race);
  console.log("size" + size);
  console.log("playerClass" + playerClass);
  console.log("str" + str);
  console.log("dex" + dex);
  console.log("int" + int);


}

window.addEventListener("load", function() {

  //get forms
  const nameInput = document.getElementById("input-name");
  const raceInput = document.getElementById("select-race");
  const sizeInput = document.getElementById("select-size");
  const classInput = document.getElementById("select-class");
  const attrInput = document.getElementById("select-attr");
  form.addEventListener("submit", handleSubmission);
});