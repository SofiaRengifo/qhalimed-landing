import { useState } from "react";
import "./VideoModal.css";

function VideoModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      {/* Botón que abre el modal */}
      <a href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>
        video
      </a>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/oCfVEXpacXg"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoModal;
