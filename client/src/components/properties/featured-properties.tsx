import { useQuery } from "@tanstack/react-query";
import { PropertyCard } from "./property-card";
import type { Property } from "@shared/schema.ts";
//import { mockProperties } from "@/lib/propertyData";
import { data_properties } from "../../../../server/data";

export default function FeaturedProperties() {
  const { data: properties, isLoading } = useQuery<Property[]>({
    queryKey: ["/api/properties/featured"],
    queryFn: () => Promise.resolve(data_properties.filter(property => property.featured === 1)),
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-96 bg-gray-100 animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties?.map((property) => (
        <PropertyCard key={property.id} property={property} featured={true} />
      ))}
    </div>
  );
}
