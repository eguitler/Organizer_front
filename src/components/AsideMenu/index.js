import PropTypes from 'prop-types';
import {
  useEffect,
  useRef,
  useState,
} from 'react';
import AsideItem from '../AsideItem';
import { Container, Menu } from './styles';

const AsideMenu = ({
  children,
  title,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const newTitle = !isOpen ? title : '';

  const toggleIsOpen = () => {
    setIsOpen((open) => !open);
  };

  useEffect(() => {
    function handleClick(e) {
      if (!menuRef?.current?.contains(e.target)) {
        window.removeEventListener('click', handleClick);
        setIsOpen(false);
      }
    }

    if (isOpen) {
      window.addEventListener('click', handleClick);
    }
  }, [isOpen]);

  return (
    <Container>
      <AsideItem
        icon={icon}
        title={newTitle}
        onClick={toggleIsOpen}
      />
      {isOpen && (
        <Menu ref={menuRef}>
          {children}
        </Menu>
      )}
    </Container>
  );
};

export default AsideMenu;

AsideMenu.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  icon: PropTypes.node.isRequired,
};

AsideMenu.defaultProps = {
  title: '',
};
