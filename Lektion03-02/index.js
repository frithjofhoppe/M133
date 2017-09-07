

var randomArray = [];
var max;
var maxValue = document.getElementById('maxValue');
var button = document.getElementById('btnShow');
var result  = document.getElementById('result');

function generateRandom(rnd)
{

  var output;
  for(var i = 0; i < 10;i++)
  {
    var rnd2 = Math.floor(Math.random() * (rnd)) +1 ;
    randomArray.push(rnd2);
    output += rnd2 +"; ";
  }

  document.write(output);

  max = rnd;
}

function getMin(inputMin)
{
  var min = inputMin;
  for(var i = 0; i < randomArray.length; i++)
  {
    if(randomArray[i] < min)
    {
      min = randomArray[i];
    }
  }

  return min;
}

function onAction()
{
  generateRandom(maxValue.value)
  result.innerHTML = getMin(max);
}

button.addEventListener('click',onAction,false);
