import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";

const albanianLocations = [
  {
    image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a",
    title: "Butrint Ancient City",
    description: "UNESCO World Heritage site"
  },
  {
    image: "https://images.unsplash.com/photo-1592486058517-36236ba247c8",
    title: "Albanian Riviera",
    description: "Crystal clear waters"
  },
  {
    image: "https://images.unsplash.com/photo-1620127252536-03bdfcf6d5c3",
    title: "Berat Old Town",
    description: "City of a thousand windows"
  },
  {
    image: "https://images.unsplash.com/photo-1634416411623-7082a926b59f",
    title: "Theth National Park",
    description: "Stunning mountain landscapes"
  },
  {
    image: "https://images.unsplash.com/photo-1601581875039-e899893d520c",
    title: "Kruja Castle",
    description: "Historical fortress"
  }
];

export function DiscoverAlbania() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Discover Albania</h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Experience the hidden gem of Europe. From ancient ruins to pristine beaches,
          Albania offers a unique blend of history, culture, and natural beauty.
        </p>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {albanianLocations.map((location, index) => (
              <div key={index} className="flex-[0_0_33.33%] min-w-0 pl-4 first:pl-0">
                <Card className="overflow-hidden">
                  <div className="relative h-80">
                    <img
                      src={location.image}
                      alt={location.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {location.title}
                      </h3>
                      <p className="text-white/80">{location.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
