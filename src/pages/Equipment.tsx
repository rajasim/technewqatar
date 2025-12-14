import { Truck, Users, Wrench, HardHat } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Equipment = () => {
  const machinery = [
    { name: "Excavators", quantity: "15+", description: "Various sizes for different project requirements" },
    { name: "Bulldozers", quantity: "8+", description: "Heavy-duty earthmoving equipment" },
    { name: "Cranes", quantity: "12+", description: "Mobile and tower cranes for lifting operations" },
    { name: "Concrete Mixers", quantity: "20+", description: "Transit mixers and batching plants" },
    { name: "Compactors", quantity: "10+", description: "Soil and asphalt compaction equipment" },
    { name: "Loaders", quantity: "18+", description: "Wheel and track loaders" },
    { name: "Graders", quantity: "6+", description: "Motor graders for road construction" },
    { name: "Pavers", quantity: "8+", description: "Asphalt and concrete paving machines" },
  ];

  const vehicles = [
    { name: "Dump Trucks", quantity: "25+", description: "Various capacities for material transport" },
    { name: "Flatbed Trucks", quantity: "15+", description: "Equipment and material transportation" },
    { name: "Water Tankers", quantity: "10+", description: "Dust suppression and site maintenance" },
    { name: "Service Vehicles", quantity: "20+", description: "Pickup trucks and utility vehicles" },
    { name: "Fuel Trucks", quantity: "5+", description: "On-site refueling services" },
    { name: "Mobile Workshops", quantity: "4+", description: "On-site equipment maintenance" },
  ];

  const manpower = [
    { category: "Engineers", count: "50+", description: "Civil, structural, and MEP engineers" },
    { category: "Project Managers", count: "15+", description: "Experienced construction management professionals" },
    { category: "Site Supervisors", count: "30+", description: "Qualified site supervision staff" },
    { category: "Skilled Workers", count: "200+", description: "Carpenters, masons, steel fixers, and more" },
    { category: "Equipment Operators", count: "80+", description: "Licensed and certified operators" },
    { category: "Safety Officers", count: "20+", description: "HSE professionals and safety coordinators" },
  ];

  const capabilities = [
    {
      title: "Engineering Excellence",
      description: "Our engineering team brings decades of combined experience in civil, structural, and MEP engineering, ensuring technical excellence in every project.",
    },
    {
      title: "Project Management",
      description: "Experienced project managers skilled in delivering complex government and infrastructure projects on time and within budget.",
    },
    {
      title: "Quality Control",
      description: "Dedicated quality control team ensuring compliance with specifications, standards, and client requirements throughout project execution.",
    },
    {
      title: "Safety Management",
      description: "Comprehensive HSE team implementing and monitoring safety protocols to maintain the highest standards of workplace safety.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">Equipment & Resources</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              State-of-the-art construction equipment, modern vehicle fleet, and skilled workforce 
              enabling us to deliver projects of any scale and complexity.
            </p>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Wrench className="w-10 h-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Construction Machinery</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Truck className="w-10 h-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">80+</div>
                <div className="text-sm text-muted-foreground">Vehicle Fleet</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-10 h-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">400+</div>
                <div className="text-sm text-muted-foreground">Total Workforce</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <HardHat className="w-10 h-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Engineers</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Construction Machinery</h2>
            <p className="text-lg text-muted-foreground">
              Modern, well-maintained equipment ensuring efficient project execution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {machinery.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <Badge className="bg-primary text-primary-foreground">{item.quantity}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://miaoda-site-img.s3cdn.medo.dev/images/26042f9b-0acc-4f5a-b5e6-4f87c59ce474.jpg"
              alt="Construction equipment"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Vehicle Fleet</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive fleet supporting all aspects of construction operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {vehicles.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <Badge className="bg-secondary text-secondary-foreground">{item.quantity}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Manpower Strength</h2>
            <p className="text-lg text-muted-foreground">
              Skilled and experienced workforce across all construction disciplines
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {manpower.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{item.category}</CardTitle>
                    <Badge className="bg-accent text-accent-foreground">{item.count}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Engineering Team Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              Professional expertise driving project success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;
