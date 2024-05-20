/* Dhruv Patel - 000919050 */

// Group 1 Question 1
function rangeOfNumber(){
  let number = document.getElementById("g1q1i").value;
  

  if(!isNaN(number)){
      if(number == 0  || (number >=13 && number<=17)){
        document.getElementById("g1q1").innerText = "In range.";
      }
      else{
        document.getElementById("g1q1").innerText = "Out of range";
      }
   
   
  }else{
    document.getElementById("g1q1").innerText = "Not a number.";
    return;
  }
  
  
  
  
}

// Group 1 Question 2
function convertNumber(){
  let d = document.getElementById("g1q2i").value;
  if(isNaN(d) || d<=0){
    console.log("Not a number or not a positive number.");
  }
  else{
    var y = Math.floor(d/365.25);
    var restD = d%365.25;
    var m= Math.floor(restD/30.44);
    var leftD = restD %30.44;
    
    var roundD = Math.round(leftD*100)/100;
    document.getElementById("q1g2").innerHTML =y + " years " + m + " months and " + roundD + " days";
  }
}


// Group 2 Question 1
function Vowel() {
  var enterVowel = document.getElementById("g3q1i").value;
  const addLower = enterVowel.toLowerCase();

  switch (addLower) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
          document.getElementById("g2q1").innerHTML = "A Vowel";
          break;
      case "y":
          document.getElementById("g2q1").innerHTML = "Sometimes";
          break;
      default:
          document.getElementById("g2q1") = "Not a vowel";
  }
}

//Group 2 Question 2
function group2Question2(){
  let input = parseInt(document.getElementById("g2q21").value);
  if (isNan(input) || input<0){
    document.getElementById("g2q2i").value = "Bad input";
  }
  else{
    let sumOfInput = 0;
    let number = input;
    while(number>0){
      sumOfInput += number%10;
      number = Math.floor(number/10);
    }
    document.getElementById("g2q2").value = "Sum: ${sum}";
  }
}


//Group 3 Question 2
function checkEquation() {
  let input = document.getElementById('g3p2i').value;
  let output = document.getElementById('g3p2');
  let pattern = /^(\d+)\s*([\+\-\\/\%])\s(\d+)$/;
  let match = input.match(pattern);

  if (match) {
      let operand1 = parseInt(match[1]);
      let operator = match[2];
      let operand2 = parseInt(match[3]);

      switch (operator) {
          case '+':
              document.getElementById('g3p2').innerText=( operand1 + operand2);
              break;
          case '-':
              document.getElementById('g3p2').innerText = (operand1 - operand2);
              break;
          case '*':
              document.getElementById('g3p2').innerText = (operand1 * operand2);
              break;
          case '/':
              document.getElementById('g3p2').innerText = (operand1 / operand2);
              break;
          case '%':
              document.getElementById('g3p2').innerText=( operand1 % operand2);
              break;
          default:
              document.getElementById('g3p2').innerText = ("Invalid formula");
      }
  } else {
      document.getElementById('g3p2').innerText = "Invalid formula";
  }
}