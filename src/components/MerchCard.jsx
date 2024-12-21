import React, { useState } from 'react';

export default function MerchCard({ name, description, cover, purchaseLinks }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleImageClick = () => {
    console.log("Image clicked");
    setIsLightboxOpen(true);
  };

  const closeLightbox = (event) => {
    console.log("Close lightbox event triggered");
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
          onClick={closeLightbox}
        >
          <img
            src={cover.src}
            alt={cover.alt}
            className="max-w-full max-h-full pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Merch Cover */}
      <div
        className="cover-container mb-4 overflow-hidden rounded-md shadow-sm relative"
        onClick={handleImageClick}
      >
        <img src={cover.src} alt={cover.alt} className="merch-cover" />
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
