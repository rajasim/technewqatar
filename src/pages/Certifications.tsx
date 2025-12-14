import { Award, FileCheck, Shield, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const certifications = [
    {
      title: "MMUP/MME Registration",
      issuer: "Ministry of Municipality and Planning / Ministry of Municipality and Environment",
      description: "Official registration with Qatar's Ministry of Municipality, authorizing us to undertake construction projects across Qatar.",
      category: "Government Registration",
      icon: Shield,
      status: "Active",
    },
    {
      title: "Ashghal Approval",
      issuer: "Public Works Authority (Ashghal)",
      description: "Approved contractor status with Ashghal, enabling us to bid for and execute government infrastructure projects.",
      category: "Government Approval",
      icon: Award,
      status: "Active",
    },
    {
      title: "ISO 9001:2015",
      issuer: "International Organization for Standardization",
      description: "Quality Management System certification, demonstrating our commitment to consistent quality in all our construction projects.",
      category: "Quality Management",
      icon: Award,
      status: "Active",
    },
    {
      title: "ISO 14001:2015",
      issuer: "International Organization for Standardization",
      description: "Environmental Management System certification, reflecting our dedication to environmental responsibility and sustainable practices.",
      category: "Environmental Management",
      icon: Award,
      status: "Active",
    },
    {
      title: "ISO 45001:2018",
      issuer: "International Organization for Standardization",
      description: "Occupational Health and Safety Management System certification, ensuring the highest standards of workplace safety.",
      category: "Health & Safety",
      icon: Shield,
      status: "Active",
    },
    {
      title: "Qatar Trade License",
      issuer: "Ministry of Commerce and Industry",
      description: "Valid trade license authorizing construction and contracting activities in the State of Qatar.",
      category: "Business License",
      icon: FileCheck,
      status: "Active",
    },
  ];

  const complianceAreas = [
    {
      title: "Quality Assurance",
      description: "Comprehensive quality management systems ensuring every project meets or exceeds specifications and client expectations.",
    },
    {
      title: "Safety Standards",
      description: "Strict adherence to international and Qatar-specific safety regulations, protecting our workforce and the public.",
    },
    {
      title: "Environmental Compliance",
      description: "Sustainable construction practices minimizing environmental impact and promoting ecological responsibility.",
    },
    {
      title: "Regulatory Compliance",
      description: "Full compliance with all Qatar government regulations, building codes, and construction standards.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">Certifications & Approvals</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fully certified and approved for government construction projects in Qatar, 
              demonstrating our commitment to quality, safety, and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <cert.icon className="w-7 h-7 text-primary" />
                    </div>
                    <Badge className="bg-accent text-accent-foreground">{cert.status}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{cert.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="mb-4">{cert.category}</Badge>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Certificate (PDF)
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Compliance & Standards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence extends across all aspects of construction management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Why Our Certifications Matter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our comprehensive portfolio of certifications and approvals demonstrates our unwavering commitment 
                  to excellence in every aspect of construction. These credentials are not just documents – they 
                  represent our dedication to quality, safety, and compliance with the highest international and 
                  local standards.
                </p>
                <p>
                  For our clients, particularly government entities and large corporates, these certifications 
                  provide assurance that we have the expertise, systems, and processes in place to deliver projects 
                  that meet or exceed expectations. They demonstrate our capability to handle complex projects while 
                  maintaining strict adherence to quality, safety, and environmental standards.
                </p>
                <p>
                  Our MMUP/MME registration and Ashghal approval specifically qualify us to undertake government 
                  infrastructure projects in Qatar, while our ISO certifications reflect our commitment to 
                  international best practices in quality management, environmental responsibility, and occupational 
                  health and safety.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-background rounded-lg border border-border">
                    <div className="text-3xl font-bold text-primary mb-2">8+</div>
                    <div className="text-sm">Active Certifications</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg border border-border">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm">Years Certified</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg border border-border">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm">Compliance Rate</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
