import FeedbackForm from '../components/Feedback/FeedbackForm';
import Navbar from '../components/common/Navbar';
import { FeedbackProvider } from '../context/FeedbackContext';

function FeedbackFormPage() {
  return (
    <>
      <Navbar/>
      <FeedbackProvider> 
        <FeedbackForm/>
      </FeedbackProvider>
    </>
  );
};

export default FeedbackFormPage;
