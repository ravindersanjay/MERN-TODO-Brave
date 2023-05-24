import mongoose from "mongoose";

//To remove prifix S from collection name add by default by mongodb 
mongoose.pluralize(null); 

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})
 

export default mongoose.model('Topics', todoSchema);



 