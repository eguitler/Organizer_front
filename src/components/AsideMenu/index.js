import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import AsideItem from '../AsideItem';

const Container = styled.div`
  position: relative;
`;

const Menu = styled.div`
  position: absolute;
  width: 200px;
  border: 1px solid #888;
  left: 90%;
  bottom: 30%;
  border-radius: 5px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const AsideMenu = ({
  children,
  title,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <AsideItem
        icon={icon}
        title={!isOpen && title}
        onClick={() => setIsOpen((open) => !open)}
      />
      {isOpen && (
        <Menu>
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
