var myNumbers = [];
var resultNumbers[];
var numbers = document.getElementById('numbers');

function writeNumbers()
{
  for(var i = 1; i <=100;i++)
  {
    myNumbers.push(i);
  }
}

function findPrimNumbers()
{
  var divident = 2;
  var length =
  for(var i = 0; i < ;i++)
  {
    myNumbers = div(divident,);
    divident++;
  }
}

function div(number,array)
{
  var back = [];
  for(var i = 0; i < array.length; i++)
  {
    if((myNumbers[i]%number) != 0)
    {
      back.push(myNumbers[i]);
    }
  }

  return back;
}

function onAction()
{
  max = getMax();
  min = getMin(max);
  avg = getAvg();

  maxo.innerHTML += max;
  mino.innerHTML += min
  avgo.innerHTML += avg;

  var infos = greatestChange();

  document.getElementById('big').innerHTML = infos[0];
  document.getElementById('d').innerHTML = (infos[1] +1);

  print(randomArray, temp);
}

button.addEventListener('click',onAction,false);
