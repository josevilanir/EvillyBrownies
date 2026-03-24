'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * ImageComparison Component
 * Adapted from 21st.dev (minhxthanh/image-comparison-slider)
 * Enhanced with Lucide icons and better styling for Evilly Brownies.
 */
export const ImageComparison = ({ 
  beforeImage, 
  afterImage, 
  altBefore = 'Antes', 
  altAfter = 'Depois',
  className
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    let newPosition = ((clientX - rect.left) / rect.width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));
    
    setSliderPosition(newPosition);
  }, [isDragging]);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => handleMove(e.clientX);
  
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative w-full select-none rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] md:aspect-[16/10]",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Bottom Layer - Comparison/Common) */}
      <div className="absolute inset-0 w-full h-full bg-neutral-100">
        <img
          src={beforeImage}
          alt={altBefore}
          className="w-full h-full object-cover grayscale-[0.3]"
          draggable="false"
        />
      </div>

      {/* After Image (Top Layer - Ours/Premium) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden transition-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt={altAfter}
          className="w-full h-full object-cover"
          draggable="false"
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/50 cursor-ew-resize flex items-center justify-center z-10"
        style={{ left: `calc(${sliderPosition}% - 0.5px)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className={cn(
          "bg-white rounded-full h-12 w-12 flex items-center justify-center shadow-2xl border border-primary/10 transition-transform duration-200 backdrop-blur-sm",
          isDragging ? 'scale-110' : 'scale-100 hover:scale-105'
        )}>
          <div className="flex items-center gap-1 text-primary">
            <ChevronLeft className="w-5 h-5" />
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
