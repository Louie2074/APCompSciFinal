var game = true;

while (game) {
  var userChoice = prompt("rock, paper, or scissors?");
  var computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 0) {
    computerChoice = "rock";
  } else if (computerChoice == 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  var compare = function (pchoice, cchoice) {
    if (pchoice === "rock") {
      if (cchoice === "scissors") {
        alert("You Won");
      } else {
        alert("The Computer Won");
      }
    }

    if (pchoice === "paper") {
      if (cchoice === "scissors") {
        alert("The Computer Won");
      } else {
        alert("You Won");
      }
    }

    if (pchoice === "scissors") {
      if (cchoice === "rock") {
        alert("The Computer Won");
      } else {
        alert("You Won");
      }
    }
  };
  compare(userChoice, computerChoice);

  var choice = prompt("Play again? y/n");
  if (choice == "y") {
    game = true;
  }
  if (choice == "n") {
    game = false;
  }
}
