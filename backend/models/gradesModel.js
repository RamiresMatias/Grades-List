import mongoose from "mongoose";

const gradesSchema = mongoose.Schema({
    name: {
        type: String,
        //Quero que seja obrigatório então definimos o require como true
        require: true,
    },
    subject: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
    value: {
        type: Number,
        require: true,
        validate(value) {
            if (value < 0) throw new Error("Valor negativo para a nota!!!!")
        },
    },
    lastModified: {
        type: Date,
        default: Date.now,
    }
});

const gradesModel = mongoose.model("grades", gradesSchema);

export {
    gradesModel
};