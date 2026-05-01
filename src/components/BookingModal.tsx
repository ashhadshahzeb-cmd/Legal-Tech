import React from 'react';
import { X } from 'lucide-react';
import HubSpotCustomForm from './HubSpotCustomForm';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(8px)',
          cursor: 'pointer'
        }} 
      />

      {/* Modal Content */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '680px',
        background: 'white',
        borderRadius: '24px',
        padding: '60px 50px',
        boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
        animation: 'modalFadeIn 0.3s ease-out',
        maxHeight: '95vh',
        overflowY: 'auto',
        msOverflowStyle: 'none', /* IE and Edge */
        scrollbarWidth: 'none' /* Firefox */
      }}>
        <style>{`
          div::-webkit-scrollbar { display: none; }
          @keyframes modalFadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--muted)',
            padding: '5px'
          }}
        >
          <X size={24} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--secondary)', marginBottom: '12px' }}>Free consultation</div>
          <h2 style={{ fontSize: '32px', color: 'var(--ink)', fontWeight: 700, marginBottom: '12px', letterSpacing: '-0.02em' }}>Book Your Scoping Call</h2>
          <p style={{ fontSize: '15px', color: 'var(--muted)', fontWeight: 300, maxWidth: '400px', margin: '0 auto' }}>We'll map out your intake workflow on the call.</p>
        </div>

        <HubSpotCustomForm />

        <div style={{ marginTop: '20px', fontSize: '11px', color: 'var(--muted)', textAlign: 'center' }}>
          All enquiries are protected under mutual NDA · No commitment required
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default BookingModal;
