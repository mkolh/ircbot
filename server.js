var irc = require('irc');
var fs = require('fs');
var q = require('q');

//change to the channel of your choice
var channel = "##mkolh";

var config = {
	channels: [channel],
	server: "irc.freenode.net",
	botName: "TESTBOT3000"
};

var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels
});

//will be the greeting with the list of USA stuff
// bot.addListener("join", function(channel, who){
// 	bot.say(who + " , what would you like to learn?" + "\n" + list);
// });s

var tick = 0;

bot.addListener("message", function(from, to, text, message) {

	var messages = message.args[1].toLowerCase();

	if(messages === "learn"){
		
		var iraq = {};

		var fs_readFile = q.denodeify(fs.readFile)
		var promise = fs_readFile('middle-east/iraq.json', 'utf8')

		.then(function(data){
			
			//this object will contain the full JSON file and the initial list

			//turns data (already dealt with buffer) to JSON
			iraq = JSON.parse(data);

			search(iraq, messages);

			console.log('donzo');
			})
		.done();

	};


});

/*
*@obj = current json object, iraq.comm etc (promise object)
*@list = array of strings for the current properties of the json object
*@message = the typed response to the previous function call
*/
function search(obj, messages){

	console.log("Another go around");
	console.log(messages);


	var keys = [];

	for(prop in obj){
		keys.push(prop);
	};	
	

	console.log(keys);

	//this is crashing it
	if('string' === typeof obj.messages){

		console.log('found the text');

		bot.say(config.channels[0], obj.text);

	}else{

		//display new choices
		
		
		keys = keys.join("\n");

		bot.say(config.channels[0], keys);

		//set listener for next message
		bot.addListener("message", function(from, to, text, message) {

			var newMessage = message.args[1].toLowerCase();
		
			if(tick < 1){
				tick++;
				search(obj[newMessage], newMessage);
			}else{
				
				console.log(obj[newMessage].text);

				search(obj, newMessage);
			};

		})


	}

}

bot.addListener('error', function(message) {
    console.log('error: ', message);
});
//if data has only one property, .text, return the content of that property
//else, add a listener and run the search function again
//the search function should return 
