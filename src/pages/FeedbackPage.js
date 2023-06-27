import React, { useContext, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import FeedbackList from '../components/Feedback/FeedbackList';
import  { FeedbackProvider } from '../context/FeedbackContext';

export default function FeedbackPage() {
  return (
    <div>
      <Navbar/>
      <FeedbackProvider>
        <FeedbackList/>
      </FeedbackProvider>
    </div>
  )
}