import React, { createContext, useState, useContext } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = (props) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getFeedbacks = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://curious-bee-96.hasura.app/api/rest/feedback', {
        headers: {
          'x-hasura-admin-secret': 'qJAkHjo8pZzV6ZlocZI206keEb4dcFV9fN6cdLpplR1ZG3VraEOSe4i6Qclv9d2h'
        }
      });
      const data = await response.json();
      setFeedbacks(data.Student_Feedback);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  const createFeedback = async (branch_name, feedback, rating) => {
    try {
      setIsLoading(true);
      const response = await fetch('https://curious-bee-96.hasura.app/api/rest/createfeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': 'qJAkHjo8pZzV6ZlocZI206keEb4dcFV9fN6cdLpplR1ZG3VraEOSe4i6Qclv9d2h'
        },
        body: JSON.stringify({
          branch_name: branch_name,
          feedback: feedback,
          rating: rating
        })
      });

      setIsLoading(false);

      if (response.ok) {
        const res = await response.json();
        setFeedbacks([...feedbacks, res.insert_Student_Feedback.returning[0]]);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error creating feedback:', error);
    }
  };

  const deleteFeedback = async (id) => {
    try {
      // setIsLoading(true);
      await fetch(`https://curious-bee-96.hasura.app/api/rest/deletefeedback?id=${id}`, {
        method: 'DELETE',
        headers: {
          'x-hasura-admin-secret': 'qJAkHjo8pZzV6ZlocZI206keEb4dcFV9fN6cdLpplR1ZG3VraEOSe4i6Qclv9d2h'
        }
      });
      // setIsLoading(false);
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));

      return true;

    } catch (error) {
      console.error('Error deleting feedback:', error);

      return false;
    }
  };

  const context = {
    feedbacks: feedbacks,
    isLoading: isLoading,
    getFeedbacks: getFeedbacks,
    createFeedback: createFeedback,
    deleteFeedback: deleteFeedback
  };

  return (
    <FeedbackContext.Provider value={context}>
      {props.children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => useContext(FeedbackContext);

export default FeedbackContext;