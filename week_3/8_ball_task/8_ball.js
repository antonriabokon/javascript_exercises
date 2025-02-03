const magic8Ball = () => {
    
    question = String(prompt("Yes or No question?"));
    console.log(question);
    randomNumber = Math.floor(Math.random() * (8 - 1)
     + 1);
    
     switch(randomNumber) {
        case 1: alert("Yes, definitely!");
            break;
        case 2: alert("It is certain.");
            break;
        case 3: alert("Reply hazy, try again.");
            break;
        case 4: alert("Ask again later.");
            break;
        case 5: alert("Better not tell you now.");
            break;
        case 6: alert("My sources say no.");
            break;
        case 7: alert("Outlook not so good.");
            break;
        case 8: alert("Signs point to yes");
            break;
    }
};
magic8Ball();