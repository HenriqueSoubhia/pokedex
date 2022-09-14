const {conexao,pokedex} = require('../config/database')

let n = 0

module.exports = (app)=>{
    app.get('/', async(req,res)=>{

        conexao()

        let pokedexOrdem = await pokedex.find().sort({number:1})

        res.render("index.ejs",({pokedexOrdem,n}))

    })

    app.get("/next",async(req,res)=>{

        conexao()

        let pokedexOrdem = await pokedex.find().sort({number:1})
        let pokeLenght = pokedexOrdem.length - 1

        if(n == pokeLenght){

        }else{
            n += 1
        }
        

        res.redirect("/")


    })

    app.get("/prev",async(req,res)=>{

        if(n == 0){

        }else{
            n -= 1
        }

        res.redirect("/")


    })
}