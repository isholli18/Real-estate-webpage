import { useQuery } from "@tanstack/react-query";
import FeaturedProperties from "@/components/properties/featured-properties";
import { Services } from "@/components/home/services";
import { KeyAdvantages } from "@/components/home/key-advantages";
import { DiscoverAlbania } from "@/components/home/discover-albania";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { type Agent } from "@shared/schema";

export default function Home() {
  const { data: agents } = useQuery<Agent[]>({
    queryKey: ["/api/agents"],
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            Find Your Perfect Luxury Home
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover extraordinary properties in the most sought-after locations
          </p>
          <Link href="/properties">
            <Button size="lg" className="text-lg">
              View Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Properties
          </h2>
          <FeaturedProperties />
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Key Advantages */}
      <KeyAdvantages />

      {/* Discover Albania */}
      <DiscoverAlbania />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Agents Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Agents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agents?.map((agent) => (
              <div key={agent.id} className="text-center">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{agent.name}</h3>
                <p className="text-primary mb-2">{agent.title}</p>
                <p className="text-gray-600">{agent.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}