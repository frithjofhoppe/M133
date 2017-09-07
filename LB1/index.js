var playButton = document.getElementsByClassName('playbutton');
var startButton = document.getElementById('btnStart');
var stopButton = document.getElementById('btnStop');
var chkBoxes = document.getElementsByClassName('chkBox');

var isPlayerOneOnTurn = false;
var isPlayRunning = false;
var playMode = "";

var playButtonValues = [["-","-","-"],["-","-","-"],["-","-","-"]];



function playButton_Click(e)
{
  if(this.className != "playbutton player1selected" && this.className != "playbutton player2selected")
  {
    name = this.getAttribute("name");
    if(isPlayerOneOnTurn)
    {
      this.className += " player1selected";
      setPlayButtonValues(name.charAt(0),name.charAt(1),"pl1");
    }
    else if (!isPlayerOneOnTurn)
    {
      this.className += " player2selected";
      setPlayButtonValues(name.charAt(0),name.charAt(1),"pl2");
    }
    checkPlayEnd();
    changeTurn();
  }
  else
  {
    window.alert("Der button wurde bereits gewählt");
  }
}

function setDefaultCondition()
{
  clearPlayButtonColors();
  clearPlayButtonValues();
}

function setStartStatus()
{
  for(var a = 0; a < playButton.length; a++)
  {
    playButton[a].setAttribute("disabled","disabled")
  }
}

function enableElements()
{

}

function clearPlayButtonValues()
{
  for(var a = 0 ;a < 3;a++)
  {
    for(var b = 0; b < 3; b++)
    {
      playButtonValues[a][b] = "-";
    }
  }
}

function clearPlayButtonColors()
{
  window.alert(playButton.length);
  for(var a = 0; a < playButton.length; a++)
  {
    playButton[a].className = "playbutton";
  }
}

function setPlayButtonValues(number1,number2,player)
{
  playButtonValues[number1][number2] = player;
}

function checkPlayEnd()
{
  if(arePlayButtonValuesFill())
  {
    window.setTimeout(setDefaultCondition,500 );
  }
}

function evaluateResult()
{

}

function arePlayButtonValuesFill()
{
  var back = true;
  for(var a = 0; a < 3;a++)
  {
    for(var b = 0; b < 3; b++)
    {
      if(playButtonValues[a][b] == "-")
      {
        back = false;
      }
    }
  }
  return back;
}

function changeTurn()
{
  if(isPlayerOneOnTurn)
  {
    isPlayerOneOnTurn = false;
  }
  else
  {
    isPlayerOneOnTurn = true;
  }
}

function startButton_Action()
{
  var isSetted = false;
  var name = "";
  for(var a = 0; a < chkBoxes.length; a++)
  {
    if(chkBoxes[a].checked && isSetted==false)
    {
      isSetted = true;
      name = chkBoxes[a].getAttribute("id");
    }
    else if(chkBoxes[a].checked==true && isSetted)
    {
        window.alert("Sie haben mehrer Optionen ausgewählt");
        break;
    }
  }

  if(isSetted)
  {
    checkOption(name);
  }
}

function optionMVM()
{

}

function checkOption(option)
{
  switch(option)
   {
     case "mvm":optionMVM();break;
     case "mvp":break;
     case "pvp":break;
     default:break;
   }
}

function stopButton_Action()
{

}

window.onload = function(){
  setStartStatus();
};
startButton.addEventListener('click',startButton_Action,false);
stopButton.addEventListener('click',stopButton_Action,false);

for(var i = 0; i < 9; i++)
{
  playButton[i].addEventListener('click',playButton_Click,false);
}
