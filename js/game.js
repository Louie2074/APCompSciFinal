var game = function () {
  var pScore = 0;
  var cScore = 0;

  var playMatch = function () {
    var options = document.querySelectorAll(".options button");
    var playerHand = document.querySelector(".player-start");
    var computerHand = document.querySelector(".computer-start");
    var hands = document.querySelectorAll(".hands img");

    var computerOptions = ["Rock", "Paper", "Scissors"];

    options.forEach(function (option) {
      option.addEventListener("click", function () {
        var cnum = Math.floor(Math.random() * 3);
        var cchoice = computerOptions[cnum];

        compareHands(this.textContent, cchoice);

        playerHand.src = `./pictures/${this.textContent}.png`;
        computerHand.src = `./pictures/${cchoice}.png`;
      });
    });
  };

  var updateScore = function () {
    var playerScore = document.querySelector(".player-score p");
    var computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  var compareHands = function (pchoice, cchoice) {
    var winner = document.querySelector(".winner");

    if (pchoice === cchoice) {
      winner.textContent = "Tie";
      return;
    }

    if (pchoice === "Rock") {
      if (cchoice === "Scissors") {
        winner.textContent = "You Won";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "The Computer Won";
        cScore++;
        updateScore();
        return;
      }
    }

    if (pchoice === "Paper") {
      if (cchoice === "Scissors") {
        winner.textContent = "The Computer Won";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You Won";
        pScore++;
        updateScore();
        return;
      }
    }

    if (pchoice === "Scissors") {
      if (cchoice === "Rock") {
        winner.textContent = "The Computer Won";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You Won";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  playMatch();
};

game();
