var firstNumber = document.getElementById('firstNumber');
var secondNumber = document.getElementById('secondNumber');
var result = document.getElementById('result');
var btnShow = document.getElementById('btnShow');

function showNumber()
{

  var back = 0;

  if(firstNumber.value > secondNumber.value)
  {
    back = firstNumber.value;
    back += " " +secondNumber.value;
  }
  else if(firstNumber.value < secondNumber.value)
  {
    back = secondNumber.value;
    back += " " +firstNumber.value;
  }
  else if(firstNumber.value == secondNumber.value){
    back = secondNumber.value;
    back += " " +firstNumber.value;
  }

  result.innerHTML = back;
}

btnShow.addEventListener('click',showNumber,false);
