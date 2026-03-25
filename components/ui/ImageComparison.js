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

  const handleMouseDown = useCallback(() => setIsDragging(true), []);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleMouseMove = useCallback((e) => handleMove(e.clientX), [handleMove]);

  const handleTouchStart = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  const handleTouchEnd = useCallback(() => setIsDragging(false), []);
  const handleTouchMove = useCallback((e) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('touchstart', handleTouchStart, { passive: false });
    el.addEventListener('touchmove', handleTouchMove, { passive: false });
    el.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd, handleMouseUp]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative w-full select-none rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] md:aspect-[16/10]",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      style={{ touchAction: 'none' }}
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
