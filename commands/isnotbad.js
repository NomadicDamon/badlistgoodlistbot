module.exports = {
  name: 'isnotbad',
  description: 'Remove from the Bad List',
  execute(msg, args) {
    //check to see if array exists
    if(typeof badlist == 'undefined'){
      global.badlist = [""];
    }
    //join arguments into a single value
    var badthing = args.join(" ");
    //check array for value
    if(badlist.includes(badthing)) {
      //remove value from array
      for( var i = 0; i < badlist.length; i++){                               
        if ( badlist[i] === badthing) { 
            badlist.splice(i, 1); 
            i--; 
        }
    }
      msg.channel.send(badthing+' no longer bad');
    }
    else {
      //message channel
      msg.channel.send(badthing+' cannot be found on the badlist');
    }
  },
};
