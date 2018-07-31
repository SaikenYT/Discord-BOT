const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "*";

client.login("NDczNTUyNzQ0MDM3MjIwMzUy.DkDvVA.YNHWOCyRidXBkILK6wyjs9sliWI");

client.on("ready", () => {
    console.log("Je suis prêt!");
    client.user.setGame("Tuer le karma");
});

client.on("message", (message) => {
    if (message.content.startsWith('+hug')) {
            let member = message.mentions.members.first()
            message.channel.send(`${message.author} a donné à ${member} un hug!`, {
                file: "https://media.giphy.com/media/K0kSeUdGb3Tzi/giphy.gif"
        });
    }
});

client.on("message", (message) => {
    if (message.content.startsWith('+bravo')) {
            let member = message.mentions.members.first()
            message.channel.send(`${message.author} a donné à ${member} un bravo!`, {
                file: "https://media.giphy.com/media/12xWfDQcGkbU1W/giphy.gif"
        });
    }
});

client.on("message", (message) => {
    if (message.content.startsWith('+slap')) {
            let member = message.mentions.members.first()
            message.channel.send(`${message.author} a donné à ${member} un slap!`, {
                file: "https://media.giphy.com/media/12p4i7335rHVBK/giphy.gif"
        });
    }
});

