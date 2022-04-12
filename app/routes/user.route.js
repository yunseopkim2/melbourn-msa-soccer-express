
const { signup, userlist, profile } = require('../controllers/user.controller');
module.exports = x => {
  x.app.post(`${x.url}/signup`, signup);
  x.app.get(`${x.url}/profile/:id`, profile);
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
