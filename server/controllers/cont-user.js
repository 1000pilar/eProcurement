var User = require("../models/Users.js")
var bcrypt = require("bcrypt")
var jwt = require("jsonwebtoken")

module.exports = {
  signUp: (req, res) => {
    User.create({
      name : req.body.name,
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10),
      role: req.body.role,
      position: req.body.position,
      hp: req.body.hp,
      company: req.body.companyId
    }, (err, user) =>{
      if(err){
        res.send({msg: "Saving User Failed!!"})
      } else {
        res.send(user)
      }
    })
  },

  login: (req, res) => {
    var user = req.user
    if (user.hasOwnProperty("msg")){
      res.send(user.msg)
    } else {
      jwt.sign({
        name : user.name,
        username: user.username,
        role: user.role,
        position: user.position,
        hp: user.hp,
        company: user.companyId,
      }, 'rahasia', { expiresIn: '4h' }, (err, token)=>{
        if (err) {
          res.send("msg: error when sign token!!!")
        } else {
          jwt.verify(token, 'rahasia', (err, decoded)=>{
            if (err) {
              res.send("msg: error when decoded token!!!")
            } else {
              res.send({
                token: token,
                data: decoded
              })
            }
          })
        }
      })
    }
  }
}
