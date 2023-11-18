import { createContext, useReducer, useContext } from "react";

const ColourContext = createContext();

const initialState = {
  colour: "#f87070",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_COLOUR":
      return { ...state, colour: action.payload };
    default:
      return state;
  }
}

function ColourProvider({ children }) {
  const [{ colour }, dispatch] = useReducer(reducer, initialState);

  function changeColour(value) {
    dispatch({ type: "CHANGE_COLOUR", payload: value });
  }

  return (
    <ColourContext.Provider value={{ colour, changeColour }}>
      {children}
    </ColourContext.Provider>
  );
}

function useColourChange() {
  const context = useContext(ColourContext);
  if (context === undefined)
    throw new Error("Context was used outside of Provider");
  return context;
}

export { ColourProvider, useColourChange };
