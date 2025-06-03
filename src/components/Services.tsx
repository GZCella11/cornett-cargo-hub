
import { Truck, Package, MapPin, Users, BarChart3, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Full Truckload (FTL)",
      description: "Dedicated truck capacity for large shipments with direct routes and faster transit times."
    },
    {
      icon: Package,
      title: "Less Than Truckload (LTL)",
      description: "Cost-effective shipping for smaller freight by sharing truck space with other shipments."
    },
    {
      icon: MapPin,
      title: "Expedited Shipping",
      description: "Priority delivery services for time-sensitive freight with guaranteed delivery windows."
    },
    {
      icon: Users,
      title: "Dedicated Fleet",
      description: "Exclusive carrier partnerships for regular routes and specialized transportation needs."
    },
    {
      icon: BarChart3,
      title: "Logistics Consulting",
      description: "Supply chain optimization and freight management strategies to reduce costs and improve efficiency."
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer service and real-time shipment tracking for complete peace of mind."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive freight brokerage services designed to meet all your transportation needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
