// const env = require('../.env')
const Telegraf = require('telegraf')

const bot = new Telegraf('637880392:AAHEoywA0RnWOYsiOSKlmmI5lTcsi6-22Ds')

bot.start(ctx =>{
    const from = ctx.update.message.from

    if(from.id === 879157193){
        ctx.reply('Ao seu dispor, mestre');
    }
    else{
        ctx.reply('Sinto muito, mas só falto com o meu mestre');
    }
    console.log(from)
    ctx.reply(`Seja bem vindo ${from.first_name}`)
})

bot.startPolling()