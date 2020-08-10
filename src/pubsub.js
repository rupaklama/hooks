import PubNub from 'pubnub';
import pubnubConfig from './pubnub.config';

// to start we need a channel to work with
export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

function PubSub() {
    // creating instance of pubnub
  const pubnub = new PubNub(pubnubConfig);
    // allows subscribe to channels 
  pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });
    // allows to configure code that should run when message gets published on subscribe channel
  this.addListener = listenerConfig => {
    pubnub.addListener(listenerConfig);
  }
 // allows to send messages to a channel itself
  this.publish = message => {
    console.log('publish message', message);
    
    pubnub.publish({
      message,
      channel: MESSAGE_CHANNEL
    });
  }
}

export default PubSub;