import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

// Визначаємо тип для зображення
interface User {
  name: string;
}

interface Image {
  urls: {
    regular: string;
  };
  alt_description?: string;
  user: User;
  likes?: number;
  description?: string;
}

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image?: Image;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      {image && (
        <div className={styles.modalContent}>
          <img src={image.urls.regular} alt={image.alt_description} />
          <div className={styles.details}>
            <p>Author: {image.user.name}</p>
            <p>Likes: {image.likes}</p>
            <p>Description: {image.description || 'No description available'}</p>
          </div>
          <button onClick={onRequestClose} className={styles.closeButton}>
            Close
          </button>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
