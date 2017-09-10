var playButton = document.getElementsByClassName('playbutton');
var startButton = document.getElementById('btnStart');
var stopButton = document.getElementById('btnStop');
var chkBoxes = document.getElementsByClassName('chkBox');
var txtEmail1 = document.getElementById('txtSpieler1');
var txtEmail2 = document.getElementById('txtSpieler2');

var divGameKind = document.getElementById('controlGameKind').getElementsByTagName('*');

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

function disableFieldButton(condition)
{
  for(var a = 0; a < playButton.length; a++)
  {
    playButton[a].disabled = condition;
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
  var isCorrect = false;
  var name = "";
  for(var a = 0; a < chkBoxes.length; a++)
  {
    if(chkBoxes[a].checked && isSetted==false)
    {
      isSetted = true;
      isCorrect = true;
      name = chkBoxes[a].getAttribute("id");
    }
    else if(chkBoxes[a].checked && isSetted)
    {
        isCorrect = false;
        break;
    }
  }

  if(isSetted && isCorrect)
  {
    checkOption(name);
  }
  else if(!isSetted)
  {
      window.alert("Sie haben keinen Spiel-Typ ausgewählt");
  }
  else if (!isCorrect)
  {
      window.alert("Sie haben mehrere Optionen gewählt");
  }
}

function disableGameControlElement(condition)
{
    for(var a = 0; a < divGameKind.length; a++)
    {
      divGameKind[a].disabled = condition;
    }
    btnStart.disabled = condition;
}

function optionMVM()
{
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(filter.test(txtSpieler2.value) && filter.test(txtSpieler1.value))
  {
    if(txtSpieler1.value !== txtSpieler2.value)
    {
      disableFieldButton(false);
      disableGameControlElement(true);
    }
    else
    {
        window.alert("Geben sie unterschiedliche Emailadressen ein");
    }
  }
  else
  {
      window.alert("Geben sie valide Emailadressen ein");
  }
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
  setDefaultCondition();
  disableFieldButton(true);
  disableGameControlElement(false);
}

window.onload = function(){
  disableFieldButton(true);
};
startButton.addEventListener('click',startButton_Action,false);
stopButton.addEventListener('click',stopButton_Action,false);

for(var i = 0; i < 9; i++)
{
  playButton[i].addEventListener('click',playButton_Click,false);
}
