/* eslint-disable */
import desktopImage from '../../assets/tvshowmanager.png';

import {
  LandingContainer,
  LandingBg,
  BgImg,
  LandingContent,
  LandingH1,
  LandingP,
  LandingButton,
  LandingButtonContainer,
} from './LandingElements';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin } from '../../actions/user';
const Landing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BgImgSrc =  desktopImage ;
  const handleClick = () => {
    dispatch(signin('', navigate));
  };
  return (
    <LandingContainer>
      <LandingBg>
        <BgImg alt="LandingBgImg" src={BgImgSrc} />
      </LandingBg>
      <LandingContent>
        <LandingH1>TV Show Manager</LandingH1>
        <LandingP>Keep track of all your favorite shows in one place.</LandingP>
      </LandingContent>
      <LandingButtonContainer>
        <LandingButton onClick={handleClick}>Sign in as Guest</LandingButton>
      </LandingButtonContainer>
    </LandingContainer>
  );
};

export default Landing;
