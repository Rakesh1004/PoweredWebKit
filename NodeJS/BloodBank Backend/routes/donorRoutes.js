const express = require("express");
const router = express.Router();
const bloodDonor = require("../models/donor");
const User = require("../models/User");
const bloodReceiver = require("../models/request");
router.get("/donor/:uid", async (req, res) => {
  await User.find({ uid: req.params.uid })

    .then(
      // async

      async (user) => {
        // await console.log(user[0].address);

        await bloodReceiver
          .find()
          .then((result) => {
            let donorRequests = [];
            result.forEach(async (data) => {
              if (data.address.city == user[0].address.city&&!data.status) {
                console.log(data);
                donorRequests.push(data);
                // res.json(data)
                // console.log(result)
                // res.json(result);
              }
              //   console.log(JSON.stringify(result));
              //   console.log(result);
            });
            res.json(donorRequests);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    )

    .catch((err) => {
      console.log(err);
    });
});

router.get("/donor/:uid/request/:id", async (req, res) => {
  await bloodReceiver.findById(req.params.id).then((result) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'application/json');
    res.json(result); //send all details to frontend where map will be rendered using code inside maps.js

    //   @shubham @shruti use following snippet in html file to fetch maps api and add api key to env
 
  });
});

module.exports = router;
