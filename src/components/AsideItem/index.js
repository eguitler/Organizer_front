import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  StyledItem,
  StyledItemTitle,
} from './styles';

/**
 * @constructor
 * @param {node} children icon from react-icons
 * @param {string} title string to show on hover
 */
const AsideItem = ({ children, title }) => {
  const [showTitle, setShowTitle] = useState(false);

  const toggleShowTitle = () => {
    setShowTitle(!showTitle);
  };

  return (
    <StyledItem
      onMouseEnter={toggleShowTitle}
      onMouseLeave={toggleShowTitle}
    >
      {children}
      <StyledItemTitle className={showTitle ? 'show' : ''}>
        {title}
      </StyledItemTitle>
    </StyledItem>
  );
};

export default AsideItem;

AsideItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

AsideItem.defaultProps = {
  title: '',
};
