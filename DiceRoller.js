function rollDice() {
    const diceInput = document.getElementById("diceInput").value;
    const diceValue = document.getElementById("diceValue");
    const diceImages = document.getElementById("diceImages");
    let dice = [];
    let images = [];

    for (let i = 0; i < diceInput; i++) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        dice.push(randomNumber);
        images.push(`<img src="DiceImages/${randomNumber}.png" alt="Dice ${randomNumber}">`);
    }

    diceValue.textContent = `Dices: ${dice.join(" , ")}`;
    diceImages.innerHTML = images.join("");
}
