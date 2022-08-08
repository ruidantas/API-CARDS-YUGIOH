function deleteCards(idCards) {
  const allCards = require('../mocks/yugiohcards');
  let foundId;
  for (let n of allCards) {
    if (n.id == idCards) {
      foundId = n;
      allCards.splice(allCards.indexOf(n), 1);

      return allCards;
    }
  }

  return 'ERROR. NOT FOUND TO DELETE';
}



module.exports = deleteCards;
