const { getBmi, getCalc, getGrade } = require('../controllers/basic.controller');
module.exports = x => x.app.post(`${x.url}/bmi`, getBmi);

module.exports = x => x.app.post(`${x.url}/calc`, getCalc);

module.exports = x => x.app.post(`${x.url}/grade`, getGrade) ;
//module.exports = x => x.app.post(`${x.url}/grade`, getGrade) ;