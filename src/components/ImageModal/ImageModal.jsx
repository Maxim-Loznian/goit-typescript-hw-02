import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, image }) => {
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

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }),
    alt_description: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    likes: PropTypes.number,
    description: PropTypes.string,
  }),
};

export default ImageModal;
