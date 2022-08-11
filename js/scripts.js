//Business Logic

function hitCalc(race, size){ //clauclate 
  console.log("calculating hp");
  return race * 2 + size;
}

function fillSheet(hitPoints) { //do final product
  document.querySelector("span.hitPoints").innerText = hitPoints;
}


// UI Logic
function handleSubmission(event) {
  event.preventDefault();

  //parseint all numbers from forms
  const name = document.querySelector("input#nameInput").value;
  const race = parseInt(document.getElementById("race").value);
  const size = parseInt(document.getElementById("size").value);
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

  let hitPoints = null;
  hitPoints = hitCalc(race, size);



  console.log(hitPoints);

  fillSheet(hitPoints);


}

window.addEventListener("load", function() {

  //get forms
  const nameInput = document.getElementById("input-name");
  const raceInput = document.getElementById("select-race");
  const sizeInput = document.getElementById("select-size");
  const classInput = document.getElementById("select-class");
  const attrInput = document.getElementById("select-attr");
  const submit = document.getElementById("submitForm");
  submit.addEventListener("submit", handleSubmission);
});