import PropTypes from 'prop-types';
import Link from './styles';

/**
 * @param {node} children text to show
 * @param {string} to path to navigate
 */
const AsideMenuItem = ({
  children,
  to,
}) => (
  <Link to={to}>
    {children}
  </Link>
);

export default AsideMenuItem;

AsideMenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

AsideMenuItem.defaultProps = {
  to: '',
};
