// const env = require('../.env')
const Telegraf = require('telegraf')

const bot = new Telegraf('637880392:AAHEoywA0RnWOYsiOSKlmmI5lTcsi6-22Ds')

bot.start(ctx =>{
    const from = ctx.update.message.from
    console.log(from)
    ctx.reply(`Seja bem vindo ${from.first_name}`)
})

bot.on('text', async (ctx, next) => {
    await ctx.reply('mid 1')
    next()
})

bot.on('text', async (ctx, next) => {
    await ctx.reply('mid 2')
    next()
})

bot.startPolling()