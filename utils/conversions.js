/* conversion helpers */
function convertToEUR(data) {
  let fmt = {};
  let cross = parseFloat(data.eur);
  fmt.btc = (parseFloat(data.btc) * cross).toFixed(4);
  fmt.eth = (parseFloat(data.eth) * cross).toFixed(4);
  fmt.xau = (parseFloat(data.xau) * cross).toFixed(4);
  fmt.xag = (parseFloat(data.xag) * cross).toFixed(4);
  fmt.cad = (parseFloat(data.cad) * cross).toFixed(4);
  fmt.eur = '1.0000';
  fmt.cny = (parseFloat(data.cny) * cross).toFixed(4);
  fmt.jpy = (parseFloat(data.jpy) * cross).toFixed(4);
  return fmt;
}

function convertToCAD(data) {
  let fmt = {};
  let cross = parseFloat(data.cad);
  fmt.btc = (parseFloat(data.btc) * cross).toFixed(4);
  fmt.eth = (parseFloat(data.eth) * cross).toFixed(4);
  fmt.xau = (parseFloat(data.xau) * cross).toFixed(4);
  fmt.xag = (parseFloat(data.xag) * cross).toFixed(4);
  fmt.cad = '1.0000';
  fmt.eur = (parseFloat(data.eur) * cross).toFixed(4);
  fmt.cny = (parseFloat(data.cny) * cross).toFixed(4);
  fmt.jpy = (parseFloat(data.jpy) * cross).toFixed(4);
  return fmt;
}

function convertToCNY(data) {
  let fmt = {};
  let cross = parseFloat(data.cny);
  fmt.btc = (parseFloat(data.btc) * cross).toFixed(4);
  fmt.eth = (parseFloat(data.eth) * cross).toFixed(4);
  fmt.xau = (parseFloat(data.xau) * cross).toFixed(4);
  fmt.xag = (parseFloat(data.xag) * cross).toFixed(4);
  fmt.cad = (parseFloat(data.cad) * cross).toFixed(4);
  fmt.eur = (parseFloat(data.eur) * cross).toFixed(4);
  fmt.cny = '1.0000';
  fmt.jpy = (parseFloat(data.jpy) * cross).toFixed(4);
  return fmt;
}

function convertToJPY(data) {
  let fmt = {};
  let cross = parseFloat(data.jpy);
  fmt.btc = (parseFloat(data.btc) * cross).toFixed(4);
  fmt.eth = (parseFloat(data.eth) * cross).toFixed(4);
  fmt.xau = (parseFloat(data.xau) * cross).toFixed(4);
  fmt.xag = (parseFloat(data.xag) * cross).toFixed(4);
  fmt.cad = (parseFloat(data.cad) * cross).toFixed(4);
  fmt.eur = (parseFloat(data.eur) * cross).toFixed(4);
  fmt.cny = (parseFloat(data.cny) * cross).toFixed(4);
  fmt.jpy = '1.0000';
  return fmt;
}

function gsr(gold, silver) {
  return ((parseFloat(gold)) / (parseFloat(silver))).toFixed(4);
}

function ber(btc, eth) {
  return ((parseFloat(btc)) / (parseFloat(eth))).toFixed(4);
}

module.exports = {
  convertToEUR,
  convertToCAD,
  convertToCNY,
  convertToJPY,
  gsr,
  ber
};
