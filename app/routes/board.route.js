
const { write, boardlist } = require('../controllers/board.controller');
module.exports = x => {
  console.log(' ### board.route 로 들어옴 ###')
  x.app.post(`${x.url}/add-board`, write);
  x.app.get(`${x.url}/list`, boardlist);
}