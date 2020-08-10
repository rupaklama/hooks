import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from '../state/reducer';

// importing Context object
import Context from '../context';

import PubSub from '../pubsub';

// import { newMessage } from './state/actions';
import PublishMessage from './PublishMessage';

import MessageBoard from './MessageBoard';

// new instance of pubsub
const pubsub = new PubSub();

setTimeout(() => {
  pubsub.publish({ type: 'hello', value: 'bar'})
}, 1000)

function App() {

  // applying useReducer hook
  // state - updated state from the reducer
  // dispatch - passes action objects to reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // setting up side effect, interval with useEffect hook
  // useEffect(() => {
  //   // when our app re-renders second time, calling Dispatch on action creator 
  //   // to process input text data with Reducer & update state in the STORE

  //   // call dispatch to process action creator into reducer
  //   dispatch(newMessage('hello world!'))
    
  // }, [])

  // pubSub addListener
  useEffect(() => {
    pubsub.addListener({
      message: messageObject => {
        const { channel, message } = messageObject;
    
        console.log('Received message', message, 'channel', channel);
    
        dispatch(message);
      }
    });    
  }, []);
  
  console.log('state', state)

  // using Provider component of Context object to make a value available to all
  // children and grandchildren by using value={} property
  
  return (
    // let's say context provider provides object to all the inner functions,
    // from Reducer
    <Context.Provider value={{ state, dispatch }}>
      <div>
        <h2>Reaction</h2>

        <hr />
        <PublishMessage /> 

        <hr />
        <MessageBoard />

      </div>
    </Context.Provider>
  );
} // passing dispatch method & updated state from Reducer STORE as props into child components

export default App;

//  <PublishMessage dispatch={dispatch} />
//  <MessageBoard messages={state.messages} />

// NOTE: passing Props approach is not too bad, however, in much larger application 
// with many more childern & grand children components, passing data through props multiple time
// can become somewhat of pain, so
// using Context can solve this problem - “prop-drilling” up and down your component tree
// it’s a way to pass data deeply throughout your app without having to manually pass props 
// down through multiple levels. It can be a good alternative to tools 
// like Redux when all you need to do is pass data around


