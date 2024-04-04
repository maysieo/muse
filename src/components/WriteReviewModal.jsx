/* eslint-disable react/prop-types */
import React from 'react';

const WriteReviewModal = ({ closeModal }) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Write a review</h2>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Artist" />
        <input type="text" placeholder="Museum or Gallery" />
        <label>
          <input type="radio" /> I saw it live
          <input type="radio" /> I saw it elsewhere
        </label>
        <input type="date" />
        <textarea placeholder="Your review" />
        <input type="number" min="0" max="5" step="0.5" placeholder="Rating (0-5)" />
        <button>Add to favorites</button>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default WriteReviewModal