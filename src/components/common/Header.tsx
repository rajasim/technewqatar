import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import routes from "../../routes";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigation = routes.filter((route) => route.visible !== false);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
           <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
  <img src="/images/Screenshot 2026-01-02 235230.png" alt="Logo" className="w-full h-full object-contain" />
</div>

            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">Technewqatar</span>
              <span className="text-xs text-muted-foreground">Building Qatar's Future</span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "text-primary bg-muted"
                    : "text-foreground hover:text-primary hover:bg-muted/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-3">
           
            <Button asChild>
              <Link to="/contact">Request Proposal</Link>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${
                      location.pathname === item.path
                        ? "text-primary bg-muted"
                        : "text-foreground hover:text-primary hover:bg-muted/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button asChild variant="outline" onClick={() => setIsOpen(false)}>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild onClick={() => setIsOpen(false)}>
                    <Link to="/contact">Request Proposal</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
