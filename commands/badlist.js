module.exports = {
  name: 'badlist',
  description: 'Read the Bad list',
  execute(msg) {
    //check to see if array exists
    if(typeof badlist === 'undefined'){
        msg.channel.send('The Bad List is empty');
    }
    else{
        msg.channel.send(badlist);
    }
  },
};
