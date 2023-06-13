const { object } = require('joi')
const mongoose = require('mongoose')
const moment = require('moment');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        max: 45
    },
    password: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    modified_date: {
        type: Date,
        dafault_date: null
    }
}, {
    versionKey: false
})

userSchema.method('toJSON', function() {
    const {
        _id,
        ...object
    } = this.toObject()
    object.id = _id
    object.created_date = moment(object.created_date).format('DD-MM-YYYY HH:mm:ss')
    if (object.modified_date != null) {
        object.modified_date = moment(object.modified_date).format('DD-MM-YYYY HH:mm:ss')
    }
    return object
})

module.exprorts = mongoose.model('User', userSchema, 'user')