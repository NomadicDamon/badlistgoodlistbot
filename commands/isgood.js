module.exports = {
  name: 'isgood',
  description: 'Add to the good List',
  execute(msg, args) {
    //check to see if array exists
    if(typeof goodlist == 'undefined'){
      global.goodlist = [""];
    }
    //join arguments into a single value
    var goodthing = args.join(" ");
    //check array for value
    if(goodlist.join(" ").toUpperCase().includes(goodthing.toUpperCase())) {
      msg.channel.send(goodthing+' is already good');
    }
    else {
      //message channel the new value
      msg.channel.send(goodthing+' is now on the good list.');
      //add value to array
      goodlist.push(goodthing);
      //write badlist to json file
      const fs = require('fs');
      let data = JSON.stringify(goodlist);
      fs.writeFileSync('goodlist.json', data);
    }
  },
};
