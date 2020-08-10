import React, { useContext } from 'react';
import Context from '../context';

function MessageBoard () {

    // destructuring state & messages by using inner destructuring in Reducer store
    const { state: { messages }} = useContext(Context);

    const renderMessages = messages.map(message => {

        const { id, text, timestamp }  = message;

        return (
            <div key={id}>
                <h4>{new Date(timestamp).toLocaleString()}</h4>
                <p>{text}</p>
               
            </div>
        )
    })

    return (
       <React.Fragment>{renderMessages}</React.Fragment>
    )
}

export default MessageBoard;