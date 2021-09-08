import React, { createContext, useReducer } from 'react';

const modalContext = createContext({});

const initialState = {
  open: false,
};

export function ModalProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case 'true':
        return { ...state, open: true };
      case 'false':
        return { ...state, open: false };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <modalContext.Provider value={{ state, dispatch }}>
      {children}
    </modalContext.Provider>
  );
}

export default modalContext;