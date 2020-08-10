import { NEW_MESSAGE } from './types';
import { v4 as uuidv4 } from 'uuid';

// actions are plain objects which are dispatched & proccessed by reducers

// setting up Action Creator (type/payload) with param text
// overall we have object with id, text & date for every single message
export const newMessage = text => ({
  type: NEW_MESSAGE,
  item: { id: uuidv4(), text, timestamp: Date.now()} 
})
