const {conexao,pokedex} = require('../config/database')

module.exports = (app)=>{
    app.get('/', async(req,res)=>{

        conexao()

        let pokedexOrdem = await pokedex.find()

        res.render("index.ejs",({pokedexOrdem}))
    })
}