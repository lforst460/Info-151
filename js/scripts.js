document.getElementById("answers").onclick = check_answers


function check_answers(){
  var one = document.getElementById("one").value
  var two = document.getElementById("two").value
  var three = document.getElementById("three").value
  var answerOne = $("#answerone")
  var answerTwo = $("#answertwo")
  var answerThree = $("#answerthree")
  if (one == "9"){
    answerOne.text("Correct")
  }
  else{
    answerOne.text("Incorrect")
  }
  if (two == "4"){
    answerTwo.text("Correct")
  }
  else{
    answerTwo.text("Incorrect")
  }
  if (three == "27"){
    answerThree.text("Correct")
  }
  else{
    answerThree.text("Incorrect")
  }
}
