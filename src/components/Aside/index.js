import { FaHome } from 'react-icons/fa';
import { VscProject } from 'react-icons/vsc';
import {
  MdOutlineCategory,
} from 'react-icons/md';
import {
  BsListTask,
  BsTrophy,
  BsFlag,
  BsCalendar4Week,
} from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import StyledAside from './styles';
import AsideItem from '../AsideItem';
import AsideMenu from '../AsideMenu';

const Aside = () => (
  <StyledAside>
    <div>
      <Link to='/'>
        <AsideItem
          icon={<FaHome size={40} />}
          title='Home'
        />
      </Link>

      <Link to='/projects'>
        <AsideItem
          icon={<VscProject size={30} />}
          title='Projects'
        />
      </Link>

      <Link to='/lists'>
        <AsideItem
          icon={<BsListTask size={30} />}
          title='Lists'
        />
      </Link>

      <Link to='/goals'>
        <AsideItem
          icon={<BsTrophy size={30} />}
          title='Goals'
        />
      </Link>

      <Link to='/categories'>
        <AsideItem
          icon={<MdOutlineCategory size={30} />}
          title='Categories'
        />
      </Link>

      <Link to='/priorities'>
        <AsideItem
          icon={<BsFlag size={30} />}
          title='Priorities'
        />
      </Link>

      <Link to='/calendar'>
        <AsideItem
          icon={<BsCalendar4Week size={30} />}
          title='Calendar'
        />
      </Link>
    </div>

    <AsideMenu
      icon={<BiUserCircle size={35} />}
      title='Profile and settings'
    >
      <p>(IMG) Ezequiel Guitler</p>
      <p>____________________</p>
      <p>Profile</p>
      <p>Preferences</p>
      <p>____________________</p>
      <p>Log Out</p>
    </AsideMenu>

  </StyledAside>
);

export default Aside;
