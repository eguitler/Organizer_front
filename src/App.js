import { ThemeProvider } from 'styled-components';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Aside from './components/Aside';
import Home from './pages/Home';

const theme = {
  primary: '#14b',

};

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Aside />
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
