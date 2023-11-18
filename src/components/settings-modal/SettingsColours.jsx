import { motion } from "framer-motion";

import { useColourChange } from "../../contexts/colourContext";

function SettingsColours({ circleVariants }) {
  const { colour, changeColour } = useColourChange();

  return (
    <section className="colours-section">
      <h2>Colour</h2>
      <div className="colours">
        <motion.div
          className={`circle red ${colour === "#f87070" ? "active" : ""}`}
          variants={circleVariants}
          transition="spring"
          onClick={() => changeColour("#f87070")}
        >
          <img
            className={colour === "#f87070" ? "" : "hidden"}
            src="./assets/checkmark.svg"
          />
        </motion.div>
        <motion.div
          className={`circle blue ${colour === "#70f3f8" ? "active" : ""}`}
          variants={circleVariants}
          transition="spring"
          onClick={() => changeColour("#70f3f8")}
        >
          <img
            className={colour === "#70f3f8" ? "" : "hidden"}
            src="./assets/checkmark.svg"
          />
        </motion.div>
        <motion.div
          className={`circle purple ${colour === "#d881f8" ? "active" : ""}`}
          variants={circleVariants}
          transition="spring"
          onClick={() => changeColour("#d881f8")}
        >
          <img
            className={colour === "#d881f8" ? "" : "hidden"}
            src="./assets/checkmark.svg"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default SettingsColours;
