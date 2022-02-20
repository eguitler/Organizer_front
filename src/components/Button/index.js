import PropTypes from 'prop-types';
import StyledButton from './styles';

const Button = ({
  children,
  variant,
  size,
}) => (
  <StyledButton
    className={`${variant} ${size}`}
  >
    {children}
  </StyledButton>
);

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  size: '',
};
