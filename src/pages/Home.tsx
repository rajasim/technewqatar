import { Link } from "react-router-dom";
import { ArrowRight, Award, Building2, Users, CheckCircle2, TrendingUp, Construction, Factory, Wrench, Target, Eye, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Home = () => {
  const statsSection = useScrollAnimation();
  const aboutSection = useScrollAnimation();
  const servicesSection = useScrollAnimation();
  const projectsSection = useScrollAnimation();
  const certificationsSection = useScrollAnimation();

  const stats = [
    { label: "Years of Experience", value: "15+", icon: TrendingUp },
    { label: "Government Projects", value: "50+", icon: Building2 },
    { label: "Ongoing Projects", value: "12", icon: Users },
    { label: "Certifications", value: "8+", icon: Award },
  ];

  const services = [
    {
      icon: Building2,
      title: "Civil & Structural Construction",
      description: "Complete civil engineering and structural construction services for government and commercial projects.",
    },
    {
      icon: Construction,
      title: "Infrastructure Projects",
      description: "Roads, drainage systems, and utility installation services ensuring efficient infrastructure development.",
    },
    {
      icon: Factory,
      title: "Commercial Buildings",
      description: "Industrial and commercial building construction with focus on quality and compliance.",
    },
    {
      icon: Wrench,
      title: "Turnkey Solutions",
      description: "End-to-end construction solutions from planning to completion and handover.",
    },
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
        className="relative h-[700px] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(0 0% 20% / 0.92), hsl(30 25% 45% / 0.92)), url('https://miaoda-site-img.s3cdn.medo.dev/images/2cd3b794-2bea-44c8-ad06-022ff3a16343.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 animate-pulse-slow"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-primary-foreground relative z-10 animate-scale-in">
          <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90 animate-bounce-slow inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Government & Infrastructure Specialists
          </Badge>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight animate-slide-down">
            Techneqatar – Building Qatar's Future
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
            Leading construction company specializing in government and infrastructure projects across Qatar, 
            committed to excellence and Qatar National Vision 2030.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-110 transition-all duration-300 shadow-hover animate-glow">
              <Link to="/contact">
                Request Proposal <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-card/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-card/20 hover:scale-110 transition-all duration-300">
              <Link to="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section ref={statsSection.ref} className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className={`text-center hover:shadow-hover hover:-translate-y-3 hover:rotate-1 transition-all duration-500 border-primary/10 ${
                  statsSection.isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-slow">
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl xl:text-4xl font-bold text-primary mb-2 animate-slide-up">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section ref={aboutSection.ref} className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div className={aboutSection.isVisible ? 'animate-slide-right' : 'opacity-0'}>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 animate-bounce-slow">About Techneqatar</Badge>
              <h2 className="text-3xl xl:text-5xl font-bold mb-6 leading-tight">
                Qatar's Trusted Construction Partner
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of excellence in the construction industry, Techneqatar has established itself as a leading 
                construction company in Qatar, specializing in government and infrastructure projects. We are committed to 
                delivering world-class construction solutions that align with Qatar National Vision 2030.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our expertise spans across civil construction, infrastructure development, commercial buildings, and turnkey 
                solutions. We pride ourselves on our MMUP/MME registration, Ashghal approval, and multiple ISO certifications, 
                ensuring the highest standards of quality, safety, and environmental responsibility.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">Excellence in every project</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Vision</h3>
                    <p className="text-sm text-muted-foreground">Building Qatar's future</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Values</h3>
                    <p className="text-sm text-muted-foreground">Quality, safety, integrity</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="hover:scale-110 transition-all duration-300 shadow-hover">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className={`relative ${aboutSection.isVisible ? 'animate-slide-left' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-card group">
                <img 
                  src="https://miaoda-site-img.s3cdn.medo.dev/images/7e4daae7-641d-491b-b412-eb62fdd004f1.jpg" 
                  alt="Techneqatar Construction Site"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground transform group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Building Excellence Since 2008</h3>
                  <p className="text-sm opacity-90">Delivering quality construction projects across Qatar</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-20 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section ref={servicesSection.ref} className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 ${servicesSection.isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 animate-bounce-slow">Our Services</Badge>
            <h2 className="text-3xl xl:text-5xl font-bold mb-4">Comprehensive Construction Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From civil construction to turnkey solutions, we deliver excellence across all aspects of construction and infrastructure development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-hover hover:-translate-y-3 hover:rotate-2 transition-all duration-500 border-primary/10 overflow-hidden ${
                  servicesSection.isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse-slow">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button asChild variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Link to="/services">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className={`text-center mt-12 ${servicesSection.isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <Button asChild size="lg" variant="outline" className="hover:scale-110 transition-all duration-300 shadow-hover">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section ref={projectsSection.ref} className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 ${projectsSection.isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Featured Projects</Badge>
            <h2 className="text-3xl xl:text-5xl font-bold mb-4">Government Projects Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Delivering excellence in government and infrastructure construction across Qatar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden hover:shadow-hover transition-all duration-500 group border-primary/10 ${
                  projectsSection.isVisible ? 'animate-rotate-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground shadow-lg animate-bounce-slow">
                    {project.status}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-muted-foreground flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300">
                      <Building2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary animate-pulse-slow" />
                      <span><strong>Client:</strong> {project.client}</span>
                    </p>
                    <p className="text-sm text-muted-foreground flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent animate-pulse-slow" />
                      <span><strong>Location:</strong> {project.location}</span>
                    </p>
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 transition-all duration-300">
                    <Link to="/projects">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className={`text-center mt-12 ${projectsSection.isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <Button asChild size="lg" className="hover:scale-110 transition-all duration-300 shadow-hover animate-glow">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section ref={certificationsSection.ref} className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 ${certificationsSection.isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Certifications</Badge>
            <h2 className="text-3xl xl:text-5xl font-bold mb-4">Certified & Approved</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fully certified and approved for government construction projects in Qatar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-hover hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border-accent/20 group ${
                  certificationsSection.isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    <CheckCircle2 className="w-6 h-6 text-accent animate-pulse-slow" />
                  </div>
                  <span className="font-medium group-hover:text-accent transition-colors">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className={`text-center mt-12 ${certificationsSection.isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <Button asChild size="lg" variant="outline" className="hover:scale-110 transition-all duration-300 shadow-hover">
              <Link to="/certifications">View All Certifications</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0 animate-pulse-slow opacity-20">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-scale-in">
          <h2 className="text-3xl xl:text-5xl font-bold mb-6 animate-slide-down">Ready to Start Your Project?</h2>
          <p className="text-lg xl:text-xl mb-10 opacity-95 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
            Partner with Qatar's trusted construction experts for your next government or infrastructure project. 
            Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-110 transition-all duration-300 shadow-hover animate-glow">
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-card/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-card/20 hover:scale-110 transition-all duration-300">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
