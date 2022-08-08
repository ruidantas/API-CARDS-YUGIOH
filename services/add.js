function addCards(a) {
  const allCards = require('../mocks/yugiohcards');
  const newCards = require('../controllers/cardscontrollers');
  allCards.push(new newCards(a));

  return allCards;
}

module.exports = addCards;
