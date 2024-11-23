import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="hero-pattern">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Discover Ancient Wisdom for Modern Life
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Join Rtamarga Foundation in exploring timeless Hindu teachings, meditation practices, and spiritual growth. Our community is dedicated to spreading dharmic wisdom and fostering inner transformation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button className="bg-primary-600 hover:bg-primary-700">
                Join Our Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}