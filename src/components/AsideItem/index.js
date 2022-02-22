import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  StyledAsideItem,
  StyledItemTitle,
} from './styles';

/**
 * @constructor
 * @param {node} children icon from react-icons
 * @param {string} title string to show on hover
 */
const AsideItem = ({
  icon,
  title,
  onClick,
}) => {
  const [showTitle, setShowTitle] = useState(false);

  const toggleShowTitle = () => {
    setShowTitle(!showTitle);
  };

  return (
    <StyledAsideItem
      onMouseEnter={toggleShowTitle}
      onMouseLeave={toggleShowTitle}
      onClick={onClick}
    >
      {icon}
      {title && (
        <StyledItemTitle className={showTitle ? 'show' : ''}>
          {title}
        </StyledItemTitle>
      )}
    </StyledAsideItem>
  );
};

export default AsideItem;

AsideItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

AsideItem.defaultProps = {
  title: '',
  onClick: () => { },
};
