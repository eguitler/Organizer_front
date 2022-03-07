import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from './components/Layout';
import {
  Calendar,
  Projects,
  Categories,
  Goals,
  Home,
  Lists,
  Priorities,
  Profile,
  Settings,
} from './pages';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/lists' element={<Lists />} />
              <Route path='/goals' element={<Goals />} />
              <Route path='/categories' element={<Categories />} />
              <Route path='/priorities' element={<Priorities />} />
              <Route path='/calendar' element={<Calendar />} />

              <Route path='/profile' element={<Profile />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
