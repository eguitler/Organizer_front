import { ThemeProvider } from 'styled-components';
import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import theme from './styles/theme';
import Layout from './components/Layout';
import GlobalStyle from './styles/global';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />

            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
