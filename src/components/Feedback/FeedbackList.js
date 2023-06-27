import React, { useContext, useEffect } from 'react'
import Feedback from './Feedback';
import FeedbackContext from '../../context/FeedbackContext';
import Loading from '../common/Loading';

export default function FeedbackList() {

    const feedback_context = useContext(FeedbackContext);

    useEffect(() => {
        feedback_context.getFeedbacks();
        // eslint-disable-next-line
    }, []);

    if (feedback_context.isLoading) {
        return <Loading />
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {feedback_context.feedbacks.map((item) => {
                        return (
                            <div className='col-3' key={item.id}>
                                <Feedback feedback={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}
