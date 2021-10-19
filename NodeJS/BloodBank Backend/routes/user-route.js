const express = require('express');
const userrouter = express.Router()
const User = require('../models/User');

//Form for a user to fill up

userrouter.get('/sawo/:uid',async(req,res)=>{
    //pass the form from the front end
    const checkuser = await User.find({uid: req.params.uid})
    

    if(checkuser.length!==0){
        res.json({check:'true'})
    } else {
        res.json({check:'false'})
    }
})
//POST Request to be filled as a details form of the user after sawo check up (Requires Axios to send uid data in body)
userrouter.post('/postsawo',async(req,res)=>{
    const newRequest = new User(req.body)

    console.log(req.body)

    const checkuser = await User.find({uid: req.body.uid})
    //If not present then saves all the details given in the User.js Schema in DB
    if(checkuser.length===0){
        newRequest.save()
        .then((result)=>{
            //Passes Json data as well as directs to dashboard
            console.log(JSON.stringify(result))
            //res.redirect('/dashboard')
            res.json({check:'true'})
            //console.log('user Registered')
        })
        .catch((err)=>{
            console.log(err)
        })
    } else {
        //If user exists then directly pass the Json data n redirect as well
        const data = JSON.stringify(checkuser)
         res.json({ check: "true" });
        console.log(data);
        res.json({check:'false'})
    }

})
userrouter.get('/user/edit/:id',async (req,res)=>{
    const data = await User.findOne({_id: req.params.id})
    if(!data){
        res.status(404).json({"error":"404"})
    } else {
        res.json(data)
        console.log(JSON.stringify(data))
    }
})
//Update Request Form
userrouter.put('/user/edit/:id',async(req,res)=>{
    let data = await User.findById(req.params.id)
    if(!data){
        res.status(404).json({"error":"404"})
    } else {
        try{
            data = await User.findOneAndUpdate({_id: req.params.id},req.body,{
                new: true,
                runValidators: true
            })
            //res.redirect('/dashboard')
        } catch (err) {
            console.log(err)
        }
    }  
})



//This is unused routes don't bother about these if required then shall b added.

/* //Reciever Dashboard
userrouter.get('/receiver/profiles',async (req,res)=>{
    await User.find()
    .then((result)=>{
        console.log(JSON.stringify(result))
        res.json(result)
    })
    .catch((err)=>{
        console.log(err)
    })
}) */
/* //Get details of specific reciever
userrouter.get('/receiver/:id',(req,res)=>{`
    const id = req.params.id
    User.findById(id)
    .then((result)=>{
            res.json(result)
            console.log(JSON.stringify(result))
            //Details of a specific request
            console.log(result)
        })
        .catch((err)=>{
            console.log(err);
        })
})
//Edit Request Form
 */
module.exports = userrouter;