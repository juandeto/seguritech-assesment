import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';

import HomePage from './pages/HomePage';
import SeriesPage from './pages/SeriesPage';
import MoviesPage from './pages/MoviesPage';

import Layout from './components/common/Layout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
