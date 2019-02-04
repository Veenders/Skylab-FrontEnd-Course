import "./css/style.scss";
import rock from "./img/rock.jpg";
import scissors from "./img/scissors.jpg";
import paper from "./img/paper.jpg";
import tie from "./img/tie.jpg";

var hands = {
  hand1: "",
  hand2: ""
}

var rockPaperScissors = function(hand1, hand2){
  var result = hand1+" vs "+hand2+" => ";
  var winnerElement = "";
  if(hand1=="rock" && hand2=="scissors" || hand2=="rock" && hand1=="scissors"){
    result += "rock wins!";
    winnerElement = "rock";
  }else if(hand1=="paper" && hand2=="scissors" || hand2=="paper" && hand1=="scissors"){
    result += "scissors wins!"
    winnerElement = "scissors";
  }else if(hand1=="rock" && hand2=="paper" || hand2=="rock" && hand1=="paper"){
    result += "paper wins!"
    winnerElement = "paper";
  }else if(hand1==hand2 && (hand1=="paper" || hand1=="rock" || hand1=="scissors")){
    result += "tie!";
    winnerElement = "tie";
  }else{
    throw new Error("Los valores introducidos han de ser rock, paper o scissors")
  }
  return {
    winnerElement : winnerElement,
    winner: winnerElement===hand1?"hand1":(winnerElement===hand2?'hand2':'tie'),
    msg:result
  };
}

function returnFinalImage(image){
  var imagetag = '<img class="finishimg" src="';
  switch(image){
    case 'rock':
      imagetag += rock;
      break
    case 'scissors':
      imagetag += scissors;
      break
    case 'paper':
      imagetag += paper;
      break
    case 'tie':
      imagetag += tie;
      break
  }
  imagetag += '"><br />';
  return imagetag;
}
function storageResults(result){
  switch(result.winner){
    case "hand1":
      localStorage.hand1 = typeof localStorage.hand1==="undefined" || isNaN(localStorage.hand1)? 1 : parseInt(localStorage.hand1)+1;
      break;
    case "hand2":
      localStorage.hand2 = typeof localStorage.hand2==="undefined" || isNaN(localStorage.hand2)? 1 : parseInt(localStorage.hand2)+1;
      break;
    case "tie":
      localStorage.tiehand = typeof localStorage.tiehand==="undefined" || isNaN(localStorage.tiehand)? 1 : parseInt(localStorage.tiehand)+1;
  }
  switch(result.winnerElement){
    case "paper":
    localStorage.paper = typeof localStorage.paper==="undefined" || isNaN(localStorage.paper)? 1 : parseInt(localStorage.paper)+1;
      break;
    case "rock":
      localStorage.rock = typeof localStorage.rock==="undefined" || isNaN(localStorage.rock)? 1 : parseInt(localStorage.rock)+1;
      break;
    case "scissors":
      localStorage.scissors = typeof localStorage.scissors==="undefined" || isNaN(localStorage.scissors)? 1 : parseInt(localStorage.scissors)+1;
      break;
    case "tie":
      localStorage.tieelement = typeof localStorage.tieelement==="undefined" || isNaN(localStorage.tieelement)? 1 : parseInt(localStorage.tieelement)+1;
      break;
  }
}

function checkPlayerOptions(){
  if(hands.hand1 !== "" && hands.hand2 !== ""){
    $('button').unbind("click");
    var result = rockPaperScissors(hands.hand1,hands.hand2);
    $('#resultMessage').html(result.msg);
    var button = '<button id="replay">Play Again</button>'
    $('#resultMessage').append(button);
    var image = returnFinalImage(result.winnerElement);
    $('#resultMessage').prepend(image);
    storageResults(result);
    $('#replay').click(function(){
      initBars();
    })
  }
}

function randomOption(){
  var Options=['rock','paper','scissors'];
  return Options[Math.floor(Math.random()*Options.length)];
}

function setValue(hand,value){
  hands[hand] = value;
}

function setButtonsListeners(human){
  $('#hand1 button').click(function(){
    $('#hand1 button').removeClass('selected');
    $(this).addClass('selected');
    setValue('hand1',$(this).data('value'))
    checkPlayerOptions()
  });
  if(human){
    $('#hand2').removeClass('disabled');
    $('#hand2 button').click(function(){
      $('#hand2 button').removeClass('selected');
      $(this).addClass('selected');
      setValue('hand2',$(this).data('value'));
      checkPlayerOptions()
    })
  }else{
    $('#hand2').addClass('disabled');
    setValue('hand2',randomOption());
    checkPlayerOptions()
  }
}

function humanValue(){
  $('#human').change(function(){
    var human = $('#human:checked').val()?true:false;
    $('button').unbind("click");
    hands.hand2 = "";
    setButtonsListeners(human);
  })
}

function initGame(){
  var human = $('#human:checked').val()?true:false;
  setButtonsListeners(human);
  humanValue();
  $('#modalOpen').click(function(){
    openModal();
  })
}

function initBars(){
  hands.hand1 = "";
  hands.hand2 = "";
  $('button').removeClass('selected');
  $('#replay').unbind('click');
  $('#resultMessage').html("");
  var human = $('#human:checked').val()?true:false;
  setButtonsListeners(human);
}

function refreshResults(){
  localStorage.hand1 = 0;
  localStorage.hand2 = 0;
  localStorage.tiehand = 0;
  localStorage.paper = 0;
  localStorage.rock = 0;
  localStorage.scissors = 0;
  localStorage.tieelement = 0;
}

function viewResults(){
  $('#hand1result').html(localStorage.hand1);
  $('#hand2result').html(localStorage.hand2);
  $('#tiehandresult').html(localStorage.tiehand);
  $('#rockresult').html(localStorage.rock);
  $('#paperresult').html(localStorage.paper);
  $('#scissorsresult').html(localStorage.scissors);
  $('#tieelementresult').html(localStorage.tieelement);
}

function closeModal(){
  $('#modalClose, .modalBackground, #resetResults').unbind('click');
  $('.modalBackground').hide();
}

function openModal(){
  viewResults()
  $('.modalBackground').attr( "style", "display: flex;" );
  $('#modalClose, .modalBackground').click(function(){
    closeModal();
  })
  $('#resetResults').click(function(){
    refreshResults();
  })
}

initGame();

exports.rockPaperScissors = rockPaperScissors;



