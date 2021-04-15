//Array com o padrão randomizado guardado do jogo
let gamePattern = [];

//
let userClickedPattern = [];

//Array com as 4 cores
const buttonColours = ["red", "blue", "green", "yellow"];

let jogoIniciado = false;

let level = 0;

$(document).keypress(function() {
    if (!jogoIniciado){
        $("#level-title").text("Level "+level)
        nextSequence();
        jogoIniciado = true;
    }
  });


//criada funcao que capta se algum botão foi clicado e adiciona numa var qual
//elemento que foi cliado por meio da ID
$(".btn").click(function () {
    // adiciona na variavel o item que foi clicado
    let userChoosenColor = $(this).attr("id")
    // adiciona a variavel criada no array
    userClickedPattern.push(userChoosenColor);
    playSound(userChoosenColor)
    animatePress(userChoosenColor)

    //
    checkAnswer(userClickedPattern.length-1)
})



function nextSequence() {
    level++;
    $("#level-title").text("Level "+level)
    //retorna um número aleatório entre 0 e 3
    let randomNumber = Math.floor(Math.random() * 4);
    //Escolhe cor no array buttomColours aleatoriamente e adiciona na variável
    let randomChoosenColour = buttonColours[randomNumber];
    //Adiciona a cor randomizada no array criado com o padrao do jogo
    gamePattern.push(randomChoosenColour);
    //Jquery seleciona o id com a cor randomizada e adiciona animacao entrada e 
    // saida
    $("#" + randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColour);
}


// funcao para tocar o respectivo som
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    let color = $("#" + currentColor);
    color.addClass("pressed");
    //currentColour.addClass("pressed");
    setTimeout(function () {
        color.removeClass("pressed");
    }, 100);
}


//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      console.log("wrong");

    }

}