const db = require('../models/index')
const UserSchema = db.board

exports.write = (req, res) => {
      new UserSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'}) 
    })
    
}
exports.boardlist = (req, res) => {
    console.log(`### userController access `)
    UserSchema.find()
    .exec((err, boards) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, boards })
    })
 
    
}