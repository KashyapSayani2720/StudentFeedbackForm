import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useFeedbackContext } from '../../context/FeedbackContext';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Feedback(props) {
  const { id, branch_name, feedback, rating } = props.feedback;

  const { deleteFeedback } = useFeedbackContext();

  const handleDelete = async () => {
    try {
      await deleteFeedback(id);
      toast.success('Feedback Deleted Successfully.');
    } catch (error) {
      console.error('Error deleting feedback:', error);
      toast.error('Failed To Delete Feedback.');
    }
  };

  return (
    <div className="card m-3">
      <div className="card-header d-flex justify-content-between align-items-center">
        <span style={{ fontFamily: 'cursive' }}>{branch_name}</span>
        <button className="btn btn-sm btn-outline-danger" onClick={handleDelete}>
          <RiDeleteBinLine />
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title" style={{ fontFamily: 'cursive' }}>{feedback}</h5>
        <p style={{ fontFamily: 'cursive' }}>
          {rating}
        </p>
      </div>
    </div>
  );
}
