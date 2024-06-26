import React from 'react';
import styles from './ModalWindow.module.scss';
import { useAppContext } from '../../AppContext';

interface Props {
  setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalWindow: React.FC<Props> = ({ setVisibleModal }) => {
  const { setCart } = useAppContext();
  const handleClearCart = () => {
    setVisibleModal(false);
    setCart([]);
  };

  return (
    <div className={styles['modal-window']}>
      <h2 className={styles['modal-window__title']}>
        Checkout is not implemented yet. <br /> Do you want to clear the Cart?
      </h2>
      <div className={styles['modal-window__buttons']}>
        <button
          className={`${styles['modal-window__button']} ${styles['modal-window__button--confirm']}`}
          onClick={handleClearCart}
        >
          Confirm
        </button>
        <button
          className={`${styles['modal-window__button']} ${styles['modal-window__button--cancel']}`}
          onClick={() => setVisibleModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
