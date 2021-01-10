const env = require('../.env')
const Telegraf = require('telegraf')

const bot = new Telegraf('637880392:AAHEoywA0RnWOYsiOSKlmmI5lTcsi6-22Ds')

bot.start(ctx =>{
    const from = ctx.update.message.from
    ctx.reply(`Seja bem vindo ${from.first_name}`)
})

bot.on('text', ctx => {
    ctx.reply(`texto '${ctx.update.message.text}' recibo com sucesso!!`)
})

bot.on('location', ctx => {
    const location = ctx.update.message.location
    ctx.reply(`Entendido você esta em 
    Lat: ${location.latitude},
    Lon: ${location.longitude}`)
})

bot.on('contact', ctx =>{
    const contact = ctx.update.message.contact;
    console.log(contact);
    ctx.reply(`Vou lembrar do(a) 
        ${contact.first_name} (${contact.phone_number})`)
})

bot.on('voice', ctx => {
    const voice = ctx.update.message.voice
    console.log(voice)
    ctx.reply(`O audio possui ${voice.duration} segundos`)
})

bot.on('photo', ctx => {
    const photo = ctx.update.message.photo
    console.log(photo)

    photo.forEach((ph, i) =>{
        ctx.reply(`Photo ${i} possui um tamanho de ${ph.width}x${ph.height}`)
    })
})

bot.on('sticker', ctx => {
    const sticker = ctx.update.message.sticker
    console.log(sticker)
    ctx.reply(`Estou vendo que você enviou o ${sticker.emoji} do conjunto ${sticker.set_name}`)
})

bot.startPolling()