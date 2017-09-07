var result = document.getElementById('result');
  var counter = 1;

  for(var i = 1; i <= 100; i++)
  {
    counter *= i;
  }

  result.innerHTML += counter;
