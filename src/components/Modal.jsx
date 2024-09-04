import React from 'react';
import '../css/modal.css'; 

function Modal({ isOpen, onClose, videoUrl }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        
        <h2>Fragman</h2>

        <hr style={{marginBottom:"10px", borderColor:"red"}}></hr>
       
       
        <iframe 
          width="840" 
          height="472" 
          src={videoUrl} 
          title="Trailer" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Modal;
