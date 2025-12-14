import { useState } from "react";
import { Briefcase, MapPin, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const jobListings = [
    {
      title: "Civil Engineer",
      department: "Engineering",
      location: "Doha, Qatar",
      type: "Full-time",
      description: "Experienced civil engineer for government infrastructure projects. Minimum 5 years experience in construction projects.",
    },
    {
      title: "Project Manager",
      department: "Project Management",
      location: "Doha, Qatar",
      type: "Full-time",
      description: "Senior project manager with proven track record in managing large-scale construction projects. PMP certification preferred.",
    },
    {
      title: "Site Supervisor",
      department: "Operations",
      location: "Various Sites, Qatar",
      type: "Full-time",
      description: "Experienced site supervisor for construction projects. Strong leadership and communication skills required.",
    },
    {
      title: "Quantity Surveyor",
      department: "Commercial",
      location: "Doha, Qatar",
      type: "Full-time",
      description: "Qualified quantity surveyor with experience in cost estimation, contract management, and project budgeting.",
    },
    {
      title: "HSE Officer",
      department: "Health & Safety",
      location: "Various Sites, Qatar",
      type: "Full-time",
      description: "Certified HSE officer with experience in construction safety management and Qatar HSE regulations.",
    },
    {
      title: "Structural Engineer",
      department: "Engineering",
      location: "Doha, Qatar",
      type: "Full-time",
      description: "Structural engineer with expertise in building design and analysis. Experience with government projects preferred.",
    },
  ];

  const benefits = [
    "Competitive salary packages",
    "Health insurance coverage",
    "Annual leave and holidays",
    "Professional development opportunities",
    "Career advancement programs",
    "Safe working environment",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.position) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Application Submitted",
      description: "Thank you for your interest. We will review your application and contact you soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">Careers at Techneqatar</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join our team of construction professionals and be part of building Qatar's future. 
              We offer exciting career opportunities in a dynamic and growing organization.
            </p>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-10 h-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">400+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Briefcase className="w-10 h-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-muted-foreground">Open Positions</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <MapPin className="w-10 h-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Project Sites</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="w-10 h-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Current Job Openings</h2>
            <p className="text-lg text-muted-foreground">
              Explore exciting career opportunities across various departments
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {jobListings.map((job, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl">{job.title}</CardTitle>
                    <Badge className="bg-accent text-accent-foreground">{job.type}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.department}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {job.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setFormData({ ...formData, position: job.title });
                      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground">
              Benefits and opportunities for our team members
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="application-form" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Submit Your Application</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to apply for a position at Techneqatar
            </p>
          </div>
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
                  <Label htmlFor="position">Position Applied For *</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    placeholder="Enter position title"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Cover Letter / Additional Information</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your experience and why you'd like to join Techneqatar..."
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cv">Upload CV (PDF, DOC, DOCX)</Label>
                  <Input
                    id="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-muted-foreground">
                    Maximum file size: 5MB
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Careers;
