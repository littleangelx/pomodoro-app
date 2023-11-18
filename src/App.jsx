import Controls from "./components/Controls";
import Header from "./components/Header";
import Settings from "./components/Settings";
import Timer from "./components/Timer";
import { useColourChange } from "./contexts/colourContext";
import { useFontChange } from "./contexts/fontContext";
import { useEffect } from "react";

function App() {
  const { font } = useFontChange();
  const { colour } = useColourChange();

  document.documentElement.style.setProperty("--font", font);
  document.documentElement.style.setProperty("--colour", colour);

  return (
    <div className="app">
      <Header />
      <Controls />
      <Timer />
      <Settings />
    </div>
  );
}

export default App;
