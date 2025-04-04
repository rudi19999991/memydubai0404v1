
import React from 'react';
import ImageGallery from './ImageGallery';

interface PropertyImageGridProps {
  images: string[];
  title: string;
}

const PropertyImageGrid: React.FC<PropertyImageGridProps> = ({ images, title }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 h-96 relative z-10">
        <ImageGallery images={images} alt={title} />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {images.length > 1 && (
          <div className="h-[11rem] relative z-10">
            <img 
              src={images[1]} 
              alt={`${title} interior`} 
              className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => {
                const mainImageElement = document.querySelector('.md\\:col-span-2 .cursor-pointer');
                if (mainImageElement) {
                  (mainImageElement as HTMLElement).click();
                }
              }}
            />
          </div>
        )}
        {images.length > 2 && (
          <div className="h-[11rem] relative z-10">
            <img 
              src={images[2]} 
              alt={`${title} another view`} 
              className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => {
                const mainImageElement = document.querySelector('.md\\:col-span-2 .cursor-pointer');
                if (mainImageElement) {
                  (mainImageElement as HTMLElement).click();
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyImageGrid;