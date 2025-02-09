import { Card, CardContent } from "@/components/ui/card";

interface Advantage {
  dots: number;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    dots: 1,
    title: "Expert Guidance",
    description: "Our seasoned real estate professionals provide expert guidance and advice throughout your property journey, from market insights to negotiation strategies, we ensure you make informed decisions."
  },
  {
    dots: 2,
    title: "Tailored Solutions",
    description: "We understand that every client has unique requirements. That's why we offer tailored solutions to meet your specific needs with a personalized and satisfactory experience."
  },
  {
    dots: 3,
    title: "Market Knowledge",
    description: "With in-depth market knowledge, we keep you informed about real estate trends, property values, and investment opportunities. Our expertise helps you make sound real estate decisions."
  }
];

export function KeyAdvantages() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Key Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-none bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(advantage.dots)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-primary"
                    />
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
