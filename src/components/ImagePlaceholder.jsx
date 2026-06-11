import React from 'react';

// ============================================================
// IMAGE PLACEHOLDER COMPONENT
// Replace imagePlaceholder: true with your actual image paths
// in src/data/menuData.js to show real food photos
// ============================================================

const ImagePlaceholder = ({ alt = 'Food image', className = '', emoji = '🍽️' }) => {
  return (
    <div
      className={`bg-gradient-to-br from-brand-cream-dark to-brand-warm flex flex-col items-center justify-center gap-2 ${className}`}
      role="img"
      aria-label={alt}
    >
      <span className="text-5xl">{emoji}</span>
      <span className="text-xs text-brand-charcoal-light font-body opacity-60 text-center px-2">
        Add your photo here
      </span>
    </div>
  );
};

// Map meal names to relevant emojis
export const getMealEmoji = (name = '') => {
  const n = name.toLowerCase();
  if (n.includes('chicken') && n.includes('chip')) return '🍗';
  if (n.includes('ofada') || n.includes('rice')) return '🍚';
  if (n.includes('noodle')) return '🍜';
  if (n.includes('soup') || n.includes('pepper')) return '🍲';
  if (n.includes('fish')) return '🐟';
  if (n.includes('plantain')) return '🌿';
  return '🍽️';
};

export default ImagePlaceholder;
