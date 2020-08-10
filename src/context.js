// createContext - this method creates context object
import { createContext } from 'react';

// Create a Context object
// This Context object can be use to share data between components easily.
// Think of Context Object as a Store.

const context = createContext();
// It returns an object with 2 values: special components
// { Provider, Consumer }
// Provider component wraps around a tree of components that can have an access to the Context Object

export default context;

// putting all above into one line of code
// export default createContext();