import React from 'react';

export default function BookCard({ title, author, cover, comments, url, status }) {
  return (
    <div className="book-card w-full max-w-xs mx-auto">
      {/* Book Cover */}
      <div className="cover-container mb-4 overflow-hidden rounded-md shadow-md">
        <img src={cover.src} alt={`Cover of ${title}`} className="book-cover" />
      </div>

      {/* Book Details */}
      <h3 className="text-lg font-medium text-gray-800 text-center">{title}</h3>
      <p className="text-gray-500 text-center">{author}</p>
      
      {/* Comments Section */}
      <p className="text-sm text-gray-600 mt-2 text-center">{comments}</p>

      {/* Link to the Book's Page */}
      {url && (
        <div className="text-center mt-4">
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">
            Link
          </a>
        </div>
      )}

      {/* Status Display */}
      {status && (
        <p className={`text-xs mt-2 text-center italic ${status === 'to-read' ? 'text-yellow-600' : status === 'reading' ? 'text-green-600' : 'text-gray-500'}`}>
          {status === 'to-read' && 'To Read'}
          {status === 'reading' && 'Currently Reading'}
          {status === 'read' && 'Read'}
        </p>
      )}
    </div>
  );
}
