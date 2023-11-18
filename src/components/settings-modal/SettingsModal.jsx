import { motion } from "framer-motion";

import SettingsColours from "./SettingsColours";
import SettingsFonts from "./SettingsFonts";
import SettingsHeader from "./SettingsHeader";
import SettingsTimers from "./SettingsTimers";

function SettingsModal({ onClose }) {
  const circleVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: [0.8, 1.3, 1] },
  };

  return (
    <motion.div
      className="modal"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
    >
      <SettingsHeader onClose={onClose} />
      <SettingsTimers />
      <SettingsFonts circleVariants={circleVariants} />
      <SettingsColours circleVariants={circleVariants} />
      <button className="apply-button" onClick={onClose}>
        Apply
      </button>
    </motion.div>
  );
}

export default SettingsModal;
