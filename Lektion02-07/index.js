var nodeNumber = document.querySelectorAll('.nmb');
var result = document.getElementById('result');
var btnShow = document.getElementById('btnShow');

function showNumber()
{

  var value = new Array(2)
  var min = 1000;

  for(var x = 0; x < nodeNumber.length; x++)
  {
    nodeNumber.forEach(function(number){
      if(number.value < min)
      {

        min = number.value;
      }
    })
    value.push(min);
  }

  result.innerHTML = value.toString();
}

btnShow.addEventListener('click',showNumber,false);
