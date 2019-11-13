const dogSchema = new mongoose.Schema({
    name:{type: String, required: true, minlength: 2},
    weight: {type: Number, required: true, minlength:1},
    color: {type: String, required: true, minlength: 2}
}, {timestamps:true }
);
const Dog = mongoose.model('Dog', dogSchema);
