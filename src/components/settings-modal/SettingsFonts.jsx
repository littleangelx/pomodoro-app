import { motion } from "framer-motion";

import { useFontChange } from "../../contexts/fontContext";

function SettingsFonts({ circleVariants }) {
  const { font, changeFont } = useFontChange();

  return (
    <section className="fonts-section">
      <h2>Font</h2>
      <motion.div
        className="fonts"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      >
        <motion.div
          className={`circle sans ${font === "Kumbh Sans" ? "active" : ""}`}
          variants={circleVariants}
          transition="spring"
          onClick={() => changeFont("Kumbh Sans")}
        >
          Aa
        </motion.div>
        <motion.div
          className={`circle serif ${font === "Roboto Slab" ? "active" : ""}`}
          variants={circleVariants}
          transition="spring"
          onClick={() => changeFont("Roboto Slab")}
        >
          Aa
        </motion.div>
        <motion.div
          className={`circle mono ${font === "Space Mono" ? "active" : ""}`}
          variants={circleVariants}
          transition="spring"
          onClick={() => changeFont("Space Mono")}
        >
          Aa
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SettingsFonts;
