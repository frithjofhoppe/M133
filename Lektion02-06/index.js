var result = document.getElementById('result');
  var counter = 1;

  for(var i = 1; i <= 100; i++)
  {
    if(i < 100)
    {
      result.innerHTML += i +"<br>";
    }
    else if(i == 100){
      result.innerHTML += i +" Ich Komme";
    }
  }

  
