
const { signup, userlist, profile, login } = require('../controllers/user.controller');
const { verifyToken } = require('../routes/middlewares');
module.exports = x => {
    console.log(' ### user.route 로 들어옴 ###')
    x.app.post(`${x.url}/signup`, signup);
      x.app.post(`${x.url}/login`, verifyToken, login);
        x.app.get(`${x.url}/list`, userlist);
}


/**const express = require('express');
const userLogin = express.Router()
const usersignin = express.Router()
userLogin.post('/api/user/write', (req, res) => {
  const { username, name, pw, telephone } = req.body;
  console.log(`사용자 ID: ${username}`)
  console.log(`비밀번호 : ${pw}`)
  console.log(`이름 : ${name}`)
  console.log(`전화번호 : ${telephone}`)

  res.json(req.body)
})

usersignin.post('/api/signin/write', (req, res) => {
  const { username, pw } = req.body;
  console.log(`사용자 ID: ${username}`)
  console.log(`비밀번호 : ${pw}`)


  res.json(req.body)
})
module.exports = userLogin;
module.exports = usersignin;*/
