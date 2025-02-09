import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface PropertySearchProps {
  filters: {
    minPrice: number;
    maxPrice: number;
    beds: number;
    baths: number;
  };
  setFilters: (filters: any) => void;
}

export default function PropertySearch({ filters, setFilters }: PropertySearchProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <Label>Min Price</Label>
            <Input
              type="number"
              value={filters.minPrice}
              onChange={(e) =>
                setFilters({ ...filters, minPrice: Number(e.target.value) })
              }
              placeholder="Min Price"
            />
          </div>
          <div>
            <Label>Max Price</Label>
            <Input
              type="number"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: Number(e.target.value) })
              }
              placeholder="Max Price"
            />
          </div>
          <div>
            <Label>Bedrooms</Label>
            <Input
              type="number"
              value={filters.beds}
              onChange={(e) =>
                setFilters({ ...filters, beds: Number(e.target.value) })
              }
              placeholder="Min Bedrooms"
            />
          </div>
          <div>
            <Label>Bathrooms</Label>
            <Input
              type="number"
              value={filters.baths}
              onChange={(e) =>
                setFilters({ ...filters, baths: Number(e.target.value) })
              }
              placeholder="Min Bathrooms"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
