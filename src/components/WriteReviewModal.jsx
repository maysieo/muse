/* eslint-disable react/prop-types */
import React from 'react';

const WriteReviewModal = ({ closeModal }) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-4/5 md:w-1/2 flex flex-col">
        <span className="text-custom-red text-3xl px-4 self-end" onClick={closeModal}>&times;</span>
        <h2 className="text-2xl mb-4">Write a review</h2>
        <input className="border p-2 mb-4 w-1/2 float-left" type="text" placeholder="Title" />
        <input className="border p-2 mb-4 w-1/2 float-left" type="text" placeholder="Artist" />
        <div className="flex">
          <input className="border p-2 mb-4 w-1/2 float-left mr-2" type="text" placeholder="Museum or Gallery" />
          <input className="border p-2 mb-4 w-1/4 float-left ml-2 mr-2" type="text" placeholder="City" />
          <input className="border p-2 mb-4 w-1/4 ml-2" type="date" />
        </div>
        <textarea className="border p-2 mb-4 w-full h-32" placeholder="Your review" />
        <div>
          <input className="border p-2 mb-4 w-1/2 float-left" type="number" min="0" max="5" step="0.5" placeholder="Rating (0-5)" />
          <button className="float-right hover:bg-custom-red hover:text-white"> Add to favorites</button>
        </div>
        <button className="hover:bg-custom-yellow">Submit</button>
      </div>
    </div>
  )
}

export default WriteReviewModal