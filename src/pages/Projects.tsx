import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Building2, CheckCircle2, Clock } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "Qatar National Infrastructure Development",
      client: "Public Works Authority (Ashghal)",
      location: "Doha, Qatar",
      scope: "Complete infrastructure development including roads, drainage systems, and utility networks for a major government district.",
      status: "Completed",
      category: "government",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/489b7e87-68e3-4110-8f97-3215b9cf7e64.jpg",
    },
    {
      title: "Government Commercial Complex",
      client: "Ministry of Municipality",
      location: "Al Rayyan, Qatar",
      scope: "Construction of a multi-story commercial complex including office spaces, retail areas, and underground parking facilities.",
      status: "Ongoing",
      category: "government",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/798f3936-44e5-4321-b495-9e181e636223.jpg",
    },
    {
      title: "Infrastructure Modernization Project",
      client: "Qatar Government",
      location: "Al Wakrah, Qatar",
      scope: "Modernization of existing infrastructure including road widening, drainage upgrades, and utility system enhancements.",
      status: "Completed",
      category: "government",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/13edfda1-6318-4931-9f0d-2fbd17700415.jpg",
    },
    {
      title: "Public Facilities Construction",
      client: "Qatar Government Authority",
      location: "Lusail, Qatar",
      scope: "Design and construction of public facilities including community centers, recreational areas, and supporting infrastructure.",
      status: "Ongoing",
      category: "government",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/db40a976-5fc6-4a72-b970-94fd017f612f.jpg",
    },
    {
      title: "Commercial Building Development",
      client: "Private Corporate Client",
      location: "West Bay, Doha",
      scope: "Complete construction of a modern commercial building with state-of-the-art facilities and sustainable design features.",
      status: "Completed",
      category: "commercial",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/798f3936-44e5-4321-b495-9e181e636223.jpg",
    },
    {
      title: "Industrial Facility Construction",
      client: "Industrial Corporation",
      location: "Mesaieed, Qatar",
      scope: "Construction of industrial facilities including warehouses, processing units, and supporting infrastructure.",
      status: "Completed",
      category: "commercial",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/7e4daae7-641d-491b-b412-eb62fdd004f1.jpg",
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
              Showcasing our portfolio of successful government and commercial construction projects across Qatar.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="government">Government</TabsTrigger>
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
                <div className="text-sm text-muted-foreground">Government Clients</div>
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
