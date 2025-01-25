import { useState } from "react";
import { cn } from "@/lib/utils";

interface Image {
  url: string;
  alt: string;
}

interface ProductGalleryProps {
  images: Image[];
}

export const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="hidden lg:flex lg:col-span-2 flex-col gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative aspect-square overflow-hidden rounded-lg border",
              selectedImage === index
                ? "border-accent ring-2 ring-accent"
                : "border-muted hover:border-accent/50"
            )}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
      <div className="lg:col-span-10 aspect-square relative rounded-lg overflow-hidden">
        <img
          src={images[selectedImage].url}
          alt={images[selectedImage].alt}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};