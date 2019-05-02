//? dif btw res.send and res.json and console.log , when to use which one
const express = require("express");
const businessRoutes = express.Router(); //originally i named as businessRouter, but found that broutes is better

// Require Business model in our routes module
let Business = require("../models/business.model");

// Defined store route
businessRoutes.route("add").post((req, res) => {
  let business = new Business(req.body);
  business
    .save()
    .then(res.status(200).json({ Sucess: "New data successfully saved" }))
    .catch(err =>
      res.status(400).json({ "Unable to save Data to database:": err })
    ); //?whts the dif between json({}) and simply send('....')
});

// Defined get data(index or listing) route
businessRoutes.route("/").get((req, res) => {
  Business.find((err, businesses) => {
    //? means find all data mah
    if (err) {
      // return res.status(400)
      console.log(err);
    } else {
      res.json(businesses);
    }
  });
});

// Defined edit route
businessRoutes.route("/edit/:id").get((req, res) => {
  Business.findById(req.params.id, (err, business) => {
    //? means find data based on a criteria mah
    res.json(business);
  });
});

//  Defined update route //star
businessRoutes.route("/update/:id").post((req, res) => {
  Business.findById(req.params.id, (err, business) => {
    if (!business) {
      res.status(404).send("Data not found");
    } else {
      const { personName, businessName, gstNum } = req.body;

      business.personName = personName; //?any requirment for db items naming mah like person_name
      business.businessName = businessName;
      business.gstNum = gstNum;

      business
        .save()
        .then(business => {
          res.send("Update completed as:", business); //?dif btw this n res.json('Update complete');
        })
        .catch(err =>
          res.status(400).send("Unable to update data to database", err)
        );
    }
  });
});

// Defined delete | remove | destroy route
businessRoutes.route("/delete/:id").get((req, res) => {
  //star - here use get not post
  Business.findByIdAndRemove({ _id: req.params.id }, (err, business) => {
    //?actually do we need return here inside the if, to stop the func incase err
    if (err) res.json(err);
    //star the ifelse style
    else res.send("Successfully removed:", business);
  });
});

module.exports = businessRoutes;
