const mongoose = require('mongoose')
const {v1:uui} = require('uuid')
const crypt = require('crypto')
const userSchema =  mongoose.Schema({
    name:{
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },
    email:{
        type: String,
        trim: true,
        maxlength: 50,
        required: true,
        unique: true     
    },
    salt:{
        type: String
    },
    hashed_password:{
        type: String,
       required: true
    },
    about:{
        type: String,
        trim: true
    },
    role:{
        type: Number,
        default: 0
    }, 
    historique: {
        type: Array,
        default: []
    }
}, {timestamps: true})

userSchema.virtual('password').set(
    function(pass){
        this._password = pass
        this.salt = uui()
        this.hashed_password = this.crypto(pass)

    }
).get(
    function(){
        return this._password
    }
)

userSchema.methods = {

    authenticatedUser: function(password){
         //return false
        return this.crypto(password) === this.hashed_password 
            
        
    },

    crypto: function(password){
       
        if(!password) return '';
        try {
            return crypt.createHmac('sha256', this.salt)
            .update(password)
            .digest('hex');
        } catch (error) {
            return error;
        }
    }
}

module.exports = mongoose.model('User',userSchema)