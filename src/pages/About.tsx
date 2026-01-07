import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">About Technewqatar</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A leading construction company in Qatar, specializing in development and infrastructure projects 
              with a commitment to excellence, safety, and Qatar National Vision 2030.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="https://miaoda-site-img.s3cdn.medo.dev/images/05f4b1f8-f9fb-414a-8a35-e84d119ddbee.jpg"
                alt="Techneqatar team"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Technewqatar is a premier construction company based in Qatar, with over 15 years of experience 
                  in delivering high-quality development and infrastructure projects across the nation.
                </p>
                <p>
                  We have established ourselves as a trusted partner for Qatar Development entities, Semi-Development 
                  Authorities, and Large Corporates, consistently delivering projects that meet the highest standards 
                  of quality, safety, and compliance.
                </p>
                <p>
                  Our expertise spans civil and structural construction, development infrastructure projects, roads, 
                  drainage, utilities, commercial buildings, and turnkey construction solutions. With full MMUP/MME 
                  registration and Ashghal approval, we are fully equipped to handle projects of any scale and complexity.
                </p>
                <p>
                  As Qatar continues to grow and develop, we remain committed to contributing to the nation's progress 
                  and supporting the goals of Qatar National Vision 2030.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and preferred construction partner for development and infrastructure 
                  projects in Qatar, recognized for our unwavering commitment to quality, safety, and innovation. 
                  We envision a future where our work contributes significantly to Qatar's development and the 
                  realization of Qatar National Vision 2030.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional construction services that exceed client expectations through professional 
                  excellence, innovative solutions, and strict adherence to safety and quality standards. We are 
                  committed to building lasting relationships with our clients, partners, and communities while 
                  contributing to Qatar's sustainable development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Leadership Message</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    "At Technewqatar, we believe that construction is more than just building structures – it's about 
                    creating lasting value for our clients, our communities, and our nation. Every project we undertake 
                    is an opportunity to demonstrate our commitment to excellence and contribute to Qatar's remarkable 
                    journey of growth and development."
                  </p>
                  <p>
                    "Our success is built on the foundation of trust, integrity, and professional excellence. We take 
                    pride in our team of skilled professionals, our state-of-the-art equipment, and our unwavering 
                    commitment to safety and quality. As we look to the future, we remain dedicated to supporting 
                    Qatar National Vision 2030 and playing our part in building a better tomorrow."
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="font-semibold text-foreground">Management Team</p>
                    <p className="text-sm">Technewqatar</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Commitment to Quality & Safety</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Quality and safety are at the core of everything we do at Technewqatar. We maintain rigorous quality 
                  management systems certified to ISO 9001:2015 standards, ensuring that every project meets or exceeds 
                  client expectations and regulatory requirements.
                </p>
                <p>
                  Our commitment to safety is demonstrated through our ISO 45001:2018 certification and comprehensive 
                  Health, Safety & Environment (HSE) policies. We believe that every worker has the right to return 
                  home safely at the end of each day, and we implement strict safety protocols across all our projects.
                </p>
                <p>
                  Environmental responsibility is equally important to us. Our ISO 14001:2015 certification reflects 
                  our dedication to minimizing environmental impact and promoting sustainable construction practices 
                  throughout our operations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">ISO 9001</div>
                    <div className="text-sm">Quality Management</div>
                  </div>
                  <div className="text-center p-6 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">ISO 45001</div>
                    <div className="text-sm">Health & Safety</div>
                  </div>
                  <div className="text-center p-6 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">ISO 14001</div>
                    <div className="text-sm">Environmental Management</div>
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

export default About;
