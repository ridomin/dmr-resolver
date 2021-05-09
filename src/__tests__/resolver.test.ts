import { resolve } from '../index'

const out = document.getElementById('output')
const dtmi = 'dtmi:com:example:TemperatureController;1'
if (out) {
  resolve(dtmi)
  .then(res => out.innerText += JSON.stringify(res, null, 2))
  .catch(err => out.innerText += err)
}

//resolve(dtmi, false, 'https://raw.githubusercontent.com/iotmodels/iot-plugandplay-models/main/')