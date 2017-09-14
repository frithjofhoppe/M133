var playButton = document.getElementsByClassName('playbutton');
var startButton = document.getElementById('btnStart');
var stopButton = document.getElementById('btnStop');
var chkBoxes = document.getElementsByClassName('chkBox');
var txtEmail1 = document.getElementById('txtSpieler1');
var txtEmail2 = document.getElementById('txtSpieler2');
var txtWinner = document.getElementById('result_winnerMailAddress');

var divGameKind = document.getElementById('controlGameKind').getElementsByTagName('*');

var isPlayerOneOnTurn = true;
var isPlayRunning = false;
var playMode = "";

var playButtonValues = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"]
];



function playButton_Click(e) {
  if (this.className != "playbutton player1selected" && this.className != "playbutton player2selected") {
    setInformation("default","");
    name = this.getAttribute("name");
    if (isPlayerOneOnTurn) {
      this.className += " player1selected";
      setPlayButtonValues(name.charAt(0), name.charAt(1), "pl1");
    } else if (!isPlayerOneOnTurn) {
      this.className += " player2selected";
      setPlayButtonValues(name.charAt(0), name.charAt(1), "pl2");
    }
    checkPlayEnd();
    changeTurn();
  } else {
    //window.alert("Der button wurde bereits gewählt");
    setInformation("Der button wurde bereits gewählt","info");
  }
}

function setDefaultCondition() {
  clearPlayButtonColors();
  clearPlayButtonValues();
  isPlayerOneOnTurn = true;

}

function disableFieldButton(condition) {
  for (var a = 0; a < playButton.length; a++) {
    playButton[a].disabled = condition;
  }
}

function enableElements() {

}

function clearPlayButtonValues() {
  for (var a = 0; a < 3; a++) {
    for (var b = 0; b < 3; b++) {
      playButtonValues[a][b] = "-";
    }
  }
}

function clearPlayButtonColors() {
  for (var a = 0; a < playButton.length; a++) {
    playButton[a].className = "playbutton";
  }
}

function setPlayButtonValues(number1, number2, player) {
  playButtonValues[number1][number2] = player;
}

function checkPlayEnd() {
  var result = isGameRoundFinished();
  var areFilled = arePlayButtonValuesFill();
  if ((arePlayButtonValuesFill() && result[0] == true) || result[0]) {
    setResult(result[1],false);
    window.setTimeout(setDefaultCondition, 500);
    disableFieldButton(true);
    disableGameControlElement(false);
  } else if(arePlayButtonValuesFill()){
    setResult("Spieleende: Unentschieden",true);
    window.setTimeout(setDefaultCondition, 500);
    disableFieldButton(true);
    disableGameControlElement(false);
  }
}

function isGameRoundFinished() {
  var pl1 = true;
  var pl2 = true;
  var back = [false, "nothing"];
  var nmb1 = 0;
  var nmb2 = 0;
  var referenceA = "";
  var referenceB = "";
  var temp = false;
  var counter = 0;

  for (var a = 0; a < 4; a++) {
    if (a != 3) {
      nmb1 = a;
      nmb2 = 0;
      referenceA = playButtonValues[nmb1][nmb2];
      referenceB = playButtonValues[nmb2][nmb1];
      for (var b = 0; b < 3; b++) {
        if (playButtonValues[nmb1][nmb2] != referenceA || referenceA == "-") {
          pl1 = false;
        }
        if (playButtonValues[nmb2][nmb1] != referenceB || referenceB == "-") {
          pl2 = false;
        }
        nmb2++;
      }
      if (pl1) {
        back[0] = true;
        back[1] = referenceA;
      }
      if (pl2) {
        back[0] = true;
        back[1] = referenceB;
      }
      pl1 = true;
      pl2 = true;
    } else {
      referenceA = playButtonValues[1][1];
      for (var c = 0; c < 3; c++) {
        if (playButtonValues[c][c] != referenceA || referenceA == "-") {
          pl1 = false;
        }
      }
      if (playButtonValues[2][0] != referenceA || referenceA == "-") {
        pl2 = false;
      }
      if (playButtonValues[1][1] != referenceA || referenceA == "-") {
        pl2 = false;
      }
      if (playButtonValues[0][2] != referenceA || referenceA == "-") {
        pl2 = false;
      }

      if (pl1) {
        back[0] = true;
        back[1] = referenceA;
      }
      if (pl2) {
        back[0] = true;
        back[1] = referenceA;
      }
    }
  }
//  window.alert(back[0] + "|back|"+back[1]);
  return back;
}

