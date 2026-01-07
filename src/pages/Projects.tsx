import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Building2, CheckCircle2, Clock } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "Sports & Fitness Facilities",
      client: "Private Corporate Client",
      location: "Doha, Qatar",
      scope: "Building new facilities or renovating existing ones to meet the needs of athletes, fitness enthusiasts, and community members..",
      status: "Completed",
      category: "development",
      image: "/images/sport.jpeg",
    },
    {
      title: " Swimming Pool & Spa  ",
      client: "private Client",
      location: "Al Rayyan, Qatar",
      scope: "work includes the design, supply, construction, installation, testing, and commissioning of a swimming pool and spa, complete with mechanical, electrical, plumbing.",
      status: "Ongoing",
      category: "development",
      image: "/images/spa.jpeg",
    },
    {
      title: "Landscape Works ",
      client: "private Client",
      location: "Al Wakrah, Qatar",
      scope: "Landscape works include site clearing, leveling, soil preparation, planting of trees and planters, and final cleaning with handover.",
      status: "Completed",
      category: "development",
      image: "/images/landscape.jpeg",
    },
    {
      title: "Electrical Works",
      client: "private coorporate Client",
      location: "Lusail, Qatar",
      scope: "supply and installation of wiring, conduits, switches, sockets, lighting fixtures, distribution boards, earthing, testing, and commissioning as per approved drawings and standards.",
      status: "Ongoing",
      category: "development",
      image: "/images/stell.jpeg",
    },
    {
      title: " Steel Fabrication Works ",
      client: "Private Corporate Client",
      location: "West Bay, Doha",
      scope: "supply, fabrication, welding, surface treatment, delivery, and erection of structural steel members as per approved drawings and specifications.",
      status: "Completed",
      category: "commercial",
      image: "/images/electric.jpeg",
    },
    {
      title: "HVAC Works",
      client: "private coorporate Client",
      location: "Mesaieed, Qatar",
      scope: "installation, testing, and commissioning of air conditioning and ventilation systems, including ducting, piping, insulation, controls, and related accessories as per approved drawings and standards.",
      status: "Completed",
      category: "commercial",
      image: "/images/hmcv.jpeg",
    },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Showcasing our portfolio of successful development and commercial construction projects across Qatar.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative h-72 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge 
                        className={`absolute top-4 right-4 ${
                          project.status === "Completed" 
                            ? "bg-accent text-accent-foreground" 
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {project.status === "Completed" ? (
                          <><CheckCircle2 className="w-3 h-3 mr-1" /> {project.status}</>
                        ) : (
                          <><Clock className="w-3 h-3 mr-1" /> {project.status}</>
                        )}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-start gap-2">
                          <Building2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-semibold">Client</p>
                            <p className="text-sm text-muted-foreground">{project.client}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-semibold">Location</p>
                            <p className="text-sm text-muted-foreground">{project.location}</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-sm font-semibold mb-2">Scope of Work</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.scope}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Completed Projects</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-sm text-muted-foreground">Ongoing Projects</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">35+</div>
                <div className="text-sm text-muted-foreground">Development Clients</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
