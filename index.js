require('dotenv').config();
const { Bot, GrammyError, HttpError } = require('grammy');

const bot = new Bot(process.env.BOT_API_KEY);

bot.command('help', async (ctx) => {
    await ctx.reply(`ПРИНЦИП РАБОТЫ СИГНАЛОВ!🤑💵
        
✅ПЕРВОЕ: Каждый вечер я выдаю сигналы по определенному времени.💰


✅ВТОРОЕ: На определенной минуте я даю команду "ставить" (все минуты заранее предопределенны!)💰


✅ТРЕТЬЕ: Ставка под определенный кэф. тут два варианта, либо выше 1.30. либо ГОЛД!)💰


ЕДИНСТВЕННОЕ ПРАВИЛО - НЕ СТАВЬТЕ ВЕСЬ СВОЙ БАНК!

    ссылка на канал /work💳
`)

})

bot.command('work', async (ctx) => {
    await ctx.reply('ЧТО БЫ ПОЛУЧИТЬ ДОСТУП К СИГНАЛАМ, ПЕРЕЙДИТЕ ПО ССЫЛКЕ! https://t.me/luckyjetsignaliver')
})

bot.command('start', async (ctx) => {
    await ctx.reply(`ДОБРО ПОЖАЛОВАТЬ! ✅🎁

Меня зовут СЕРГЕЙ, я веду теллеграм канал,

в котором каждый день выдаю сигналы в LUCKY JET 💪🥇

Если вы еще никогда не играли в LACKU JET, не переживайте!

Мой канал обеспечит вам полную гарантию безопасности, главное - СОБЛЮДАТЬ РУКОВОДСТВО!😄

КАК ЭТО РАБОТАЕТ? - /help`)
})

//bot.on('message', async (ctx) => {
//    await ctx.reply('К сожалению такой команды я не знаю, воспользуйтесь командой /help !')
//})

bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`error while handling update ${ctx.update.update_id}:`);
    const e = err.error;

    if (e instanceof grammyError) {
        console.error("Error in request:", e.description);
    } else if (e instanceof httpError) {
        console.error("could not contact Telegram:", e);
    } else {
        console.error("Unknown error:", e);
    }
})

bot.start();