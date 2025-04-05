import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import airAlbania from '/images/air_albania.jpg';
import gjirokaster from '/images/Gjirokaster-bazaar.jpg';
import korce from '/images/Korce-Albania.jpg';
import kep_merli from '/images/kep_merli.jpg';
import tirana from '/images/Tirana.jpg';
import ksamil from '/images/ksamilit.jpg';
import theth from '/images/theth.jpg';


const albanianLocations = [
  {
    image: airAlbania,
    title: "Air Albania Stadium",
    description: "Newest stadium in Tirana city"
  },
  {
    image: tirana,
    title: "The Capital city",
    description: "A vibrant and dynamic city that is never quiet"
  },
  {
    image: korce,
    title: "Korce Albania",
    description: "Little Paris of Albania"
  },
  {
    image: gjirokaster,
    title: "Gjirokastra Old Town",
    description: "UNESCO-listed gem, known for its well-preserved Ottoman-era stone houses, cobbled streets, and its rich and old culture"
  },
  {
    image: kep_merli,
    title: "Kep Merli",
    description: "Secluded paradise with breathtaking views and pristine waters"
  },
  {
    image: ksamil,
    title: "Ksamil Bay",
    description: "Crystal-clear turquoise waters, white sandy beaches, the Maldives of Europe"
  },
  {
    image: theth,
    title: "Theth National Park",
    description: "A paradise for hikers and nature lovers, Theth offers breathtaking trails, waterfalls, and the iconic Blue Eye, making it a must-visit destination for adventure seekers"
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
