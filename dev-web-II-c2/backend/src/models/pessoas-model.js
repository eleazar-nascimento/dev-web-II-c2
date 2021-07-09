const mongoose = require('mongoose');

const pessoaSchema = mongoose.Schema({
    nome: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    cpf: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    data_nascimento: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    telefone: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    grupo_prioritario: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    endereco: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    data_alteração: {
        type: mongoose.Schema.Types.Date,
        default: null
    }
});

let Pessoa = module.exports = mongoose.model('pessoa', pessoaSchema);

module.exports.get = function (callback, limit) {
    Pessoa.find(callback).limit(limit)
}