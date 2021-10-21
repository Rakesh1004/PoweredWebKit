const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const router = require('./routes/requestRoutes');
const userrouter = require('./routes/user-route');
const donorrouter = require('./routes/donorRoutes')
const path = require("path")
require('dotenv').config();
// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "Hack-O-Uplift-Frontend", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Hack-O-Uplift-Frontend", "public", "index.html"));
});
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ydfmd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(URI,{useNewUrlParser: true, useUnifiedTopology: true})
 .then((result)=> 
    app.listen((process.env.PORT),function(){
        console.log(`Server started at http://localhost:${process.env.PORT}`)
    })
  )
 .catch((err)=>console.log(err));
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//Method Override
app.use(methodOverride((req,res)=>{
  if(req.body && typeof req.body==='object' && '_method' in req.body){
    let method = req.body._method
    delete req.body._method
    return method
  }
}))

app.use(router);
app.use(userrouter);
app.use(donorrouter);