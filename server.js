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
var keys = [];		
var country = {};

bot.addListener("message", function(from, to, text, message) {

	var messages = message.args[1].toLowerCase().split(" ");

	if(messages[0] === "learn"){
		
		//rename to the proper convention
		var countryName = messages[1].substring(0, 2) + "-" + messages[1];

		var fs_readFile = q.denodeify(fs.readFile)
		var promise = fs_readFile('middle-east/' + countryName + ".json", 'utf8')

		.then(function(data){
			
			//this object will contain the full JSON file and the initial list

			//turns data (already dealt with buffer) to JSON
			country = JSON.parse(data);

			var tableOfContents = [];

			for(p in country){
				tableOfContents.push(p);
			};

			tableOfContents = tableOfContents.join("\n");
			bot.say(config.channels[0], tableOfContents);

			console.log('donzo');
			})
		.done();

	}else{
		//search with mesages
		//if country is empty message return "Say Learn to Learn"
	console.log("Searching..." + country);
	search(country, messages[0]);
	}


});

//function will recursively search
function search(obj, name) {

    for (var key in obj) {

        if (obj.hasOwnProperty(key)) {
            if (key === name) {
            	
            	//found the requested key! Let's see if it's an object,
            	//if so, provide the user the availible sub-categories
            	//if it has a text property, return the text!

                if ("object" == typeof (obj[key])) {
                    var keys = [];

                    for (var prop in obj[key]) {
                        keys.push(prop);
                    }



                    if(obj[key].text){
                    	//found text property! Return the text!
                    	console.log("FOUND TEXT!!!");
                    	bot.say(config.channels[0], obj[key].text);

                    }else{
                    	//provide user list of availible sub-categories
                    	keys = keys.join("\n");
						bot.say(config.channels[0], keys);
                    };
                }else{
                	//no sub-categories
                	console.log(obj[name]);
                	bot.say(config.channels[0], obj[name]);
                }
            } else {
                if ("object" == typeof (obj[key])) {
                	//recursive search
                    search(obj[key], name);
                }
            }
        }
    }
}


bot.addListener('error', function(message) {
    console.log('error: ', message);
});
//if data has only one property, .text, return the content of that property
//else, add a listener and run the search function again
//the search function should return 
