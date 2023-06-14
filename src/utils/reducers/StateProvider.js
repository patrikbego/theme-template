import React, { createContext, useContext, useReducer } from 'react';
// https://medium.com/cleverprogrammer/amazon-clone-using-react-the-ultimate-guide-fba2b36f3458
// Prepares the dataLayer
export const StateContext = createContext('ROOT');

// Wrap our app and provide the Data layer
export function StateProvider({ reducer, initialState, children }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
