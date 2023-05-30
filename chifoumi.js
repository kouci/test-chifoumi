const readline = require("readline");

const play = (userMove, computerMove) => {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const options = ["Pierre", "Papier", "Ciseaux"];
    computerMove =
      computerMove || options[Math.floor(Math.random() * options.length)];

    if (userMove) {
      processInput(userMove, computerMove);
    } else {
      rl.question(
        "Veuillez entrer votre mouvement : Pierre, Papier, ou Ciseaux? ",
        function (input) {
          processInput(input, computerMove);
          rl.close();
        }
      );
    }

    function processInput(userMove, computerMove) {
      console.log("Ordinateur a choisi : " + computerMove);

      if (!options.includes(userMove)) {
        reject(new Error());
      }

      if (userMove === computerMove) {
        console.log("Égalité !");
        resolve("Égalité");
      } else if (
        (userMove === "Pierre" && computerMove === "Ciseaux") ||
        (userMove === "Papier" && computerMove === "Pierre") ||
        (userMove === "Ciseaux" && computerMove === "Papier")
      ) {
        console.log("Vous avez gagné !");
        resolve("Victoire");
      } else {
        console.log("Vous avez perdu.");
        resolve("Défaite");
      }
    }
  });
};

module.exports = play;
