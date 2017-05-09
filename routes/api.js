var express = require("express")
var router = express.Router()

router.get('/:action', function(req, res, next){
    var action = req.params.action
    if(action === 'send'){
        //send emails
         res.json({
            confirmation: 'success',
            message: action
        })
    }
    res.json({
        confirmation: 'fail',
        message: action
    })
   
})

module.exports = router