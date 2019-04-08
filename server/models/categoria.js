const mongoose = require('mongoose');


let Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, 'La descripcion es necesario']
    },
    usuario: {
        type: String,
        required: [true, 'El usuario es necesario']
    }
});

module.exports = mongoose.model('Categoria', categoriaSchema);