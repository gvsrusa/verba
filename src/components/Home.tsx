import React from 'react';
import { ArrowRight, Clock, Star, Zap } from 'lucide-react';

const Home = () => {
    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '10px' }}>Good afternoon</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>Ready to capture your thoughts?</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
                <div style={cardStyle}>
                    <div style={{ marginBottom: '15px', color: '#666' }}><Clock size={24} /></div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '5px' }}>Recent Notes</h3>
                    <p style={{ fontSize: '0.9rem', color: '#888' }}>View your latest transcriptions</p>
                    <div style={{ marginTop: 'auto', paddingTop: '15px', display: 'flex', alignItems: 'center', fontSize: '0.85rem', fontWeight: 600 }}>
                        Go to Notes <ArrowRight size={14} style={{ marginLeft: '5px' }} />
                    </div>
                </div>
                <div style={cardStyle}>
                    <div style={{ marginBottom: '15px', color: '#666' }}><Star size={24} /></div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '5px' }}>Favorites</h3>
                    <p style={{ fontSize: '0.9rem', color: '#888' }}>Access your important clips</p>
                    <div style={{ marginTop: 'auto', paddingTop: '15px', display: 'flex', alignItems: 'center', fontSize: '0.85rem', fontWeight: 600 }}>
                        View Favorites <ArrowRight size={14} style={{ marginLeft: '5px' }} />
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', padding: '25px', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                <div style={{ backgroundColor: '#f0f0f2', padding: '15px', borderRadius: '50%' }}>
                    <Zap size={24} color="#1a1a1c" />
                </div>
                <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '4px' }}>Pro Tip</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        Use <span style={{ fontWeight: 600, color: '#000', backgroundColor: '#e8e8ea', padding: '2px 6px', borderRadius: '4px' }}>Option + Space</span> to start recording from anywhere.
                    </p>
                </div>
            </div>
        </div>
    );
};

const cardStyle: React.CSSProperties = {
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '16px',
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
    minHeight: '180px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
};

export default Home;
