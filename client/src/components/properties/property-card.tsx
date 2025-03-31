import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { type Property } from "@shared/schema";
import { Bed, Bath, ArrowUpRight, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export function PropertyCard({ property, featured }: PropertyCardProps) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  });

  return (
    <Card className={cn(
      "group cursor-pointer transition-all duration-300 hover:shadow-lg",
      featured && "col-span-2 row-span-2"
    )}>
      <CardContent className="p-0 relative overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
            Featured
          </div>
        )}
      </CardContent>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <p className="text-2xl font-bold text-primary mb-4">
        {formatter.format(parseFloat(property.price))}
        </p>
        <p className="text-gray-600 mb-4">{property.address}</p>
        <div className="flex gap-4 text-gray-500">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            <span>{property.m2} m2</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 py-4 bg-gray-50">
        <Link href={`/property/${property.id}`} className="flex items-center text-primary hover:underline">
          View Details
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}