import React from 'react';
import SettingsRow from './SettingsRow';

interface ChangeButtonProps {
  onClick: () => void;
}

const ChangeButton: React.FC<ChangeButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: '8px 24px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#f0f0f2',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: 500,
      color: '#1a1a1c',
      transition: 'background-color 0.2s'
    }}
    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e5e7'}
    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f0f0f2'}
  >
    Change
  </button>
);

const GeneralSettings: React.FC = () => {
  const handleKeyboardShortcutsChange = () => {
    alert('Keyboard shortcuts configuration coming soon!');
  };

  const handleMicrophoneChange = () => {
    alert('Microphone selection coming soon!');
  };

  const handleLanguagesChange = () => {
    alert('Language selection coming soon!');
  };

  return (
    <div style={{ padding: '30px 0' }}>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: 600, 
        margin: '0 20px 20px 20px',
        color: '#1a1a1c'
      }}>
        General
      </h2>

      <SettingsRow
        title="Keyboard shortcuts"
        subtitle="Hold fn and speak."
        learnMoreLink="#"
        action={<ChangeButton onClick={handleKeyboardShortcutsChange} />}
      />

      <SettingsRow
        title="Microphone"
        subtitle="Built-in mic (recommended)"
        action={<ChangeButton onClick={handleMicrophoneChange} />}
      />

      <SettingsRow
        title="Languages"
        subtitle="Auto-detect (99 languages)"
        action={<ChangeButton onClick={handleLanguagesChange} />}
      />
    </div>
  );
};

export default GeneralSettings;
