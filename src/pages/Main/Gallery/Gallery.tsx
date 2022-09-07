import { FC } from 'react';
import { picture } from '../../../data/data.model';
import styles from './Gallery.module.scss';

interface GalleryProps {
  pictures: picture[];
  handleClick: (img: string) => void;
}

export const Gallery: FC<GalleryProps> = ({ pictures, handleClick }) => {
  return (
    <div className={styles.gallery}>
      {pictures.map((picture) => (
        <div className={styles.item}>
          <img
            onClick={() => handleClick(picture.img)}
            src={picture.img}
            alt={picture.photographer}
          />
          <h3>{picture.photographer}</h3>
        </div>
      ))}
    </div>
  );
};
