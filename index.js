// Code your solutions in this file


const names= ["Lisa","Kaitlin","Jan","Birthday"];
const cards =[];


function writeCards(names, event) {
    for (let a = 0; a < names.length; a++) {
        cards.push(`Thank you, ${names[a]}, for the wonderful ${event} gift!`);
    }
return cards;
}


function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}

const hello = "Hello"
//