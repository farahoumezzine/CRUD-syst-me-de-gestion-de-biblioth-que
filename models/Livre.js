const mongoose = require ("mongoose");

const livreSchema = new mongoose.Schema({
    titre:{
        type: String,
        required: [true, "Title is required" ],
        },
        auteur:{
            type:String,
            required: [true, "Name is required" ],
            minLength: 3,
            maxLength: 20,
            trim: true,
            validate :{
                validator: function (v) {
                    const nameRegex= /^[A-Za-z]+$/;
                    return nameRegex.test(v);
            },
            message : "Name must contain only alphabetic charact"
            
        }
    },
    annee: Number,
    genre: String,
    nbpages: Number,
});
module.exports=mongoose.model("Livre",livreSchema);