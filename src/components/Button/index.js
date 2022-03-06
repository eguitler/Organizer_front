import PropTypes from 'prop-types';
import StyledButton from './styles';

const Button = ({
  children,
  variant,
  size,
  type,
  onClick,
}) => (
  <StyledButton
    className={`${variant} ${size}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  size: '',
  type: 'submit',
  onClick: () => { },
};
