import { Card, CardContent } from "@/components/ui/card";
import { Search, Handshake, FileText, Users } from "lucide-react";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Users,
    title: "Consultation",
    subtitle: "Expert Guidance",
    description: "Professional advice to help you make informed real estate decisions"
  },
  {
    icon: Search,
    title: "Property Search",
    subtitle: "Finding Your Ideal Property",
    description: "Comprehensive search to find properties that match your criteria"
  },
  {
    icon: Handshake,
    title: "Negotiation",
    subtitle: "Securing the Best Deals",
    description: "Expert negotiation to ensure you get the best possible terms"
  },
  {
    icon: FileText,
    title: "Legal Support",
    subtitle: "Ensuring a Smooth Process",
    description: "Professional guidance through all legal aspects of your transaction"
  }
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-primary font-medium mb-2">{service.subtitle}</p>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
