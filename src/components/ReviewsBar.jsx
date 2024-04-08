/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import WriteReviewModal from './WriteReviewModal';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const ReviewsBar = ({ getUserCatalog }) => {

  const [showReviewModal, setShowReviewModal] = useState(false);

  const openModal = () => {
    setShowReviewModal(true);
  }

  const closeModal = () => {
    setShowReviewModal(false);
  }


  return (
    <div className="fixed top-0 right-0">
    {showReviewModal ? <WriteReviewModal closeModal={closeModal} getUserCatalog={getUserCatalog} /> :
      <div>
        <Link to="/catalog">
          <button className="bg-custom-blue text-white px-4 py-2 rounded hover:border-custom-red mr-2">
          Personal Catalog
          </button>
        </Link>
        <button className="bg-custom-blue text-white px-4 py-2 rounded hover:border-custom-red mr-4" onClick={openModal}>
          Write Review
        </button>
       </div>
    }
  </div>
  )
}

export default ReviewsBar;