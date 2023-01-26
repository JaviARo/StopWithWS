import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StopPage from './pages/StopPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/stop/:username" element={<StopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
