import { createContext, useContext, useReducer } from "react";

const FontContext = createContext();

const initialState = {
  font: "Kumbh Sans",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FONT":
      return { ...state, font: action.payload };
    default:
      return state;
  }
}

function FontProvider({ children }) {
  const [{ font }, dispatch] = useReducer(reducer, initialState);

  function changeFont(value) {
    dispatch({ type: "CHANGE_FONT", payload: value });
  }

  return (
    <FontContext.Provider value={{ font, changeFont }}>
      {children}
    </FontContext.Provider>
  );
}

function useFontChange() {
  const context = useContext(FontContext);
  if (context === undefined)
    throw new Error("Context was used outside of Provider");
  return context;
}

export { FontProvider, useFontChange };
