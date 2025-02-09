export const mockProperties = [
  {
    id: 1,
    title: "Luxury Waterfront Villa",
    description: "Stunning modern villa with panoramic ocean views, featuring top-of-the-line finishes and amenities.",
    price: 2500000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500,
    address: "123 Ocean Drive, Miami Beach, FL",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1531877025030-f7696a50770f",
      "https://images.unsplash.com/photo-1445510861639-5651173bc5d5"
    ],
    featured: 1
  },
  {
    id: 2,
    title: "Modern Mountain Estate",
    description: "Contemporary mountain home with floor-to-ceiling windows and breathtaking views.",
    price: 3200000,
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5200,
    address: "456 Mountain View Rd, Aspen, CO",
    images: [
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90",
      "https://images.unsplash.com/photo-1633432695467-66403aa96bfd",
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61"
    ],
    featured: 1
  }
];

export const mockAgents = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Luxury Property Specialist",
    bio: "With over 15 years of experience in luxury real estate, Sarah has a proven track record of exceptional service.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    email: "sarah@luxestate.com",
    phone: "(555) 123-4567"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Senior Real Estate Advisor",
    bio: "Michael specializes in high-end properties and has facilitated over $500M in transactions.",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff",
    email: "michael@luxestate.com",
    phone: "(555) 987-6543"
  }
];

// Initialize mock data
import { storage } from "@/server/storage";

export async function initializeMockData() {
  const properties = await storage.getProperties();
  if (properties.length === 0) {
    for (const property of mockProperties) {
      await storage.createProperty(property);
    }
    for (const agent of mockAgents) {
      await storage.createAgent(agent);
    }
  }
}
