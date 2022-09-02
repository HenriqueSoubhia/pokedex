const { conexao, pokedex } = require("../config/database")

module.exports = (app) => {
    app.get('/cadastro', (req, res) => {
        res.render("cadastro.ejs")
    })

    app.post("/cadastro", async (req, res) => {
        const dados = req.body

        conexao()

        const pokemon = await new pokedex({
            number: dados.number,
            name: dados.name,
            image: dados.image
        }).save()

        res.redirect('/cadastro')
    })
}