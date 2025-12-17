import { Link } from "react-router-dom";
import { ArrowRight, Award, Building2, Users, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  const stats = [
    { label: "Years of Experience", value: "15+", icon: TrendingUp },
    { label: "Government Projects", value: "50+", icon: Building2 },
    { label: "Ongoing Projects", value: "12", icon: Users },
    { label: "Certifications", value: "8+", icon: Award },
  ];

  const featuredProjects = [
    {
      title: "Qatar National Infrastructure Development",
      client: "Public Works Authority (Ashghal)",
      location: "Doha, Qatar",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/489b7e87-68e3-4110-8f97-3215b9cf7e64.jpg",
      status: "Completed",
    },
    {
      title: "Government Commercial Complex",
      client: "Ministry of Municipality",
      location: "Al Rayyan, Qatar",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/798f3936-44e5-4321-b495-9e181e636223.jpg",
      status: "Ongoing",
    },
    {
      title: "Infrastructure Modernization Project",
      client: "Qatar Government",
      location: "Al Wakrah, Qatar",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/13edfda1-6318-4931-9f0d-2fbd17700415.jpg",
      status: "Completed",
    },
  ];

  const certifications = [
    "MMUP/MME Registration",
    "Ashghal Approval",
    "ISO 9001:2015",
    "ISO 14001:2015",
    "ISO 45001:2018",
    "Qatar Trade License",
  ];

  return (
    <div className="min-h-screen">
      <section 
        className="relative h-[600px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(220 60% 25% / 0.92), hsl(0 45% 35% / 0.92)), url('https://miaoda-site-img.s3cdn.medo.dev/images/2cd3b794-2bea-44c8-ad06-022ff3a16343.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-primary-foreground">
          <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90">
            Government & Infrastructure Specialists
          </Badge>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Techneqatar – Building Qatar's Future
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Leading construction company specializing in government and infrastructure projects across Qatar, 
            committed to excellence and Qatar National Vision 2030.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">
                Request Proposal <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-card/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-card/20">
              <Link to="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <div className="text-3xl xl:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Featured Government Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence in government and infrastructure construction across Qatar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {project.status}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    <strong>Client:</strong> {project.client}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Location:</strong> {project.location}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/projects">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Certifications & Approvals</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fully certified and approved for government construction projects in Qatar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="font-medium">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/certifications">View All Certifications</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl xl:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 opacity-95">
            Partner with Qatar's trusted construction experts for your next government or infrastructure project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-card/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-card/20">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
