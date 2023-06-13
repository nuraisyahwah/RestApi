const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    modified_date: {
        type: Date,
        default: null
    }
}, {
    versionKey: false
})
module.exports = mongoose.model('Post', postSchema, 'post')