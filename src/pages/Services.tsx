import { Building2, Hammer, Construction, Factory, Wrench, Package, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Civil & Structural Construction",
      description: "Comprehensive civil and structural construction services for development and commercial projects, including foundations, concrete works, steel structures, and complete building construction.",
      features: [
        "Foundation and earthworks",
        "Concrete and reinforcement works",
        "Steel structure fabrication and erection",
        "Building envelope construction",
      ],
    },
    {
      icon: Hammer,
      title: "Development Infrastructure Projects",
      description: "Specialized expertise in delivering large-scale development infrastructure projects, working closely with Qatar development entities and Semi-development Authorities.",
      features: [
        "Public facilities construction",
        "Development building projects",
        "Infrastructure development",
        "Compliance with development standards",
      ],
    },
    {
      icon: Construction,
      title: "Roads, Drainage & Utilities",
      description: "Complete road construction, drainage systems, and utility installation services, ensuring efficient infrastructure development across Qatar.",
      features: [
        "Road construction and paving",
        "Drainage system installation",
        "Water and sewage networks",
        "Utility infrastructure development",
      ],
    },
    {
      icon: Factory,
      title: "Commercial & Industrial Buildings",
      description: "Design-build services for commercial and industrial facilities, delivering functional and efficient spaces that meet specific operational requirements.",
      features: [
        "Commercial building construction",
        "Industrial facility development",
        "Warehouse and storage facilities",
        "Office building construction",
      ],
    },
    {
      icon: Wrench,
      title: "Fit-Out & Renovation",
      description: "Professional fit-out and renovation services for existing structures, transforming spaces to meet modern standards and client requirements.",
      features: [
        "Interior fit-out works",
        "Building renovation and refurbishment",
        "MEP system upgrades",
        "Modernization projects",
      ],
    },
    {
      icon: Package,
      title: "Turnkey Construction Solutions",
      description: "End-to-end turnkey construction services, managing every aspect of your project from design and planning to completion and handover.",
      features: [
        "Complete project management",
        "Design and engineering",
        "Construction and installation",
        "Testing and commissioning",
      ],
    },
    {
      icon: Settings,
      title: "Maintenance & Facility Services",
      description: "Ongoing maintenance and facility management services to ensure the longevity and optimal performance of constructed assets.",
      features: [
        "Preventive maintenance programs",
        "Facility management services",
        "Emergency repair services",
        "Asset lifecycle management",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive construction services tailored for development and infrastructure projects across Qatar, 
              delivered with excellence and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm mb-3">Key Features:</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Technewqatar?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Development Approved</h3>
                  <p className="text-muted-foreground">
                    Fully registered with MMUP/MME and approved by Ashghal, ensuring compliance with all 
                    development construction requirements and standards.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                  <p className="text-muted-foreground">
                    Our team of skilled engineers, project managers, and construction professionals brings 
                    decades of combined experience to every project.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    ISO 9001, 14001, and 45001 certified, demonstrating our commitment to quality, 
                    environmental responsibility, and workplace safety.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Modern Equipment</h3>
                  <p className="text-muted-foreground">
                    State-of-the-art construction equipment and machinery, ensuring efficient project 
                    execution and superior results.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://miaoda-site-img.s3cdn.medo.dev/images/7e4daae7-641d-491b-b412-eb62fdd004f1.jpg"
                alt="Construction site"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl xl:text-4xl font-bold mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-lg mb-8 opacity-95">
            Contact us today to learn more about our services and how we can help bring your construction project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-card/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-card/20">
              <Link to="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
