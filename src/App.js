import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import store from './store';

// Components
import MainLayout from './layouts/MainLayout';
import MovieList from './features/movies/MovieList';
import MovieForm from './features/movies/MovieForm';
import ActorList from './features/actors/ActorList';
import ProducerList from './features/producers/ProducerList';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f5c518', // IMDb yellow
    },
    background: {
      default: '#121212',
      paper: '#1a1a1a',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="/movies/add" element={<MovieForm />} />
              <Route path="/movies/edit/:id" element={<MovieForm />} />
              <Route path="/actors" element={<ActorList />} />
              <Route path="/producers" element={<ProducerList />} />
            </Routes>
          </MainLayout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
