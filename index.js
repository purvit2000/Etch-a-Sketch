const game = document.querySelector('#game');

const gridGame = (choice) => {
    let gridChoice = choice;
    boxSize = 100 / gridChoice;
    for (let n = 0; n < gridChoice * gridChoice; n++) {
        const gameBox = document.createElement("div");
        gameBox.className = "gameBox";
        // gameBox.innerHTML = '1';
        gameBox.style.width = boxSize + '%';
        gameBox.style.height = boxSize + '%';
        game.appendChild(gameBox);
    }
    const box = document.querySelectorAll('.gameBox');

    box.forEach(function (box) {

        box.addEventListener("mouseover", function (event) {
            // Change the background color to lightgreen
            event.target.style.backgroundColor = "lightgreen";
        })
    });
}
const startGame = () => {

    let choice = parseInt(prompt("how many grids do you want (0 to 100)?"));
    if (!isNaN(choice) && choice >= 0 && choice <= 100) {
        while (game.firstChild) {
            game.removeChild(game.firstChild);
        }
        gridGame(choice);
    } else {
        alert("Invalid input.");
    }


}
gridGame(16);

// const box = document.querySelectorAll('.gameBox');

// box.forEach(function (box) {

//     box.addEventListener("mouseover", function (event) {
//         // Change the background color to lightgreen
//         event.target.style.backgroundColor = "lightgreen";
//     })
// });

// document.getElementsByClassName