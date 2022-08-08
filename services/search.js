function searchCards(idCards) {
  const allCards = require('../mocks/yugiohcards');
  let searchId;
  for (let n of allCards) {
    if (n.id == idCards) {
      searchId = n;
      return n;
    }
  }

  return 'ERROR. ID NOT FOUND TO SEARCH';
}


module.exports = searchCards;
