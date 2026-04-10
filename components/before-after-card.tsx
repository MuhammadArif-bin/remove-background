'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BeforeAfterCardProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export default function BeforeAfterCard({
  beforeImage,
  afterImage,
  title,
}: BeforeAfterCardProps) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="group rounded-xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div
        className="relative w-full h-64 md:h-72 overflow-hidden bg-gray-100 cursor-pointer"
        onMouseEnter={() => setShowAfter(true)}
        onMouseLeave={() => setShowAfter(false)}
        onClick={() => setShowAfter(!showAfter)}
      >
        {/* Before Image */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${showAfter ? 'opacity-0' : 'opacity-100'}`}>
          <img
            src={beforeImage}
            alt={`${title} - Before`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Before
          </div>
        </div>

        {/* After Image */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${showAfter ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={afterImage}
            alt={`${title} - After`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
            After
          </div>
        </div>

        {/* Hover Info */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
          <div className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {showAfter ? 'Click to see Before' : 'Click to see After'}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4 border-t border-border">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground mt-1">
          {showAfter ? 'Background removed successfully' : 'Original image with background'}
        </p>
      </div>
    </div>
  );
}
