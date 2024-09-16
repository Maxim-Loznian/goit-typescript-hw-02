import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <TailSpin color="#0073e6" height={80} width={80} />
    </div>
  );
};

export default Loader;
