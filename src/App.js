import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { ConfirmationPage } from './pages/ConfirmationPage';
import './App.css';

function App() {
  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL} >
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='confirmation' element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
