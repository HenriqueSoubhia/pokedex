const mongoose = require('mongoose')

const conexao = async () => {
    const atlas = await mongoose.connect("mongodb+srv://admin:admin123@fiap-tecnico.dsp0j.mongodb.net/pokedex")
}

const model = mongoose.Schema({
    number:Number,
    name:String,
    image:String
})

const pokedex = mongoose.model("pokemons",model)

module.exports = {conexao,pokedex}