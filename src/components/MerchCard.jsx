import React, { useState } from 'react';

export default function MerchCard({ name, description, cover, purchaseLinks }) {
  // State to manage lightbox visibility
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to handle image click to open the lightbox
  const handleImageClick = () => {
    setIsLightboxOpen(true);
  };

  // Function to close the lightbox
  const closeLightbox = (event) => {
    // Prevent click events from propagating to the image inside the lightbox
    if (event.target.tagName !== 'IMG') {
      setIsLightboxOpen(false);
    }
  };

  return (
    <div className="merch-card w-full max-w-sm mx-auto p-4 rounded-lg shadow-md bg-white relative">
      {/* Lightbox for enlarged image */}
      {isLightboxOpen && (
        <div
          className="lightbox fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeLightbox} // Close lightbox when clicking outside the image
        >
          <img
            src={cover}
            alt={`Enlarged ${name}`}
            className="max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
          />
        </div>
      )}

      {/* Merch Cover */}
      <div
        className="cover-container mb-4 overflow-hidden rounded-md shadow-sm relative cursor-pointer"
        onClick={handleImageClick} // Handle click event on the cover container
      >
        <img src={cover} alt={`Image of ${name}`} className="merch-cover" />
        {/* Overlay Text */}
        <div className="overlay-text absolute inset-0 flex items-center justify-center text-white font-semibold text-sm bg-black bg-opacity-50">
          Click to enlarge
        </div>
      </div>

      {/* Merch Details */}
      <h3 className="text-lg font-medium text-gray-800 text-center">{name}</h3>
      <p className="text-sm text-gray-600 mt-2 text-center">{description}</p>

      {/* Purchase Links */}
      <div className="text-center mt-4">
        {purchaseLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-semibold block mt-2"
          >
            Buy on {link.platform}
          </a>
        ))}
      </div>
    </div>
  );
}
