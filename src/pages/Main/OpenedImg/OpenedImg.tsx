import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from './OpenedImg.module.scss';

interface OpenedImgProps {
  setShow: (value: boolean) => void;
  currentImg?: string;
}

export const OpenedImg: FC<OpenedImgProps> = ({ setShow, currentImg }) => {
  return (
    <div className={styles.openImg}>
      <img src={currentImg} alt="img" />
      <CloseIcon className={styles.close} onClick={() => setShow(false)} />
    </div>
  );
};
