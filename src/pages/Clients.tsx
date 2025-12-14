import { Building2, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Clients = () => {
  const governmentClients = [
    "Public Works Authority (Ashghal)",
    "Ministry of Municipality",
    "Ministry of Transport",
    "Qatar General Electricity & Water Corporation (Kahramaa)",
    "Qatar Petroleum",
    "Qatar Rail",
    "Qatar Foundation",
    "Hamad Medical Corporation",
  ];

  const corporateClients = [
    "Major Construction Companies",
    "Real Estate Developers",
    "Industrial Corporations",
    "Commercial Enterprises",
    "Hospitality Groups",
    "Retail Chains",
  ];

  const testimonials = [
    {
      quote: "Techneqatar has consistently delivered high-quality work on our infrastructure projects. Their commitment to safety, quality, and timely completion makes them a valued partner for government construction projects.",
      author: "Government Authority Representative",
      position: "Project Director",
      organization: "Qatar Government Entity",
    },
    {
      quote: "Working with Techneqatar on our commercial development was an excellent experience. Their professional approach, technical expertise, and attention to detail ensured the project was completed to the highest standards.",
      author: "Corporate Client",
      position: "Development Manager",
      organization: "Major Real Estate Developer",
    },
    {
      quote: "The team at Techneqatar demonstrated exceptional project management capabilities and technical competence throughout our infrastructure modernization project. We highly recommend them for complex construction projects.",
      author: "Project Manager",
      position: "Infrastructure Development",
      organization: "Semi-Government Authority",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">Clients & Partners</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trusted by Qatar's leading government entities, semi-government authorities, 
              and major corporate organizations for construction excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">35+</div>
                <div className="text-sm text-muted-foreground">Government Clients</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Completed Projects</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Partnership</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Government & Semi-Government Clients</h2>
            <p className="text-lg text-muted-foreground">
              Proud to serve Qatar's leading government entities and authorities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {governmentClients.map((client, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base">{client}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Corporate Clients</h2>
            <p className="text-lg text-muted-foreground">
              Delivering excellence for major corporate and commercial projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {corporateClients.map((client, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Building2 className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-base">{client}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground">
              What our clients say about working with Techneqatar
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-accent mb-6" />
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-6 border-t border-border">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.organization}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Why Clients Choose Techneqatar</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Over 15 years of successful project delivery for government and corporate clients, 
                    with a portfolio of 50+ completed projects demonstrating our capability and reliability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Government Approved</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fully registered with MMUP/MME and approved by Ashghal, meeting all requirements 
                    for government construction projects in Qatar.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Quality & Safety</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    ISO 9001, 14001, and 45001 certified, demonstrating our commitment to quality 
                    management, environmental responsibility, and workplace safety.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Professional Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Experienced team of engineers, project managers, and construction professionals 
                    dedicated to delivering projects on time, within budget, and to the highest standards.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Clients;
