const config = require('config');
const moment = require('moment');
const { logger } = require('../services/logging');
const { PriceDetail } = require('../models/prices');
const { resetBot } = require('../services/bot');
const { convertToEUR,
  convertToCAD,
  convertToCNY,
  convertToJPY,
  gsr, ber } = require('../utils/conversions');

let bot;

module.exports = function() {

  bot = resetBot();

  // Listen for any kind of message. There are different kinds of
  // messages.
  bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    //console.log(msg);
    //console.log(`chatId: ${chatId}`);
    //console.log(`hello ${msg.from.first_name}`);
    //console.log(`you wrote ${msg.text}`);

    let request = (msg.text) ? msg.text.trim().toLowerCase() : '';

    switch(request) {
      case '/help':
        bot.sendMessage(chatId, `
          This is a bot to give you prices when you ask for them. Try /pairs for a list of pairs, or /commands for a list of commands.
        `);
        break;
      case '/commands':
        bot.sendMessage(chatId, `
          You can try the following:\n/prices\n/crypto\n/rates\n/metal\n/pricesInEUR\n/pricesInCAD\n/pricesInCNY\n/pricesInJPY
        `);
        break;
      case '/prices':
        try {
          let data = await PriceDetail.findOne().sort({ field: 'asc', timestamp: -1 });
          let result = `
            BTC: $${data.btc}\nETH: $${data.eth}\nBER: ${ber(data.btc, data.eth)}\n\nGOLD/oz: $${data.xau}\nSILVER/oz: $${data.xag}\nGSR: ${gsr(data.xau, data.xag)}\n\nCAD: $${data.cad}\nEUR: $${data.eur}\nCNY: $${data.cny}\nJPY: $${data.jpy}
            `
          bot.sendMessage(chatId, result);
          logger.info(`user: ${msg.from.username}, isBot: ${msg.from.is_bot}, text: ${msg.text}, date: ${moment.unix(msg.date)}`);
        }
        catch(ex) {
          logger.error(ex);
        }
        break;
      case '/crypto':
        try {
          let data = await PriceDetail.findOne().sort({ field: 'asc', timestamp: -1 });
          let result = `
            BTC: $${data.btc}\nETH: $${data.eth}\nBER: ${ber(data.btc, data.eth)}\n
            `
          bot.sendMessage(chatId, result);
          logger.info(`user: ${msg.from.username}, isBot: ${msg.from.is_bot}, text: ${msg.text}, date: ${moment.unix(msg.date)}`);
        }
        catch(ex) {
          logger.error(ex);
        }
        break;
      case '/btc':
        try {
          let data = await PriceDetail.findOne().sort({ field: 'asc', timestamp: -1 });
          let result = `BTC: $${data.btc}`
          bot.sendMessage(chatId, result);
          logger.info(`user: ${msg.from.username}, isBot: ${msg.from.is_bot}, text: ${msg.text}, date: ${moment.unix(msg.date)}`);
        }
        catch(ex) {
          logger.error(ex);
        }
        break;
      case '/eth':
        try {
          let data = await PriceDetail.findOne().sort({ field: 'asc', timestamp: -1 });
          let result = `ETH: $${data.eth}`
          bot.sendMessage(chatId, result);
          logger.info(`user: ${msg.from.username}, isBot: ${msg.from.is_bot}, text: ${msg.text}, date: ${moment.unix(msg.date)}`);
        }
        catch(ex) {
          logger.error(ex);
        }
        break;
      case '/rates':
        try {
          let data = await PriceDetail.findOne().sort({ field: 'asc', timestamp: -1 });
          let result = `
            CAD: $${data.cad}\nEUR: $${data.eur}\nCNY: $${data.cny}\nJPY: $${data.jpy}
            `
          bot.sendMessage(chatId, result);
          logger.info(`user: ${msg.from.username}, isBot: ${msg.from.is_bot}, text: ${msg.text}, date: ${moment.unix(msg.date)}`);
        }
        catch(ex) {
          logger.error(ex);
        }
        break;
      case '/metal':
        try {
          let data = await PriceDetail.findOne().sort({ field: 'asc', timestamp: -1 });
          let result = `
            GOLD/oz: $${data.xau}\nSILVER/oz: $${data.xag}\nGSR: ${gsr(data.xau, data.xag)}\n
            `
          bot.sendMessage(chatId, result);
          logger.info(`user: ${msg.from.username}, isBot: ${msg.from.is_bot}, text: ${msg.text}, date: ${moment.unix(msg.date)}`);
        }
        catch(ex) {
          logger.error(ex);
        }
        break;
      case '/pricesineur':
        try {
          let data = await PriceDetail.findOne().sort({ field: 'asc', timestamp: -1 });
          let cnvt = convertToEUR(data);
          data = {...cnvt};
          let result = `
            BTC: €${data.btc}\nETH: €${data.eth}\nBER: ${ber(data.btc, data.eth)}\n\nGOLD/oz: €${data.xau}\nSILVER/oz: €${data.xag}\nGSR: ${gsr(data.xau, data.xag)}\n\nCAD: €${data.cad}\nEUR: €${data.eur}\nCNY: €${data.cny}\nJPY: €${data.jpy}
            `
          bot.sendMessage(chatId, result);
          logger.info(`user: ${msg.from.username}, isBot: ${msg.from.is_bot}, text: ${msg.text}, date: ${moment.unix(msg.date)}`);
          }
          catch(ex) {
            logger.error(ex);
          }
        break;
      case '/pricesincad':
        try {
          let data = await PriceDetail.findOne().sort({ field: 'asc', timestamp: -1 });
          let cnvt = convertToCAD(data);
          data = {...cnvt};
          let result = `
            BTC: $${data.btc}\nETH: $${data.eth}\nBER: ${ber(data.btc, data.eth)}\n\nGOLD/oz: $${data.xau}\nSILVER/oz: $${data.xag}\nGSR: ${gsr(data.xau, data.xag)}\n\nCAD: $${data.cad}\nEUR: $${data.eur}\nCNY: $${data.cny}\nJPY: $${data.jpy}
            `
          bot.sendMessage(chatId, result);
          logger.info(`user: ${msg.from.username}, isBot: ${msg.from.is_bot}, text: ${msg.text}, date: ${moment.unix(msg.date)}`);
          }
          catch(ex) {
            logger.error(ex);
          }
        break;
      case '/pricesincny':
        try {
          let data = await PriceDetail.findOne().sort({ field: 'asc', timestamp: -1 });
          let cnvt = convertToCNY(data);
          data = {...cnvt};
          let result = `
            BTC: ¥${data.btc}\nETH: ¥${data.eth}\nBER: ${ber(data.btc, data.eth)}\n\nGOLD/oz: ¥${data.xau}\nSILVER/oz: ¥${data.xag}\nGSR: ${gsr(data.xau, data.xag)}\n\nCAD: ¥${data.cad}\nEUR: ¥${data.eur}\nCNY: ¥${data.cny}\nJPY: ¥${data.jpy}
            `
          bot.sendMessage(chatId, result);
          logger.info(`user: ${msg.from.username}, isBot: ${msg.from.is_bot}, text: ${msg.text}, date: ${moment.unix(msg.date)}`);
          }
          catch(ex) {
            logger.error(ex);
          }
        break;
      case '/pricesinjpy':
        try {
          let data = await PriceDetail.findOne().sort({ field: 'asc', timestamp: -1 });
          let cnvt = convertToJPY(data);
          data = {...cnvt};
          let result = `
            BTC: ¥${data.btc}\nETH: ¥${data.eth}\nBER: ${ber(data.btc, data.eth)}\n\nGOLD/oz: ¥${data.xau}\nSILVER/oz: ¥${data.xag}\nGSR: ${gsr(data.xau, data.xag)}\n\nCAD: ¥${data.cad}\nEUR: ¥${data.eur}\nCNY: ¥${data.cny}\nJPY: ¥${data.jpy}
            `
          bot.sendMessage(chatId, result);
          logger.info(`user: ${msg.from.username}, isBot: ${msg.from.is_bot}, text: ${msg.text}, date: ${moment.unix(msg.date)}`);
          }
          catch(ex) {
            logger.error(ex);
          }
        break;
      default:
        bot.sendMessage(chatId, `Oops, I didn't get that. Try Again`);
    }

    // send a message to the chat acknowledging receipt of their message
    //bot.sendMessage(chatId, 'Received your message');

  }); // end bot message

  bot.on('polling_error', (error) => {
    console.log(`polling_error: ${error}`);
    console.log(`checking error: ${error.code}...`);
    if (error.code === 'EFATAL') {
      console.log('try resetting the bot...');
      bot = resetBot();
    }
  }); //end bot error
}



/* END */

/**
// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});
*/
