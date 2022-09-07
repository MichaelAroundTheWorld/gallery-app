import { FC, useState } from 'react';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { pictures } from '../../data/data';
import { OpenedImg } from './OpenedImg/OpenedImg';
import { Gallery } from './Gallery/Gallery';

export const Main: FC = () => {
  const [show, setShow] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const handleClick = (picture: string) => {
    setCurrentImg(picture);
    setShow(true);
  };

  return (
    <Wrapper>
      <>
        {show ? <OpenedImg setShow={setShow} currentImg={currentImg} /> : <></>}
        <Gallery pictures={pictures} handleClick={handleClick} />
      </>
    </Wrapper>
  );
};
