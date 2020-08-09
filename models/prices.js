const mongoose = require('mongoose');

const priceDetailSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now()
  },
  btc: {
    type: String,
    default: '0'
  },
  eth: {
    type: String,
    default: '0'
  },
  xau: {
    type: String,
    default: '0'
  },
  xag: {
    type: String,
    default: '0'
  },
  eur: {
    type: String,
    default: '0'
  },
  cny: {
    type: String,
    default: '0'
  },
  jpy: {
    type: String,
    default: '0'
  },
  cad: {
    type: String,
    default: '0'
  },
});

const PriceDetail = mongoose.model('price_detail', priceDetailSchema);

module.exports = {
  PriceDetail,
  priceDetailSchema
}
