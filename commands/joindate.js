var Scriptdb = require('script.db');

module.exports = {
    name: "joindate",
    aliases: ['jd'],
    
    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(client.userNotFound)

		let fj = new Scriptdb(`${client.config.disk}/data/joindate/${args[0]}.json`)
		let firstjoin = fj.get('date')

        if (firstjoin === undefined) return message.channel.send(client.userNotFound).catch(e => { message.author.send("**Lỗi:** " + e.toString() + ". Hãy báo cáo cho " + client.authorID); });
    
		message.channel.send({ embed: {
			color: 0x2EA711,
			description: `Bot đã thấy ${args[0]} lần đầu vào ${firstjoin}.`
		}}).catch(e => { 
			message.author.send("**Lỗi:** " + e.toString() + ". Hãy báo cáo cho " + client.authorID + ".") 
		});
    }
}