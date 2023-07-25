const mongoose = require('mongoose');

// this is localhost mongo db
mongoose.connect("mongodb+srv://garima:garima@cluster0.n9j2pbn.mongodb.net/?retryWrites=true&w=majority")
.then( ()=> {
    console.log("mongo connected");
})
.catch( (err)=> {
    console.log(err,"error in connecting the mongoDB url");
})

// this part is working, cloud db
// let DB = require('./methods/utils);
// mongoose.connect(DB)
// .then( ()=>{
//     console.log("connection done")

// }).catch((err) => console.log("!connection",err))

module.exports = mongoose;