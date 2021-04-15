//Array com o padrão randomizado guardado do jogo
let gamePattern = []; 

//Array com as 4 cores
const buttonColours = ["red", "blue", "green", "yellow"];

//Escolhe cor no array buttomColours aleatoriamente usando funcao
//nextSequence() e adiciona na variávem randomChoosenColour
let randomChoosenColour = buttonColours[nextSequence()];

//Adiciona a cor randomizada no array criado com o padrao do jogo
gamePattern.push(randomChoosenColour);

//Jquery seleciona o id com a cor randomizada e adiciona animacao entrada e 
// saida
$("#"+randomChoosenColour).fadeOut(100).fadeIn(100);

let audio = new Audio("sounds/"+randomChoosenColour+".mp3");
audio.play();



// ------------ Functions ---------------
//Função que retorna um número aleatório entre 0 e 3
function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}


