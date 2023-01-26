let messageEl = document.querySelector("#message-El")
let sumEl = document.querySelector("#sum-El")
let cardsEl = document.querySelector("#cards-El")

let hello = ["🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩", "🂪", "🂫", "🂭", "🂮"]

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""


function getRandomCard()
{
    let randomNumber = Math.floor( (Math.random()*13) + 1);

    if(randomNumber > 10)
    {
        return 10;
    }
    else if(randomNumber === 1)
    {
        return 11;
    }
    else
    {
        return randomNumber;
    }
    
}

function startGame()
{
    isAlive = true;

    let firstCard = hello[getRandomCard()];
    let secondCard = hello[getRandomCard()];

    sum = getRandomCard() + getRandomCard();

    cards = [firstCard, secondCard];

    renderGame();
}

function renderGame()
{
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard()
{
    if(isAlive === true && hasBlackJack === false)
    {
        let card = hello[getRandomCard()];
        sum += getRandomCard();
        cards.push(card);
        renderGame();
    }
    
}
