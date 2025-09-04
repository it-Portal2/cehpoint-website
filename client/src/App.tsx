import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import EcommerceService from "@/pages/services/ecommerce";
import EdutechService from "@/pages/services/edutech";
import FintechService from "@/pages/services/fintech";
import DemoDelivery from "@/pages/demo-delivery";
import Quotation from "@/pages/quotation";
import Interns from "@/pages/interns";
import AISolutions from "@/pages/ai-solutions";
import Incubation from "@/pages/incubation";
import Careers from "@/pages/careers";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Banner } from "./components/sections/Banner";

function Router() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Banner with highest z-index */}
      <div className="relative z-50">
        <Banner />
      </div>
      
      {/* Navbar with lower z-index and top offset */}
      
        <Navbar />
     
      
      <main className="relative z-10">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services/ecommerce" component={EcommerceService} />
          <Route path="/services/edutech" component={EdutechService} />
          <Route path="/services/fintech" component={FintechService} />
          <Route path="/ai-solutions" component={AISolutions} />
          <Route path="/demo-delivery" component={DemoDelivery} />
          <Route path="/quotation" component={Quotation} />
          <Route path="/incubation" component={Incubation} />
          <Route path="/careers" component={Careers} />
          <Route path="/interns" component={Interns} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;