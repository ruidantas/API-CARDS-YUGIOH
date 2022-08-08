class card {
    constructor(obj){
        this.id = obj.id,
        this.category = obj.category,
        this.atributte = obj.atributte,
        this.effect = obj.effect,
        this.image = obj.image,
        this.atk = obj.atk,
        this.def = obj.def
    }
}

module.exports = card

// const teste = new card(
//     {
//         id: '1',
//         category: 'xyz',
//         atributte: 'dark',
//         effect: 'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
//         image: 'nada',
//         atk: '1',
//         def: '2',
//       }
// )
    
// console.log(teste)
