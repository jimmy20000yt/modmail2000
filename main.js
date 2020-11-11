const { Client, MessageEmbed } = require('discord.js')
const bot = new Client();


bot.on('ready', () => {
      console.log('Bot is online')
      console.log('MODMAIL BOT')
      console.log('A modmail bot create by jimmy2000 and Greekmeta!')
      bot.user.setPresence({// 'dnd', 'online', 'invisible'
            status: '', // The status of the bot!
            activity: {
                  name: `to reports🎧||By jimmy2000`,
                  type: 'LISTENING'
            }
      })
})


bot.on('message', function(message) {
      if (message.author.bot) return
      if (message.channel.type !== 'dm') return
      const embed = new MessageEmbed()
      .setFooter('SERVER_NAME')//Write your server name in the server_name text and delete
      .setColor('BLUE')
      .setAuthor('DM Received')
      .addFields({
            name: `User`,
            value: `${message.author}\n\n Username:${message.author.tag}\n\nID:${message.author.id}`
      }, {
            name: `Message`,
            value: message
      })
      let channel = bot.channels.cache.get(`CHANNEL_ID`)//Write the ID of the channel you want the bot send the message!
      channel.send(embed)
      message.channel.send(`Report Sent`)
      console.log(`message from ${message.author.username} message was: ${message}`)
})

bot.login('TOKEN');//Write the bot token!