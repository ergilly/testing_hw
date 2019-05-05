const CardGame = require('./testing_task_2.js');
var Card = require('./card');

describe('cards', () => {

  let card1;
  let card2;
  let cards = [];

  beforeEach(() => {

  })

  test('test if a card is an ace', () => {
    card1 = new Card('hearts', 1)
    const game = new CardGame();
    expect(game.checkforAce(card1)).toBe(true);
  })
  test('test if a card isnt an ace', () => {
    card1 = new Card('hearts', 9)
    const game = new CardGame();
    expect(game.checkforAce(card1)).toBe(false);
  })
  test('test if card1 is higher', () => {
    card1 = new Card('hearts', 6)
    card2 = new Card('hearts', 3)
    const game = new CardGame();
    expect(game.highestCard(card1, card2)).toEqual({suit: 'hearts', value: 6});
  })
  test('test if card2 is higher', () => {
    card1 = new Card('hearts', 3)
    card2 = new Card('hearts', 6)
    const game = new CardGame();
    expect(game.highestCard(card1, card2)).toEqual({suit: 'hearts', value: 6});
  })
  test('check total of cards', () => {
    card1 = new Card('hearts', 3)
    card2 = new Card('hearts', 6)
    cards.push(card1, card2)
    console.log(cards);
    const game = new CardGame();
    expect(game.cardsTotal(cards)).toBe("You have a total of 9")
  })



})
