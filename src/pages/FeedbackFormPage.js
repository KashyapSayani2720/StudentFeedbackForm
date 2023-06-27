import FeedbackForm from '../components/Feedback/FeedbackForm';
import Navbar from '../components/common/Navbar';
import { FeedbackProvider } from '../context/FeedbackContext';

function FeedbackFormPage() {
  return (
    <>
      <Navbar/>
      <FeedbackProvider> 
        <div className='m-3'>
        <FeedbackForm/>
        </div>
      </FeedbackProvider>
    </>
  );
};

export default FeedbackFormPage;
