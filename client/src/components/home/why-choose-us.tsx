import { Briefcase, Building2, Users, Award } from "lucide-react";

interface FeaturePoint {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: FeaturePoint[] = [
  {
    icon: Award,
    title: "One of the leading agencies on the market",
    description: "Indeed, your property has specific features that only a trained real estate professional, with knowledge of the sector, will be able to highlight through an in-depth visit to your property."
  },
  {
    icon: Building2,
    title: "Optimal visibility of your property",
    description: "The property will be promoted on the brand's various communication media: national site, agency site, dedicated site and social networks. As part of the marketing of your property, you will benefit from access to an extranet account."
  },
  {
    icon: Users,
    title: "An agency at your service",
    description: "Experts in real estate transactions and management, our team of CENTURY 21 professionals supports you in carrying out your project."
  },
  {
    icon: Briefcase,
    title: "Trusted by hundred buyers",
    description: "Like CENTURY 21 Franchisee, you will benefit from the gold standard of a well-known global brand. The CENTURY 21 brand is the most recognized brand in the real estate industry with 94% of customers' knowledge."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <span className="text-sm font-medium text-zinc-400">LuxEstate</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            Why choose LuxEstate to sell or buy your property?
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Are you selling real estate and would like to obtain an estimate of your property for sale? You can benefit from a first approach to real estate sales prices by using our online estimator specific to our network. Have you considered your real estate project and want to take action? Make an appointment with one of our advisors to carry out a physical estimate with a precise diagnosis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-zinc-800 rounded-lg">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
