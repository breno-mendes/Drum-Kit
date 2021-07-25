let numberOfDrumButtons = document.querySelectorAll(".drum").length


// Checa o botão pressionado e confere com MakeSound se é uma tecla válida
for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let letterPressed = this.textContent;
        console.log(letterPressed);

    })
}

// Confere se a tecla reproduz um som
function makeSound(key) {

    switch (key) {
        case "w":
            tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":

            snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default:
    }
}

// Quando o evento KEYDOWN acontece no site, a function é chamada com o evento
// Dentro da function está as funções que serão chamadas
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
})