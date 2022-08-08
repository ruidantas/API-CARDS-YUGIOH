function update(idCards, obj) {
  const allCards = require('../mocks/yugiohcards');
  const cards = require('../controllers/cardscontrollers');
  let updateId;
  for (let n of allCards) {
    if (n.id == idCards) {
      updateId = n;
      allCards.splice(allCards.indexOf(n), 1, new cards(obj));

      return allCards;
    }
  }
  return 'ERROR. UPDATE ITS NOT POSSIBLE ';
}

module.exports = update;
