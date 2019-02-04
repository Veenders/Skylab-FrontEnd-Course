import './css/styles.scss';

//Variables d'inici de partida
var guessing = [];
var paraules = ['Javascript','React','Expresion Regular','Angular','Variable','Loop' ];
var paraula;
var name;
var vidas = 6;
var usedLetters=[];
var keyboard = 'qwertyuiopasdfghjklñzxcvbnm';

function restartGame(){
    $('#finishGame').hide();
    $('#modalBackground').hide();
    usedLetters = [];
    guessing = [];
    $('#input-guess').val("");
    $('#input-solution').val("");
    $('#usedLetters').html(usedLetters.join(' '));
    $('#img').removeClass().addClass("lifes6");
    $('#errorGuess').html(' ');
    startGame();
}

function loseGame(){
    $('#imgFinish').removeClass().addClass("lifes0");
    $('#mainFinish').html(name+"!!! Has perdido!!!");
    $('#messageFinish').html("Buen intento. ¿Que quieres hacer?");
    $('#finishGame').show().css('display','flex');
    $('#modalBackground').show().css('display','flex');
    localStorage.setItem('wrongWords',(isNaN(localStorage.getItem('wrongWords'))||localStorage.getItem('wrongWords')===null)?1:parseInt(localStorage.getItem('wrongWords'))+1);
}

function winGame(){
    $('#imgFinish').removeClass().addClass("lifes"+vidas);
    $('#mainFinish').html(name+"!!! Has ganado!!!");
    $('#messageFinish').html("Muchas Felicidades!!. ¿Que quieres hacer?");
    $('#finishGame').show().css('display','flex');
    $('#modalBackground').show().css('display','flex');
    localStorage.setItem('correctWords',(isNaN(localStorage.getItem('correctWords'))||localStorage.getItem('correctWords')===null)?1:parseInt(localStorage.getItem('correctWords'))+1);
}


function guessLetter(letter,paraula){
    $('#errorGuess').html(' ');
    var paraula = paraula.toUpperCase();
    var letter = letter.toUpperCase()
    $('#key'+letter.toLowerCase()).unbind('click');
    paraula.includes(letter.toUpperCase())? $('#key'+letter.toLowerCase()).addClass('success') : $('#key'+letter.toLowerCase()).addClass('error');
    
    if(usedLetters.includes(letter)){
        $('#errorGuess').html("Ya ha seleccionado esta letra previamente.");
        $('#input-guess').val("");
        return "finished";
    }
    usedLetters.push(letter);
    if(paraula.includes(letter)){
        for(var i=0;i<paraula.length;i++){
            if(paraula[i]==letter){
                guessing[i]= letter;
            }
        }
        $('#word-to-guess').html(guessing.join(' ')); 
    }else{
        vidas--;
        $('#expLifes').html(vidas);
        $('#img').removeClass().addClass("lifes"+vidas);
    }
    $('#input-guess').val("");
    $('#usedLetters').html(usedLetters.join(' '));
    !guessing.includes("_")?winGame():"";
    vidas==0?loseGame():"";
}

function selectWord(){
    var number = Math.round(Math.random()*paraules.length)
    return paraules[number];
}
function drawKeyboard(){
    $('.letterbutton').unbind('click');
    $('#keyboard').html('');
    var letters = keyboard.split('');
    letters.forEach(function(el){
        $('#keyboard').append('<button id="key'+el+'" class="letterbutton" data-value="'+el+'">'+el.toUpperCase()+'</button>');
    })
    $('#keyboard').append('<div class="blankelement"></div>')
    $('.letterbutton').click(function(e){
        e.preventDefault();
        guessLetter($(this).data('value'),paraula);
        //$(this).unbind('click');
        //paraula.toLowerCase().includes($(this).data('value'))? $(this).addClass('success') : $(this).addClass('error');
    })
}

function startGame(){
    vidas = 6;
    var correctWords = isNaN(localStorage.getItem('correctWords'))||localStorage.getItem('correctWords')===null?0:localStorage.getItem('correctWords');
    var wrongWords = isNaN(localStorage.getItem('wrongWords'))||localStorage.getItem('wrongWords')===null?0:localStorage.getItem('wrongWords');
    $('#correctWords').html(correctWords);
    $('#wrongWords').html(wrongWords);
    $('#expName').html(name);
    $('#expLifes').html(vidas);
    drawKeyboard();
    $('.mark').css("display","flex");
    $('#maingame').show(600).css("display","flex");
    $('#startdata').hide();
    $('#errorName').html(" ");
    do{
        paraula = selectWord();
    }while(typeof paraula === undefined)
    for(var i=0;i<paraula.length;i++){
        /\s/.test(paraula[i])?guessing[i]="<br />":guessing[i]="_"
    }
    $('#word-to-guess').html(guessing.join(' '));
}


//Event Listeners
$('#start').click(function(e){
    e.preventDefault();
    name=$('#name').val();
    if(/[a-zA-Z0-9]{1,}/.test(name)){
        startGame();
    }else{
        $('#errorName').html("El nombre de usuario ha de tener como mínimo un carácter. \n Se admiten mayúsculas, minúsculas y números.");
    }
})

$('#guess-form').bind('submit', function(e){
    e.preventDefault();
    var inputLetter = $('#input-guess').val();
    guessLetter(inputLetter,paraula);
})

$('#restartButton').click(function(e){
    e.preventDefault();
    restartGame();
})

$('#modal').click(function(e){
    e.preventDefault();
    $('#modalSolucionar').show().css('display','flex');
    $('#modalBackground').show().css('display','flex');
})

$('#cancel').click(function(e){
    e.preventDefault();
    $('#modalSolucionar').hide();
    $('#modalBackground').hide();
})

$('#submit-solution').click(function(e){
    e.preventDefault();
    $('#modalSolucionar').hide();
    $('#input-solution').val().toLowerCase() === paraula.toLowerCase()? winGame():loseGame();
})

$('#resetMark').click(function(e){
    e.preventDefault();
    localStorage.setItem('correctWords',0);
    localStorage.setItem('wrongWords',0);
    $('#correctWords').html(localStorage.getItem('correctWords'));
    $('#wrongWords').html(localStorage.getItem('wrongWords'));
})