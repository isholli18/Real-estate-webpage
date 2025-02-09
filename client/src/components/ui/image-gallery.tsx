import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative h-[500px] overflow-hidden rounded-lg">
        <img
          src={images[selectedImage]}
          alt="Property"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Card
            key={index}
            className={cn(
              "cursor-pointer overflow-hidden",
              selectedImage === index && "ring-2 ring-primary"
            )}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-24 object-cover"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
