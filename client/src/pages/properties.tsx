import { PropertyCard } from "@/components/properties/property-card";
import { data_properties } from "@server/data"; // Your existing data import

export default function Properties() {
  // Directly use your static data instead of API call
  const properties = data_properties;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Available Properties</h1>

      {/* Simplified rendering without loading state */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}