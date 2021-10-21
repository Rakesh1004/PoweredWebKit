const express = require('express');
const router = express.Router();
const bloodReceiver = require('../models/request');
/*Reciever Dashboard requires Axios to send uid to filter 
    and show only requests made by this specific user.
*/
router.get('/userrequests/:uid',async (req,res)=>{
    await bloodReceiver.find({uid: req.params.uid})



    .then((result)=>{
        result.forEach(async (data)=>{
            console.log(data.status)
            /*Those requests that have boolean true will be deleted 
                might put out a window/popup to display then delete them here as a notification 
            */
            if(data.status){
                await bloodReceiver.findByIdAndRemove({_id: data. id})
            }
        })
        console.log(JSON.stringify(result))
        res.json(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})


//GET Request Form for Reciever to fill for a request
// router.get('/bloodrequest',(req,res)=>{
//     res.render('form')
// })

//POST Request to fill in details for blood request (Requires Axios to register requests of uid and phno)


router.post('/bloodrequest',(req,res)=>{
    const newRequest = new bloodReceiver(req.body)
    console.log(req.body)
    newRequest.save()
    .then((result)=>{
        res.json(result)
        console.log(JSON.stringify(result))
        //console.log('Request Registered')
    })
    .catch((err)=>{
        console.log(err)
    })

})





//Get details of specific blood request
router.get('/bloodrequest/:id',(req,res)=>{
    const id = req.params.id
    bloodReceiver.findById(id)
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




//Edit Request Form Route
// router.get('/bloodrequest/edit/:id',async (req,res)=>{
//     const report = await bloodReceiver.findOne({_id: req.params.id})
//     if(!report){
//         res.status(404).json({"error":"404"})
//     } else {
//         res.json(report)
//         console.log(JSON.stringify(report))
//         res.render('form')
//     }
// })




//Update Request Form submitted by the receiver
router.put('/bloodrequest/edit/:id',async(req,res)=>{
    let report = await bloodReceiver.findById(req.params.id)

    
    if(!report){
        res.status(404).json({"error":"404"})
    } else {
        try{
            report = await bloodReceiver.findOneAndUpdate({_id: req.params.id},req.body,{
                new: true,
                runValidators: true
            })
            res.json(report)
            console.log(JSON.stringify(report))
            // res.redirect('/dashboard')
        } catch (err) {
            console.log(err)
        }
    }  
})



//Delete request Form if receiver doesnt want it right now
router.get('/bloodrequest/delete/:id',async(req,res)=>{
    let report = await bloodReceiver.findById(req.params.id)
    console.log(report)
    if(!report){
        console.log("Not found")
        res.status(404).json({"error":"404"})
    } else {
        console.log("Going to Delete")
        report = await bloodReceiver.findByIdAndDelete({_id: req.params.id})
        res.status(200).json({"success":"200"})
        // res.redirect('/dashboard')
    }
})
module.exports = router;

//Pending Requests Board
/*
router.get('/pendingbloodrequests',async (req,res)=>{
    await bloodReciever.find()
    .then((result)=>{
        console.log(result)

        //res.render('pending',{reqs:result})
    })
    .catch((err)=>{
        console.log(err)
    })
})
*/