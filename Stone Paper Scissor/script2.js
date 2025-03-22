// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select elements
  const myMovesEl = document.querySelectorAll(".my-moves");
  const scoreEl = document.querySelector(".score");
  const resultEl = document.querySelector(".result");
  const winnerBoxEl = document.querySelector(".winner-box");
  const playAgainBtn = document.querySelector(".play-again");
  const userMoveImg = document.querySelector(".user-move-img img");
  const compMoveImg = document.querySelector(".comp-move-img img");

  // Initialize scores
  let scores = { user: 0, computer: 0 };

  // Define possible moves and winning combinations
  const moves = ["stone", "paper", "scissor"];
  const winningCombinations = {
    stone: "scissor",
    paper: "stone",
    scissor: "paper", // Corrected spelling
  };

  // Function to generate a random computer move
  const computerMove = () => moves[Math.floor(Math.random() * 3)];

  // Function to update move images
  const showImages = (myMove, compMove) => {
    userMoveImg.src = `./images/${myMove}.png`;
    compMoveImg.src = `./images/${compMove}.png`;
  };

  // Function to check the result of a game
  const checkResult = (myMove, compMove) => {
    if (myMove === compMove) {
      resultEl.textContent = "It's a tie!";
    } else if (winningCombinations[myMove] === compMove) {
      resultEl.textContent = `You win! ${myMove} beats ${compMove}.`;
      scores.user++;
    } else {
      resultEl.textContent = `Computer wins! ${compMove} beats ${myMove}.`;
      scores.computer++;
    }

    // Update scores
    scoreEl.textContent = `Your score: ${scores.user} | Computer score: ${scores.computer}`;
    checkWinner();
  };

  // Function to check if there's a winner
  const checkWinner = () => {
    if (scores.user === 10) {
      winnerBoxEl.innerHTML = `
        <h2>Congratulations! You won 10 times and are the winner of this match.</h2>
        <button class="play-again">Play Again</button>
      `;
      winnerBoxEl.style.display = "block";
      resetGame();
      playAgainBtn = document.querySelector(".play-again"); // Update the playAgainBtn variable
      playAgainBtn.addEventListener("click", () => {
        winnerBoxEl.style.display = "none";
        resetGame();
      });
    } else if (scores.computer === 10) {
      winnerBoxEl.innerHTML = `
        <h2>Sorry, you lost the game. Better luck next time!</h2>
        <button class="play-again">Play Again</button>
      `;
      winnerBoxEl.style.display = "block";
      resetGame();
      playAgainBtn = document.querySelector(".play-again"); // Update the playAgainBtn variable
      playAgainBtn.addEventListener("click", () => {
        winnerBoxEl.style.display = "none";
        resetGame();
      });
    }
  };

  // Function to reset the game
  const resetGame = () => {
    scores = { user: 0, computer: 0 };
    scoreEl.textContent = `Your score: ${scores.user} | Computer score: ${scores.computer}`;
  };

  // Event listener for play again button
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("play-again")) {
      winnerBoxEl.style.display = "none";
      resetGame();
    }
  });

  // Event listeners for user moves
  myMovesEl.forEach((move) => {
    move.addEventListener("click", (e) => {
      const myMove = e.target.id;
      if (moves.includes(myMove)) {
        const compMove = computerMove();
        checkResult(myMove, compMove);
        showImages(myMove, compMove);
      } else {
        console.error("Invalid move");
      }
    });
  });
});
