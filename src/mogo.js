const  mongoose = require("mongoose");mongoose.connect("mongodb+srv://zadkhan51:azamkhan@cluster0.v6q686x.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("connected")
}).catch((err) => {
     console.log(err);
 })
 
 const dataSchema = new mongoose.Schema({
     name: {
         type: String,
         required: true
     },
    last: {
        type: Number,
        required: true
    },
    buy: {
        type: Number,
        required: true
    },
    sell: {
        type: Number,
        required: true
    },
    volume: {
        type: Number,
        required: true
    },
    base_unit: {
        type: String,
        required: true
    }
});
const Data = mongoose.model('data',dataSchema);


module.exports=Data