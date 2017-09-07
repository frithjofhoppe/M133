var randomArray = [12,56,89,45,78,56,23,12,45];
var maxValue = document.getElementById('maxValue');
var button = document.getElementById('btnShow');
var mino  = document.getElementById('min');
var maxo  = document.getElementById('max');
var avgo  = document.getElementById('avg');
var temp = document.getElementById('temp');

var min;
var max;
var avg;

function greatestChange()
{
  var difference = 0;
  var day1 = 0;
  var back = [];

  for(var i = 0; i < randomArray.length; i++)
  {
    if(i != (randomArray.length -1))
    {
      var first = randomArray[i];
      var second = randomArray[(i+1)];

      if((first - second) > 0)
      {
          if((first-second) > difference)
          {
            difference = first-second;
            day1 = i+1;
          }
      }
      else if ((second - first) > 0){

        if((second-first) > difference)
        {
          difference = second-first;
          day1 = i+1;
        }
      }
    }
  }

  back.push(difference);
  back.push(day1);

  return back;
}

function getMax()
{
  var max = 0;
  for(var i = 0; i < randomArray.length; i++)
  {
    if(randomArray[i] > max)
    {
      max = randomArray[i];
    }
  }
  return max;
}

function getAvg()
{
  var avg = 0;
  for(var i = 0; i < randomArray.length; i++)
  {
    avg += randomArray[i];
  }

 avg /= randomArray.length;
 return avg;
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

function print(input,html)
{
  for(var i = 0; i < input.length; i++)
  {
    html.innerHTML +=  input[i] + ", ";
  }
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
