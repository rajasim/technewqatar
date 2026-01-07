import { Shield, AlertTriangle, Leaf, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HSE = () => {
  const policies = [
    {
      title: "Zero Harm Philosophy",
      description: "We are committed to achieving zero harm to our people, the environment, and the communities in which we operate. Every worker has the right to return home safely at the end of each day.",
    },
    {
      title: "Compliance & Standards",
      description: "Full compliance with Qatar HSE regulations, international standards, and ISO 45001:2018 occupational health and safety management systems.",
    },
    {
      title: "Continuous Improvement",
      description: "Regular review and enhancement of our HSE practices, incorporating lessons learned and industry best practices to continuously improve our safety performance.",
    },
    {
      title: "Training & Competence",
      description: "Comprehensive HSE training programs ensuring all personnel are competent and aware of their safety responsibilities and the hazards associated with their work.",
    },
  ];

  const safetyStandards = [
    {
      icon: Shield,
      title: "Personal Protective Equipment (PPE)",
      description: "Mandatory use of appropriate PPE including hard hats, safety boots, high-visibility clothing, gloves, and eye protection on all sites.",
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment & Management",
      description: "Comprehensive risk assessments conducted before work commences, with appropriate control measures implemented to eliminate or minimize risks.",
    },
    {
      icon: CheckCircle2,
      title: "Site Safety Inspections",
      description: "Regular safety inspections and audits conducted by qualified HSE professionals to ensure compliance with safety standards and identify potential hazards.",
    },
    {
      icon: Shield,
      title: "Emergency Response Procedures",
      description: "Established emergency response plans and procedures, with regular drills and training to ensure preparedness for any emergency situation.",
    },
  ];

  const environmentalCommitments = [
    {
      title: "Waste Management",
      description: "Proper segregation, storage, and disposal of construction waste in accordance with Qatar environmental regulations and ISO 14001:2015 standards.",
    },
    {
      title: "Pollution Prevention",
      description: "Implementation of measures to prevent air, water, and soil pollution, including dust suppression, proper handling of hazardous materials, and erosion control.",
    },
    {
      title: "Resource Conservation",
      description: "Efficient use of water, energy, and materials, promoting recycling and reuse wherever possible to minimize environmental impact.",
    },
    {
      title: "Sustainable Practices",
      description: "Integration of sustainable construction practices and green building principles to support Qatar's environmental objectives and National Vision 2030.",
    },
  ];

  const complianceAreas = [
    "Qatar Civil Defense Regulations",
    "Qatar Ministry of Labour Safety Standards",
    "Ashghal HSE Requirements",
    "ISO 45001:2018 (Occupational Health & Safety)",
    "ISO 14001:2015 (Environmental Management)",
    "OSHA Guidelines",
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">Health, Safety & Environment</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Committed to the highest standards of health, safety, and environmental protection 
              in all our construction activities across Qatar.
            </p>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="w-10 h-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">Zero</div>
                <div className="text-sm text-muted-foreground">Target Incidents</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <CheckCircle2 className="w-10 h-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Compliance Rate</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <AlertTriangle className="w-10 h-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Safety Officers</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Leaf className="w-10 h-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">ISO</div>
                <div className="text-sm text-muted-foreground">Certified Systems</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">HSE Policy Statement</h2>
            <p className="text-lg text-muted-foreground">
              Our commitment to health, safety, and environmental excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{policy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{policy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Site Safety Standards</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive safety measures protecting our workforce and the public
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {safetyStandards.map((standard, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <standard.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{standard.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://miaoda-site-img.s3cdn.medo.dev/images/6e1e9236-1c30-47d3-aa69-da2f97f8d5bb.jpg"
              alt="Construction safety"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Environmental Responsibility</h2>
            <p className="text-lg text-muted-foreground">
              Committed to sustainable construction and environmental protection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {environmentalCommitments.map((commitment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{commitment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{commitment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Compliance with Qatar Regulations</h2>
            <p className="text-lg text-muted-foreground">
              Full adherence to all applicable health, safety, and environmental regulations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {complianceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="font-medium">{area}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Our HSE Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Technewqatar, health, safety, and environmental protection are not just regulatory requirements – 
                  they are fundamental values that guide everything we do. We believe that all incidents are preventable, 
                  and we are committed to creating and maintaining a culture where safety is everyone's responsibility.
                </p>
                <p>
                  Our comprehensive HSE management systems, certified to ISO 45001:2018 and ISO 14001:2015, provide 
                  the framework for identifying hazards, assessing risks, and implementing effective control measures. 
                  We continuously monitor our performance, investigate incidents, and implement corrective actions to 
                  prevent recurrence.
                </p>
                <p>
                  Through regular training, toolbox talks, safety meetings, and ongoing communication, we ensure that 
                  every member of our team understands their role in maintaining a safe and environmentally responsible 
                  workplace. We also work closely with our clients, subcontractors, and suppliers to promote HSE 
                  excellence throughout the supply chain.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HSE;
