const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    loadJSON(function(response) {
  // Parse JSON string into object
    var theEncounters = JSON.parse(response);
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply(theEncounters[0].Text);
  	}
});

 function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'my_data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


