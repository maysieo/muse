/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import axios from 'axios';

const WriteReviewModal = ({ closeModal, getUserReviews }) => {
  const formRef = useRef();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userEmail = localStorage.getItem('userEmail');
    const formData = new FormData(formRef.current);
    formData.append('isFavorite', isFavorite);
    formData.append('userEmail', userEmail);

    let reviewObject = {};
    formData.forEach((value, key) => {reviewObject[key] = value});
    let jsonReview = JSON.stringify(reviewObject);

    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    axios.post('http://localhost:3000/review', jsonReview, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        getUserReviews();
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-4/5 md:w-1/2 flex flex-col">
        <span className="text-custom-red text-3xl px-4 self-end" onClick={closeModal}>&times;</span>
        <h2 className="text-2xl mb-4">Write a review</h2>
        <input className="border p-2 mb-4 w-1/2 float-left" type="text" placeholder="Title" name="Title" />
        <input className="border p-2 mb-4 w-1/2 float-left" type="text" placeholder="Artist" name="Artist" />
        <div className="flex">
          <input className="border p-2 mb-4 w-1/2 float-left mr-2" type="text" placeholder="Museum or Gallery" name="Repository" />
          <input className="border p-2 mb-4 w-1/4 float-left ml-2 mr-2" type="text" placeholder="City" name="city" />
          <input className="border p-2 mb-4 w-1/4 ml-2" type="date" name="dateSeen"/>
        </div>
        <textarea className="border p-2 mb-4 w-full h-32" placeholder="Your review" name="review"/>
        <div>
          <input className="border p-2 mb-4 w-1/4 float-left" type="number" min="0" max="5" step="0.5" placeholder="Rating (0-5)" name="rating"/>
          <button onClick={handleFavoriteClick} className={` ${isFavorite ? 'bg-custom-red text-white' : ''}`}> Add to favorites</button>
          <input type="file" accept="image/*" className="border p-2 mb-4 w-1/2 float-right" name="image"/>
        </div>
        <button className="hover:bg-custom-yellow">Submit</button>
      </div>
    </form>
  )
}

export default WriteReviewModal;