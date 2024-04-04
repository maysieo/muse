import React, {useState} from 'react';

const ReviewsBar = () => {

  return (
    <>
      <button className="bg-custom-blue text-white px-4 py-2 rounded hover:border-custom-red">
        Personal Catalog
      </button>
      <button className="bg-custom-blue text-white px-4 py-2 rounded hover:border-custom-red">
        Write Review
      </button>
    </>
  )
}

export default ReviewsBar;