const mongoose= require('mongoose');

const url= "mongodb://localhost:27017/defenred";
mongoose.connect(url)
.then(()=>{
    console.log("CONECTADOO!!!");
})
.catch((error)=>{
    console.log("Error al conectar"+ error);
})

module.exports = mongoose;
