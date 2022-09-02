const {conexao,pokedex} = require('../config/database')

module.exports = (app)=>{
    app.get('/', async(req,res)=>{

        conexao()

        let pokedexOrdem = await pokedex.find().sort({number:1})

        res.render("index.ejs",({pokedexOrdem}))
    })

    app.get("/next",async(req,res)=>{

        conexao()

        let pokedexOrdem = await pokedex.find().sort({number:1})

        res.redirect("/")

    })

    app.get("/prev",async(req,res)=>{


        conexao()


        res.redirect("/")

    })
}