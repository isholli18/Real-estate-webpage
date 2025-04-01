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
            At SSInvestmentBroker, we specialize in finding unique and high-value properties across Albania, 
            from premium investment-free parcels in the stunning Riviera to luxurious modern developments under construction or already constructed. 
            Whether you are looking for a dream home or a profitable investment, we provide exclusive opportunities in the country’s most desirable places.
            We are committed to offering security and transparency throughout every step of the property-buying process, 
            ensuring that all transactions are fully compliant with legal regulations.
            </p>
            <p className="text-lg text-gray-600">
            Our experienced team provides personalized guidance and dedicated customer support, 
            making your journey to purchasing property in Albania smooth and worry-free.
            Let us help you discover the best real estate opportunities in one of Europe’s most exciting 
            and fast-growing markets—where breathtaking landscapes meet exceptional investment potential.

            </p>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-vector/real-estate-searching_52683-46407.jpg"
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
