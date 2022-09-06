import { FC } from 'react';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import styles from './Main.module.scss';
import { pictures } from '../../data/data';

export const Main: FC = () => {
  return (
    <Wrapper>
      <div className={styles.gallery}>
        {pictures.map((picture) => (
          <div className={styles.item}>
            <img src={picture.img} alt={picture.photographer} />
            <h3>{picture.photographer}</h3>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
