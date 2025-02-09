import { useQuery } from "@tanstack/react-query";
import PropertySearch from "@/components/properties/property-search";
import { PropertyCard } from "@/components/properties/property-card";
import { type Property } from "@shared/schema";
import { useState } from "react";

export default function Properties() {
  const { data: properties, isLoading } = useQuery<Property[]>({
    queryKey: ["/api/properties"],
  });

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 10000000,
    beds: 0,
    baths: 0,
  });

  const filteredProperties = properties?.filter((property) => {
    return (
      property.price >= filters.minPrice &&
      property.price <= filters.maxPrice &&
      property.bedrooms >= filters.beds &&
      property.bathrooms >= filters.baths
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Available Properties</h1>
      
      <div className="mb-8">
        <PropertySearch filters={filters} setFilters={setFilters} />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-96 bg-gray-100 animate-pulse rounded-lg"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties?.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}
