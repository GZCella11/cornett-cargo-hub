
import { Award, Users, Truck, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Truck, number: "10,000+", label: "Shipments Delivered" },
    { icon: Users, number: "500+", label: "Satisfied Clients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Target, number: "99.5%", label: "On-Time Delivery" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              About Cornett Freight Brokerage
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded with a commitment to excellence, Cornett Freight Brokerage has been 
              connecting shippers with reliable carriers for over 15 years. Our experienced 
              team understands the complexities of modern logistics and works tirelessly 
              to provide cost-effective, reliable transportation solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We pride ourselves on building lasting relationships with both our clients 
              and carrier partners. Our personalized approach, combined with cutting-edge 
              technology, ensures that every shipment receives the attention it deserves.
            </p>
            
            {/* Mission Statement */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To provide exceptional freight brokerage services that exceed expectations 
                while building lasting partnerships through integrity, reliability, and 
                innovative solutions.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
