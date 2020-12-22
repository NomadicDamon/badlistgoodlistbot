module.exports = {
  name: 'isbad',
  description: 'Add to the Bad List',
  execute(msg, args) {
    
    //check to see if array exists
    if(typeof badlist == 'undefined'){
      global.badlist = [""];
    }
    //join arguments into a single value
    var badthing = args.join(" ");
    //check array for value
    if(badlist.join(" ").toUpperCase().includes(badthing.toUpperCase())) {
      msg.channel.send(badthing+' is already bad');
    }
    else {
      //message channel the new value
      msg.channel.send(badthing+' is now on the bad list.');
      //add value to array
      badlist.push(badthing);
      //write badlist to json file
      const fs = require('fs');
      let data = JSON.stringify(badlist);
      fs.writeFileSync('badlist.json', data);
    }
  },
};
