import PropTypes from 'prop-types';
import StyledButton from './styles';

const Button = ({
  children,
  variant,
  size,
}) => {
  console.log('asd >> props');
  return (
    <StyledButton
      className={`${variant} ${size}`}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.any.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  size: '',
};
