// src/components/ImageCard/ImageCard.tsx
import React from 'react';
import { Image } from '../../types'; // Імпортуйте тип Image
import styles from './ImageCard.module.css';

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={styles.imageCard} onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
