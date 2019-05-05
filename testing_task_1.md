### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.

```js
// Testing task 2 code:

// Carry out dynamic testing on the code below.
// Correct the errors below that you spotted in task 1.

var card = require('./card');

class CardGame{

  checkforAce(card){
    // should be == or ===
    // should also be card.value
    if(card = 1){
      return true;
    }else{
      return false;
    }
  }
  // needs a comma between variables being passed in
  highestCard(card1 card2){
    if(card1.value > card2.value){
      // should say card1 as card isnt a variable here.
      // .name property isnt defined so could just return card1
      return card.name
    }
    else{
      // this else statement is doing nothing with card2, should be return card2
      card2
    }
   }
   // too many } meanning class closes before last function
 }

  // shouldnt have "static.", this is looking to call the function from somewhere that doesnt exist
  static.cardsTotal(cards){
    // this should be "let total;" (not const as it needs to be changed in the for loop)
    // total needs to be set to 0 to begin with
    return total;
    for(let card of cards){
      total += card.value;
      // return should be outside the loop
      return "You have a total of " + total;
    }
  }
}

// need to export class to use elsewhere

```
