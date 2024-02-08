// Code your solutions in this file
const thankYou = ["Guadalupe", "Ollie", "Aki"];

function writeCards(writeCards){
    const messages= [];
    for (let i = 0; i < writeCards.length; i++) {
        console.log(`Thank you, ${thankYou[i]}, for the wonderful surprise gift!`);
     messages.push(`Thank you, ${thankYou[i]}, for the wonderful surprise gift!`);

    }
    
    return messages;
}

writeCards(thankYou);



function countDown(numberProvided = 10) {
    while (numberProvided >= 0) {
      console.log(numberProvided);
      numberProvided = numberProvided -1;
    }
  }
  
  countDown(10);