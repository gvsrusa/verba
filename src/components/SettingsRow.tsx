import React from 'react';

interface SettingsRowProps {
  title: string;
  subtitle?: React.ReactNode;
  learnMoreLink?: string;
  action?: React.ReactNode;
}

const SettingsRow: React.FC<SettingsRowProps> = ({ 
  title, 
  subtitle, 
  learnMoreLink,
  action 
}) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 20px',
      borderBottom: '1px solid #f0f0f0'
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ 
          fontWeight: 500, 
          fontSize: '0.95rem',
          color: '#1a1a1c',
          marginBottom: subtitle ? '4px' : 0
        }}>
          {title}
        </div>
        {(subtitle || learnMoreLink) && (
          <div style={{ 
            fontSize: '0.85rem', 
            color: '#6e6e73'
          }}>
            {subtitle}
            {learnMoreLink && (
              <>
                {subtitle && ' '}
                <a 
                  href={learnMoreLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#1a1a1c', 
                    textDecoration: 'none',
                    fontWeight: 500
                  }}
                >
                  Learn more →
                </a>
              </>
            )}
          </div>
        )}
      </div>
      {action && (
        <div style={{ marginLeft: '20px', flexShrink: 0 }}>
          {action}
        </div>
      )}
    </div>
  );
};

export default SettingsRow;
