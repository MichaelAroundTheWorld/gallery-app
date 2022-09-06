import { FC, ReactNode } from 'react';
import styles from './Wrapper.module.scss';

export const Wrapper: FC<{ children: ReactNode | JSX.Element }> = ({ children }) => {
  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <section className={styles.wrapper}>{children}</section>
      </div>
    </div>
  );
};
