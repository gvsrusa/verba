import React, { useState } from 'react';
import { X, User, Sliders, Monitor, Globe, Hash } from 'lucide-react';
import ProviderSettings from './ProviderSettings';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Provider Props passed down
  provider: string;
  setProvider: (val: string) => void;
  apiKey: string;
  setApiKey: (val: string) => void;
  model: string;
  setModel: (val: string) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ 
  isOpen, onClose, provider, setProvider, apiKey, setApiKey, model, setModel 
}) => {
  const [activeTab, setActiveTab] = useState('general');

  if (!isOpen) return null;

  const renderContent = () => {
    switch (activeTab) {
        case 'providers':
            return <ProviderSettings 
                provider={provider} 
                setProvider={setProvider} 
                apiKey={apiKey} 
                setApiKey={setApiKey} 
                model={model} 
                setModel={setModel} 
            />;
        case 'general':
            return (
                <div style={{ padding: '20px' }}>
                    <h3>General Settings</h3>
                    <p style={{ color: '#666' }}>General settings like Keyboard shortcuts would go here.</p>
                </div>
            );
        default:
            return <div style={{ padding: '20px' }}>Construction in progress...</div>;
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.4)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(2px)'
    }}>
      <div style={{
        width: '800px',
        height: '600px',
        backgroundColor: '#fff',
        borderRadius: '16px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
        display: 'flex',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button 
            onClick={onClose}
            style={{ position: 'absolute', top: '15px', right: '15px', padding: '5px', zIndex: 10 }}
        >
            <X size={20} color="#666" />
        </button>

        {/* Sidebar */}
        <div style={{ 
            width: '240px', 
            backgroundColor: '#f9f9fb', 
            padding: '30px 15px',
            borderRight: '1px solid var(--border-color)'
        }}>
            <h4 style={{ color: '#888', fontSize: '0.75rem', marginBottom: '10px', paddingLeft: '10px', letterSpacing: '1px' }}>SETTINGS</h4>
            <SettingTab id="general" label="General" icon={Sliders} active={activeTab} onClick={setActiveTab} />
            <SettingTab id="system" label="System" icon={Monitor} active={activeTab} onClick={setActiveTab} />
            <SettingTab id="providers" label="Providers" icon={Globe} active={activeTab} onClick={setActiveTab} />
            <SettingTab id="vibe" label="Vibe coding" icon={Hash} active={activeTab} onClick={setActiveTab} />
            
            <h4 style={{ color: '#888', fontSize: '0.75rem', marginBottom: '10px', marginTop: '20px', paddingLeft: '10px', letterSpacing: '1px' }}>ACCOUNT</h4>
            <SettingTab id="account" label="Account" icon={User} active={activeTab} onClick={setActiveTab} />
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
            {renderContent()}
        </div>
      </div>
    </div>
  );
};

const SettingTab = ({ id, label, icon: Icon, active, onClick }: any) => (
    <button 
        onClick={() => onClick(id)}
        style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: '8px 10px',
            marginBottom: '4px',
            borderRadius: '6px',
            backgroundColor: active === id ? '#e8e8ea' : 'transparent',
            color: '#1a1a1c',
            fontWeight: active === id ? 600 : 500,
            textAlign: 'left',
            fontSize: '0.9rem'
        }}
    >
        <Icon size={16} style={{ marginRight: '10px', opacity: 0.7 }} />
        {label}
    </button>
);

export default SettingsModal;
