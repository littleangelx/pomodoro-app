import { createPortal } from "react-dom";
import SettingsModal from "../components/settings-modal/SettingsModal";
import { useState } from "react";

function Settings() {
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  return (
    <>
      <img
        className="settings-button"
        src="./assets/icon-settings.svg"
        onClick={() => setShowSettingsModal(true)}
      />
      {showSettingsModal &&
        createPortal(
          <SettingsModal onClose={() => setShowSettingsModal(false)} />,
          document.body
        )}
    </>
  );
}

export default Settings;
