import React, {useState} from 'react';
import WriteReviewModal from './WriteReviewModal';

const ReviewsBar = () => {

  const [showReviewModal, setShowReviewModal] = useState(false);

  const openModal = () => {
    setShowReviewModal(true);
  }

  const closeModal = () => {
    setShowReviewModal(false);
  }

  return (
    <div>
    {showReviewModal ? <WriteReviewModal closeModal={closeModal}/> :
      <div>
        <button className="bg-custom-blue text-white px-4 py-2 rounded hover:border-custom-red">
          Personal Catalog
        </button>
        <button className="bg-custom-blue text-white px-4 py-2 rounded hover:border-custom-red" onClick={openModal}>
          Write Review
        </button>
      </div>
    }
  </div>
  )
}

export default ReviewsBar;