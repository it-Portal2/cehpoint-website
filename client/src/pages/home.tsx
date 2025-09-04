import Hero from "@/components/sections/hero";
import IndustrySolutions from "@/components/sections/industry-solutions";
import AISolutions from "@/components/sections/ai-solutions";
import DemoProcess from "@/components/sections/demo-process";
import EngagementModel from "@/components/sections/engagement-model";
import PortfolioCareers from "@/components/sections/portfolio-careers";

export default function Home() {
  return (
    <div className="pt-[105px]" data-testid="home-page">

      <Hero />
      <IndustrySolutions />
      <AISolutions />
      <DemoProcess />
      <EngagementModel />
      <PortfolioCareers />
    </div>
  );
}
