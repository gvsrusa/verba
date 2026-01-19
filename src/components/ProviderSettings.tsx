import React from 'react';

interface ProviderSettingsProps {
  provider: string;
  setProvider: (val: string) => void;
  apiKey: string;
  setApiKey: (val: string) => void;
  model: string;
  setModel: (val: string) => void;
}

const ProviderSettings: React.FC<ProviderSettingsProps> = ({ 
  provider, setProvider, apiKey, setApiKey, model, setModel 
}) => {
  
  const handleProviderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newProvider = e.target.value;
    setProvider(newProvider);
    // Auto-set default model for convenience
    if (newProvider === "groq") setModel("whisper-large-v3");
    else if (newProvider === "grok") setModel("grok-beta"); 
    else if (newProvider === "openrouter") setModel("openai/whisper-large-v3");
    else if (newProvider === "gemini") setModel("google/gemini-flash-1.5");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Providers & Models</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Provider</label>
        <select 
          value={provider} 
          onChange={handleProviderChange}
          style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
        >
            <option value="groq">Groq</option>
            <option value="openrouter">OpenRouter</option>
            <option value="grok">Grok (xAI)</option>
            <option value="gemini">Gemini</option>
        </select>
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
            Choose the AI provider you want to use for transcription.
        </p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>API Key</label>
        <input 
            type="password" 
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-..."
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
        />
         <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
            Your API key is stored locally on your device.
        </p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Model ID</label>
        <input 
            type="text" 
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="e.g. whisper-large-v3"
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
        />
      </div>
    </div>
  );
};

export default ProviderSettings;