function setInformation(text,type)
{
  if(text == "default")
  {
    txtWinner.style.borderColor ="white";
    txtWinner.innerHTML = "";
  }
  else if(text != "")
  {
    if(type == "normal")
    {
      txtWinner.style.visibility = "visible";
      txtWinner.style.borderColor = "black";
      txtWinner.innerHTML = text;
    }
    else if (type == "info")
    {
      txtWinner.style.visibility = "visible";
      txtWinner.style.borderColor = "gold";
      txtWinner.innerHTML = "ACTHUNG: " + text;
    }
  }
}

function setResult(name,anyone) {
  txtWinner.style.visibility = "visible";
  if(anyone==false)
  {
    if(name=="pl1")
    {
      txtWinner.innerHTML = "Der Spieler: " + txtSpieler1.value + " hat gewonnen";
      txtWinner.style.borderColor = "green";
    }
    else {
      txtWinner.innerHTML = "Der Spieler: " + txtSpieler2.value + " hat gewonnen";
      txtWinner.style.borderColor = "red";
    }
  }
  else
  {
      txtWinner.innerHTML = name;
      txtWinner.style.borderColor = "black";
  }
}

function arePlayButtonValuesFill() {
  var back = true;
  for (var a = 0; a < 3; a++) {
    for (var b = 0; b < 3; b++) {
      if (playButtonValues[a][b] == "-") {
        back = false;
      }
    }
  }
  return back;
}

function changeTurn() {
  if (isPlayerOneOnTurn) {
    isPlayerOneOnTurn = false;
  } else {
    isPlayerOneOnTurn = true;
  }
}

function startButton_Action() {
  txtWinner.innerHTML ="";
  txtWinner.style.visibility="hidden";
  var isSetted = false;
  var isCorrect = false;
  var name = "";
  for (var a = 0; a < chkBoxes.length; a++) {
    if (chkBoxes[a].checked && isSetted == false) {
      isSetted = true;
      isCorrect = true;
      name = chkBoxes[a].getAttribute("id");
    } else if (chkBoxes[a].checked && isSetted) {
      isCorrect = false;
      break;
    }
  }

  if (isSetted && isCorrect) {
    checkOption(name);
  } else if (!isSetted) {
    window.alert("Sie haben keinen Spiel-Typ ausgewählt");
  } else if (!isCorrect) {
    window.alert("Sie haben mehrere Optionen gewählt");
  }
}

function disableGameControlElement(condition) {
  for (var a = 0; a < divGameKind.length; a++) {
    divGameKind[a].disabled = condition;
  }
  btnStart.disabled = condition;
}

function optionMVM() {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(txtSpieler1.validity.valid && txtSpieler2.validity.valid)
  {
    if(txtSpieler1.value != txtSpieler2.value)
    {
      disableFieldButton(false);
      disableGameControlElement(true);
    }
    else
    {
        window.alert("Die Mailadressen sind identisch");
    }
  }
  else
  {
      window.alert("Geben sie valide Mailadresse ein");
  }
/*if (filter.test(txtSpieler2.value) && filter.test(txtSpieler1.value)) {
    if (txtSpieler1.value !== txtSpieler2.value) {
      disableFieldButton(false);
      disableGameControlElement(true);
    } else {
      window.alert("Geben sie unterschiedliche Emailadressen ein");
    }
  } else {
    window.alert("Geben sie valide Emailadressen ein");
  }*/
}

function checkOption(option) {
  switch (option) {
    case "mvm":
      optionMVM();
      break;
    case "mvp":
      break;
    case "pvp":
      break;
    default:
      break;
  }
}

function stopButton_Action() {
  setDefaultCondition();
  disableFieldButton(true);
  disableGameControlElement(false);
  setInformation("default");
}

window.onload = function() {
  disableFieldButton(true);
  txtWinner.style.visibility="hidden";
};
startButton.addEventListener('click', startButton_Action, false);
stopButton.addEventListener('click', stopButton_Action, false);

for (var i = 0; i < 9; i++) {
  playButton[i].addEventListener('click', playButton_Click, false);
}
