//DICE ROLLER PROGRAM

function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImage = document.getElementById("diceImage");
  const values = [];
  const Images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    Images.push(`<img src="dice_image/${value}.png" alt="Dice ${value}">`);
  }
  diceResult.textContent = `dice:${values.join(", ")}`;
  diceImage.innerHTML = Images.join(" ");
}
