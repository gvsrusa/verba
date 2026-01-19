import React, { useState } from 'react';
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
  const [shortcut, setShortcut] = useState('Hold fn and speak');
  const [isRecordingShortcut, setIsRecordingShortcut] = useState(false);

  const [microphone, setMicrophone] = useState('Built-in mic (recommended)');
  const [isSelectingMic, setIsSelectingMic] = useState(false);

  const [language, setLanguage] = useState('Auto-detect (99 languages)');
  const [isSelectingLanguage, setIsSelectingLanguage] = useState(false);

  // Mock data
  const microphones = ['Built-in mic (recommended)', 'AirPods Pro', 'External USB Microphone'];
  const languages = ['Auto-detect (99 languages)', 'English (US)', 'English (UK)', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'];

  // Handle Shortcut Recording
  const handleShortcutClick = () => {
    setIsRecordingShortcut(true);
    // In a real app, we would add a window event listener here
  };

  const handleShortcutKeyDown = (e: React.KeyboardEvent) => {
    if (isRecordingShortcut) {
        e.preventDefault();
        // Simple mock of capturing keys
        let keys = [];
        if (e.metaKey) keys.push('Cmd');
        if (e.ctrlKey) keys.push('Ctrl');
        if (e.altKey) keys.push('Opt');
        if (e.shiftKey) keys.push('Shift');
        if (e.key && !['Meta', 'Control', 'Alt', 'Shift'].includes(e.key)) {
            keys.push(e.key.toUpperCase());
        }
        
        if (keys.length > 0) {
            setShortcut(keys.join(' + '));
            setIsRecordingShortcut(false);
        }
    }
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
        subtitle={
            isRecordingShortcut ? (
                <input 
                    autoFocus
                    value="Press keys..."
                    readOnly
                    onKeyDown={handleShortcutKeyDown}
                    onBlur={() => setIsRecordingShortcut(false)}
                    style={{
                        border: '1px solid #007aff',
                        borderRadius: '4px',
                        padding: '2px 8px',
                        outline: 'none',
                        color: '#007aff',
                        fontSize: '0.85rem'
                    }}
                />
            ) : shortcut
        }
        learnMoreLink="#"
        action={
            <ChangeButton 
                onClick={handleShortcutClick} 
            />
        }
      />

      <SettingsRow
        title="Microphone"
        subtitle={
            isSelectingMic ? (
                <select
                    autoFocus
                    value={microphone}
                    onChange={(e) => {
                        setMicrophone(e.target.value);
                        setIsSelectingMic(false);
                    }}
                    onBlur={() => setIsSelectingMic(false)}
                    style={{
                        fontSize: '0.85rem',
                        padding: '2px 4px',
                        borderRadius: '4px',
                        borderColor: '#ccc'
                    }}
                >
                    {microphones.map(mic => (
                        <option key={mic} value={mic}>{mic}</option>
                    ))}
                </select>
            ) : microphone
        }
        action={<ChangeButton onClick={() => setIsSelectingMic(true)} />}
      />

      <SettingsRow
        title="Languages"
        subtitle={
            isSelectingLanguage ? (
                <select
                     autoFocus
                     value={language}
                     onChange={(e) => {
                         setLanguage(e.target.value);
                         setIsSelectingLanguage(false);
                     }}
                     onBlur={() => setIsSelectingLanguage(false)}
                     style={{
                         fontSize: '0.85rem',
                         padding: '2px 4px',
                         borderRadius: '4px',
                         borderColor: '#ccc',
                         maxWidth: '200px'
                     }}
                >
                    {languages.map(lang => (
                        <option key={lang} value={lang}>{lang}</option>
                    ))}
                </select>
            ) : language
        }
        action={<ChangeButton onClick={() => setIsSelectingLanguage(true)} />}
      />
    </div>
  );
};

export default GeneralSettings;
