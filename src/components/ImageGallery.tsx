import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from './ui/button';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(false);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Add keyboard event listener when the dialog is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, images.length]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer h-full w-full">
          <img 
            src={images[0]} 
            alt={alt} 
            className="w-full h-full object-cover rounded-lg hover:opacity-95 transition-opacity"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-6xl p-0 bg-transparent border-none z-50">
        <div className="relative bg-black/90 rounded-lg overflow-hidden">
          <div className="flex items-center justify-center h-[80vh] p-4">
            <img 
              src={images[currentImage]} 
              alt={`${alt} - view ${currentImage + 1}`} 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          
          {images.length > 1 && (
            <>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {images.length > 1 && images.map((_, index) => (
              <Button 
                key={index} 
                variant="ghost" 
                size="sm" 
                className={`w-2 h-2 p-0 rounded-full ${index === currentImage ? 'bg-white' : 'bg-white/50'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage(index);
                }}
              />
            ))}
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10"
            onClick={() => setOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;