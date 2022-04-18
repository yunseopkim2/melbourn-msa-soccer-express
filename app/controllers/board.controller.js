const db = require('../models/index')
const BoardSchema = db.board
exports.write = (req, res) => {
    console.log(' ### 진행 4: 노드서버에 진입함 '+ JSON.stringify(req.body))

    new BoardSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'}) 
    })
    
}
exports.boardlist = (req, res) => {
    
    BoardSchema.find()
    .exec((err, boards) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, boards })
    })
    }