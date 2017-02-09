



function randomNumbers(numOne, numTwo){

  if (parseFloat(numOne) > parseFloat(numTwo)) {
    return "The first number was bigger!";
  }
  else if (parseFloat(numOne) < parseFloat(numTwo)) {
    return "The second number was bigger!";
  }
  else if (parseFloat(numOne) == parseFloat(numTwo)) {
    return "The numbers are the same!";
  }
  else {
    return "NaN is in banana, but NOT A NUMBER!!!!!!!!!";
  }
}
console.log(randomNumbers(2.234534,3));
console.log(randomNumbers(5,"4.4234 taco"));
console.log(randomNumbers(5,"5"));
console.log(randomNumbers("d",5));
