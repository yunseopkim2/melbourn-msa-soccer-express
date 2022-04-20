import db from '../models/index.js'

export default function BasicService() {
   const Basic = db.basic
    const calcBmi = (payload) => {
        const {name, height, weight} = payload
        let _height=Number(height);
        let _weight=Number(weight);
        let bmi = _weight/Math.pow(_height,2);
        let output = Math.round(bmi*100)/100;
        var result = {name, height, weight}
        console.log(`계산중인 값들 : ${JSON.stringify(result)}`)
        if (output<18.5)
            result.bmi = "저체중";
        if (output>=18.5 && output<=25)
            result.bmi = "정상";
        if (output>=25 && output<=30)
            result.bmi = "과체중";
        if (output>30)
            result.bmi = "경도비만";
            console.log(`계산끝난 값들 : ${JSON.stringify(result)}`)
        return result
    }
    return {
        getBmi(req, _res){
            const {name, height, weight} = req.body
            console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
            console.log(`이름 : ${name}`)
            console.log(`키 : ${height}`)
            console.log(`몸무게 : ${weight}`)
            const json = calcBmi({name, height, weight})
            console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
            return json
        }

    }
}



/**exports.bmi = (payload) => {
    const {name, height, weight} = payload
    //Obtain user inputs
    let _height=Number(height);
    let _weight=Number(weight);

    //Perform calculation
    let bmi = _weight/Math.pow(_height,2);

    let output = Math.round(bmi*100)/100;
    var result = {name, height, weight}
    console.log(`계산중인 값들 : ${JSON.stringify(result)}`)
    if (output<18.5)
        result.bmi = "저체중";
    if (output>=18.5 && output<=25)
        result.bmi = "정상";
    if (output>=25 && output<=30)
        result.bmi = "과체중";
    if (output>30)
        result.bmi = "경도비만";
        console.log(`계산끝난 값들 : ${JSON.stringify(result)}`)
    return result
}

exports.computeCalc =(payload)=> {
  const { num1, opcode, num2 } = payload;
  let _num1 = Number(num1)
  let _num2 = Number(num2)
  const result = {num1, opcode, num2}
  if (opcode == "+")
    result.calc = _num1 + _num2;
  if (opcode == "-")
    result.calc = _num1 - _num2;
  if (opcode == "/")
    result.calc = _num1 / _num2;
  if (opcode == "*")
    result.calc = _num1 * _num2;
  if (opcode == "%")
    result.calc = _num1 % _num2;
  console.log(`계산끝난 값들 : ${JSON.stringify(result.calc)}`)
  return result
}

exports.gradescore =(payload) =>{
  const { name, kor, eng, math } = payload;
  let _kor = Number(kor)
  let _eng = Number(eng)
  let _math = Number(math)
        let sum = (_kor + _eng + _math)
  let avg = (Number(sum) / 3)
  console.log(`총점 ${sum}`)
  console.log(`평균 ${avg}`)
  let grade = {sum, avg}
  return grade
}*/