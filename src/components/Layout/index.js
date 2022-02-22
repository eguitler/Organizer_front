import styled from 'styled-components';
import PropTypes from 'prop-types';
import Aside from '../Aside';

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
`;

const Section = styled.section`
  width: auto;
  margin-left: ${({ theme }) => theme.config.asideWidth};
`;

const Layout = ({ children }) => (
  <Main>
    <Aside />
    <Section>
      {children}
    </Section>
  </Main>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
