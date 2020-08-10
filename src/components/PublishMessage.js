// import useContext (or we could write React.useContext)
// useContext allows us to access data from the nearest wrapping context provider
import React, { useState, useContext } from 'react';
import Context from '../context';

import { newMessage } from '../state/actions';

// This component is dispatching action objects based on user's input text
function PublishMessage () {

    // at the top of the func, we are applying context
    // now using context to get dispatch method
    const { dispatch } = useContext(Context);

    // destructuring dispatch method from the props object
    // const { dispatch } = props;

    const [text, setText] = useState('');

    // updating our local state's value 
    const updateText = event => {
        setText(event.target.value)
        
    }

    // dispatching action creator with our local state
    const publishMessage = () => {
        dispatch(newMessage(text))
        setText('')
    }

    // on key enter
    const handleKeyPress = event => {
        if (event.key === 'Enter') publishMessage();
    }
    return (
        <div>
            <h3>Got something to say?</h3>
            <input 
                value={text} 
                onChange={updateText}
                onKeyPress={handleKeyPress}
            />
            {''}
            <button onClick={publishMessage}>Publish it!</button>
        </div>
    )
}

export default PublishMessage;