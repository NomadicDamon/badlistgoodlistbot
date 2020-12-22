module.exports = {
  name: 'goodlist',
  description: 'Read the good list',
  execute(msg) {
    //check to see if array exists
    if(typeof goodlist === 'undefined'){
        msg.channel.send('The good List is empty');
    }
    else{
        msg.channel.send(goodlist);
    }
  },
};
