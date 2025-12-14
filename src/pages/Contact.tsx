import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["Doha, Qatar", "State of Qatar"],
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+974 XXXX XXXX", "+974 XXXX XXXX"],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@techneqatar.com", "projects@techneqatar.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Sunday - Thursday: 7:00 AM - 5:00 PM", "Friday - Saturday: Closed"],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We will get back to you soon.",
    });

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">Contact Techneqatar</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get in touch with us for project inquiries, proposals, or any questions about our construction services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you as soon as possible. 
                For urgent inquiries, please call us directly.
              </p>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company / Organization</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+974 XXXX XXXX"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project or inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Our Location</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Visit our office in Doha, Qatar. We're conveniently located and ready to discuss your construction needs.
              </p>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow mb-8">
                <div className="w-full h-[400px] bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Google Maps integration placeholder
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Doha, Qatar
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Call Us</p>
                        <p className="text-sm text-muted-foreground">+974 XXXX XXXX</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email Us</p>
                        <p className="text-sm text-muted-foreground">info@techneqatar.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Visit Us</p>
                        <p className="text-sm text-muted-foreground">Doha, Qatar</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Request a Project Proposal</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For detailed project proposals and quotations, please contact us with your project requirements. 
                  Our team will review your needs and provide a comprehensive proposal tailored to your specific project.
                </p>
                <p>
                  We work with Qatar Government entities, Semi-Government Authorities, and Large Corporates on 
                  construction projects of all sizes. Whether you need civil construction, infrastructure development, 
                  or turnkey solutions, we're here to help.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-background rounded-lg border border-border">
                    <div className="text-2xl font-bold text-primary mb-2">24-48h</div>
                    <div className="text-sm">Response Time</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg border border-border">
                    <div className="text-2xl font-bold text-primary mb-2">Free</div>
                    <div className="text-sm">Initial Consultation</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg border border-border">
                    <div className="text-2xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm">Years Experience</div>
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

export default Contact;
