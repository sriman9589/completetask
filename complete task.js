
function displayInputValue(event) {
  event.preventDefault();
  handleName();
  handleAge();
  handleCourse();
  handleEmail();

  //localStorage.setItem('name', JSON.stringify(destinationId.textContent);

  //get value from gender
  const inputValue3 = document.getElementsByName("gender");
  const genderValue = inputValue3[0].value;
  // console.log("radio-out", genderValue);

  const genderBox = document.getElementById("outputValue3");
  genderBox.textContent = genderValue;

  // console.log("show", genderBox.value);

}

function handleName() {
  const inputValue1 = document.getElementById("inputValue1");

  const valueToTransfer1 = inputValue1.value;

  const destinationId1 = document.getElementById("outputValue1");
  destinationId1.textContent = valueToTransfer1;
}

function handleAge() {
  const inputValue2 = document.getElementById("inputValue2");

  const valueToTransfer2 = inputValue2.value;

  const destinationId2 = document.getElementById("outputValue2");
  destinationId2.textContent = valueToTransfer2;
}


/*const valueToTransfer3 = inputValue3.value;
const destinationId3 = document.getElementById("outputValue3");
destinationId3.textContent = valueToTransfer3;
*/




/*const names = JSON.parse(localStorage.getItem('name'))
console.log(names);

document.getElementById("outValue").textContent = names;
*/
function handleCourse() {
  const inputValue4 = document.getElementById("myOption");
  const distinationId4 = document.getElementById("outputValue4");
  distinationId4.textContent = inputValue4.value;
}

function handleEmail() {
  const inputValue5 = document.getElementById("inputValue5");
  const destinationId5 = document.getElementById("outputValue5");
  destinationId5.textContent = inputValue5.value;

}