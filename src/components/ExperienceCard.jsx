import React from 'react';

const ExperienceCard = ({ title, organization, period, description, cover, Content }) => {
  return (
    <div className="experience-card border border-gray-300 rounded-lg shadow-md overflow-hidden">
      {/* Card Image */}
      <img src={cover} alt={`Cover for ${organization}`} className="w-full h-48 object-cover" />

      {/* Card Content */}
      <div className="p-4 bg-white">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <h3 className="text-lg font-semibold mb-1">{organization}</h3>
        <p className="text-sm text-gray-500 mb-4">{period}</p>
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        {/* Render the markdown content */}
        <Content />
      </div>
    </div>
  );
};

export default ExperienceCard;
