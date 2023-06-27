import React, { useContext, useRef } from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FeedbackForm() {
  const branchRef = useRef(null);
  const feedbackRef = useRef(null);
  const ratingRef = useRef(null);

  const feedback_context = useContext(FeedbackContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Access form field values using the ref objects
    const branch = branchRef.current.value;
    const feedback = feedbackRef.current.value;
    const rating = ratingRef.current.value;

    const result = await feedback_context.createFeedback(branch, feedback, rating);

    if (result) {
      navigate("/");
      toast.success('Feedback Saved Successfully.');
    } else {
      toast.error('Failed To Save Feedback.');
    }
  };

  return (
    <div className="container bg-info" style={{borderRadius:"50px 0px 50px 0px"}}>
      <div className="row">
        <div className="col-12">
          <h3 className="text-center mb-4 text-white mt-4" style={{ fontFamily: 'cursive' }}>Student Feedback Form</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="branch_name" className="text-white text" style={{ fontFamily: 'cursive' }}>
                Branch Name
              </label>
              <input
                type="text"
                className="form-control"
                id="branch_name"
                placeholder="Enter Branch Name"
                ref={branchRef}
                style={{ fontFamily: 'cursive' }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="feedback" className="text-white" style={{ fontFamily: 'cursive' }}>
                Feedback
              </label>
              <textarea
                className="form-control"
                id="feedback"
                placeholder="Enter Feedback"
                ref={feedbackRef}
                style={{ fontFamily: 'cursive' }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating" className="text-white" style={{ fontFamily: 'cursive' }}>
                Rating
              </label>
              <input
                type="number"
                className="form-control"
                id="rating"
                min={0}
                max={5}
                placeholder="Enter Rating"
                ref={ratingRef}
                style={{ fontFamily: 'cursive' }}
                required
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-success m-3" style={{ fontFamily: 'cursive' }}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}
