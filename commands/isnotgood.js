module.exports = {
  name: 'isnotgood',
  description: 'Remove from the good List',
  execute(msg, args) {
    //check to see if array exists
    if(typeof goodlist == 'undefined'){
      global.goodlist = [""];
    }
    //join arguments into a single value
    var goodthing = args.join(" ");
    //check array for value
    if(goodlist.includes(goodthing)) {
      //remove value from array
      for( var i = 0; i < goodlist.length; i++){                               
        if ( goodlist[i] === goodthing) { 
            goodlist.splice(i, 1); 
            i--; 
        }
    }
      msg.channel.send(goodthing+' no longer good');
    }
    else {
      //message channel
      msg.channel.send(goodthing+' cannot be found on the goodlist');
    }
  },
};
