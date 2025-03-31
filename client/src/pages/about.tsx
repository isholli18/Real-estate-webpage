import { useQuery } from "@tanstack/react-query";
import { type Agent } from "@shared/schema";

export default function About() {
  const { data: agents } = useQuery<Agent[]>({
    queryKey: ["/api/agents"],
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* About Section */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold mb-8">About SSInvestmentBroker</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              SSInvestmentBroker is the premier destination for luxury real estate,
              offering an unparalleled portfolio of exceptional properties and
              personalized service that exceeds expectations.
            </p>
            <p className="text-lg text-gray-600">
              Our team of experienced professionals is dedicated to helping you
              find your perfect home or investment property, with a deep
              understanding of the luxury market and a commitment to excellence.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e"
              alt="Office"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section 
      <section>
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {agents?.map((agent) => (
            <div key={agent.id} className="text-center">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{agent.name}</h3>
              <p className="text-primary mb-4">{agent.title}</p>
              <p className="text-gray-600 mb-4">{agent.bio}</p>
              <div className="text-gray-600">
                <p>{agent.email}</p>
                <p>{agent.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </section>*/}
    </div>
  );
}
