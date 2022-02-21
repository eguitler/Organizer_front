import { FaHome } from 'react-icons/fa';
import { VscProject } from 'react-icons/vsc';
import { HiMoon } from 'react-icons/hi';
import {
  MdSettings,
  MdOutlineCategory,
} from 'react-icons/md';
import {
  BsListTask,
  BsTrophy,
  BsFlag,
  BsCalendar4Week,
  BsSunFill,
} from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { useState } from 'react';
import StyledAside from './styles';
import AsideItem from '../AsideItem';

const Aside = () => {
  const [nightmode, setNightmode] = useState(false);

  function toggleNightmode() {
    setNightmode(!nightmode);
  }

  return (
    <StyledAside>
      <div>
        <AsideItem title='Home'>
          <FaHome
            size={40}
          />
        </AsideItem>
        <AsideItem title='Projects'>
          <VscProject
            size={30}
          />
        </AsideItem>
        <AsideItem title='Lists'>
          <BsListTask
            size={30}
          />
        </AsideItem>
        <AsideItem title='Goals'>
          <BsTrophy
            size={30}
          />
        </AsideItem>
        <AsideItem title='Categories'>
          <MdOutlineCategory
            size={30}
          />
        </AsideItem>
        <AsideItem title='Priorities'>
          <BsFlag
            size={30}
          />
        </AsideItem>
        <AsideItem title='Calendar'>
          <BsCalendar4Week
            size={30}
          />
        </AsideItem>
      </div>

      <div>
        <AsideItem title='mode'>
          {
            nightmode ? (
              <BsSunFill
                size={30}
                onClick={() => toggleNightmode()}
              />
            ) : (
              <HiMoon
                size={30}
                onClick={() => toggleNightmode()}
              />
            )
          }
        </AsideItem>
        <AsideItem title='Profile and settings'>
          <BiUserCircle
            size={30}
          />
        </AsideItem>
      </div>
    </StyledAside>
  );
};

export default Aside;
