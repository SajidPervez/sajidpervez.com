import React from 'react';

export default function PodcastCard({ name, host, description, cover, url }) {
  return (
    <div className="podcast-card w-full max-w-sm mx-auto p-4 rounded-lg shadow-md bg-white">
      {/* Podcast Cover */}
      <div className="cover-container mb-4 overflow-hidden rounded-md shadow-sm flex justify-center items-center">
        <img src={cover.src} alt={cover.alt} className="podcast-cover" />
      </div>

      {/* Podcast Details */}
      <h3 className="text-lg font-medium text-gray-800 text-center">{name}</h3>
      <p className="text-gray-500 text-center">Hosted by {host}</p>
      
      {/* Description Section */}
      <p className="text-sm text-gray-600 mt-2 text-center">{description}</p>

      {/* Link to the Podcast's Page */}
      {url && (
        <div className="text-center mt-4">
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">
            Listen Now
          </a>
        </div>
      )}
    </div>
  );
}
