import React from 'react';

export default function BookCard({ title, author, cover, comments, url, status }) {
  return (
    <div className="book-card w-full max-w-sm mx-auto p-4 rounded-lg shadow-md bg-white relative mb-6">
      {/* Book Cover */}
      <div className="cover-container mb-4 overflow-hidden rounded-md shadow-sm">
        <img src={cover.src} alt={cover.alt} className="book-cover w-full h-auto object-cover rounded-md" />
      </div>

      {/* Book Details */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{author}</p>
        <p className="text-sm text-gray-600 mb-4">{comments}</p>
        
        {/* Link to the Book's Page */}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-semibold block mt-2"
          >
            Link
          </a>
        )}

        {/* Status Display */}
        {status && (
          <p className={`text-xs mt-2 italic ${status === 'to-read' ? 'text-yellow-600' : status === 'reading' ? 'text-green-600' : 'text-gray-500'}`}>
            {status === 'to-read' && 'To Read'}
            {status === 'reading' && 'Currently Reading'}
            {status === 'read' && 'Read'}
          </p>
        )}
      </div>
    </div>
  );
}
