function SettingsHeader({ onClose }) {
  return (
    <section className="settings-heading-section">
      <h1>Settings</h1>
      <img src="./assets/icon-close.svg" onClick={onClose} />
    </section>
  );
}

export default SettingsHeader;
