import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LandingPage = () => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/images')
      .then(response => {
        console.log('Here is response data', response.data);
        const imageUrls = response.data.map((item) => {
          return item.ImageURL
        });
        setImages(imageUrls);
        setCurrentImage(imageUrls[0]);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
      setCurrentImage(images[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, [images, index]);

  return (
    <div>
      <img className={`h-[80vh] transition-opacity duration-500 ${currentImage ? 'opacity-100' : 'opacity-0'}`} src={currentImage} alt="Rotating image" />
    </div>
  );
}

export default LandingPage;