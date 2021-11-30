const express = require("express");
const router = express.Router();
const formdetails = require("../models/mymodel")

router.post("/view_customers", (request, response)=>{
    const Form_details = new formdetails({
        name1 : request.body.name1,
        name2 : request.body.name2,
        amount : request.body.amount
    })
    Form_details.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})

module.exports = router