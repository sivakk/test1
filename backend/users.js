var express = require("express");
var BAD_REQUEST = require("http-status-codes");
var INTERNAL_SERVER_ERROR = require("http-status-codes");
var NOT_FOUND = require("http-status-codes");
const bcryptjs = require('bcryptjs');
var jwt = require("jsonwebtoken");
let router = express.Router();
const User = require("./user");








router.post('/signup', (req, res, next) => {
    console.log(req.body.email);
    console.log(req.body.password);
    bcryptjs.hash(req.body.password, 10).then(
        hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save().then(result => {
                res.status(201).json({
                    message: 'User Created!',
                    result: result
                });
            })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });
        }

    )



});
router.post('/login', (req, res, next) => {

    let fetchedUser;
    console.log(req.body.email);
    console.log(req.body.password);
    User.findOne({email:req.body.email}).then(user=>{
       
        if(!user){
        return res.status(401).json({msg:"Auth failed"})
        }
        else{
            console.log(user);
        }
        fetchedUser=user;
        return bcryptjs.compare(req.body.password,user.password)
    }).then(result=>{
        if(!result){
            return res.status(401).json({msg:"Auth failed"})
        }
        const token=jwt.sign({email: fetchedUser.email,userId:fetchedUser._id},
            "secret_should_be_longer",
            {expiresIn:"1h"}
            );
            res.status(200).json({token:token,expiresIn:3600})
    })
    .catch (err =>{
        return res.status(401).json({msg:"Auth failed"})
        }

    )
});

 






module.exports = router;



