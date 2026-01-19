import React, { useState } from 'react';
import SettingsRow from './SettingsRow';
import ToggleSwitch from './ToggleSwitch';

interface SystemSettingsState {
  launchAtLogin: boolean;
  showFlowBar: boolean;
  showInDock: boolean;
  dictationSounds: boolean;
  muteMusicWhileDictating: boolean;
  autoAddToDictionary: boolean;
  smartFormatting: boolean;
  emailAutoSignature: boolean;
  creatorMode: boolean;
}

const SystemSettings: React.FC = () => {
  const [settings, setSettings] = useState<SystemSettingsState>({
    launchAtLogin: true,
    showFlowBar: true,
    showInDock: true,
    dictationSounds: true,
    muteMusicWhileDictating: false,
    autoAddToDictionary: true,
    smartFormatting: true,
    emailAutoSignature: false,
    creatorMode: false
  });

  const updateSetting = (key: keyof SystemSettingsState, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const SectionHeader = ({ title }: { title: string }) => (
    <div style={{
      padding: '20px 20px 10px 20px',
      fontSize: '0.85rem',
      fontWeight: 600,
      color: '#6e6e73'
    }}>
      {title}
    </div>
  );

  return (
    <div style={{ padding: '30px 0', overflowY: 'auto' }}>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: 600, 
        margin: '0 20px 10px 20px',
        color: '#1a1a1c'
      }}>
        System
      </h2>

      {/* App settings section */}
      <SectionHeader title="App settings" />
      
      <SettingsRow
        title="Launch app at login"
        action={
          <ToggleSwitch 
            checked={settings.launchAtLogin} 
            onChange={(v) => updateSetting('launchAtLogin', v)} 
          />
        }
      />

      <SettingsRow
        title="Show Flow bar at all times"
        action={
          <ToggleSwitch 
            checked={settings.showFlowBar} 
            onChange={(v) => updateSetting('showFlowBar', v)} 
          />
        }
      />

      <SettingsRow
        title="Show app in dock"
        action={
          <ToggleSwitch 
            checked={settings.showInDock} 
            onChange={(v) => updateSetting('showInDock', v)} 
          />
        }
      />

      {/* Sound section */}
      <SectionHeader title="Sound" />

      <SettingsRow
        title="Dictation sound effects"
        action={
          <ToggleSwitch 
            checked={settings.dictationSounds} 
            onChange={(v) => updateSetting('dictationSounds', v)} 
          />
        }
      />

      <SettingsRow
        title="Mute music while dictating"
        action={
          <ToggleSwitch 
            checked={settings.muteMusicWhileDictating} 
            onChange={(v) => updateSetting('muteMusicWhileDictating', v)} 
          />
        }
      />

      {/* Extras section */}
      <SectionHeader title="Extras" />

      <SettingsRow
        title="Auto-add to dictionary"
        subtitle="Adds corrected words automatically"
        action={
          <ToggleSwitch 
            checked={settings.autoAddToDictionary} 
            onChange={(v) => updateSetting('autoAddToDictionary', v)} 
          />
        }
      />

      <SettingsRow
        title="Smart Formatting"
        subtitle="Automatically formats your dictation."
        learnMoreLink="#"
        action={
          <ToggleSwitch 
            checked={settings.smartFormatting} 
            onChange={(v) => updateSetting('smartFormatting', v)} 
          />
        }
      />

      <SettingsRow
        title="Email auto signature"
        subtitle="Add a Flow signature when dictating an email"
        action={
          <ToggleSwitch 
            checked={settings.emailAutoSignature} 
            onChange={(v) => updateSetting('emailAutoSignature', v)} 
          />
        }
      />

      <SettingsRow
        title="Creator mode"
        subtitle='Show "Dictating with Wispr Flow" when dictating'
        action={
          <ToggleSwitch 
            checked={settings.creatorMode} 
            onChange={(v) => updateSetting('creatorMode', v)} 
          />
        }
      />

      {/* Data section */}
      <SectionHeader title="Data" />

      <SettingsRow
        title="Reset app"
        subtitle="Reset only if advised by Flow support."
        learnMoreLink="#"
        action={
          <button
            onClick={() => alert('Reset functionality coming soon!')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#f0f0f2',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: '#1a1a1c',
              transition: 'background-color 0.2s',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e5e7'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f0f0f2'}
          >
            Reset & restart
          </button>
        }
      />
    </div>
  );
};

export default SystemSettings;
