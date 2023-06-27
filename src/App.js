import './App.css';
import { Route, Routes } from 'react-router-dom';
import FeedbackPage from './pages/FeedbackPage';
import FeedbackFormPage from './pages/FeedbackFormPage';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App"> 
        <ToastContainer />
        <Routes>
          <Route path='/' element={<FeedbackPage />} />
          <Route path='/createfeedback' element={<FeedbackFormPage />} />
        </Routes> 
    </div> 
  );
}

export default App;
