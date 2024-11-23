import { Lotus } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/about" className="text-muted-foreground hover:text-primary-600">
            About
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary-600">
            Contact
          </Link>
          <Link href="/privacy" className="text-muted-foreground hover:text-primary-600">
            Privacy
          </Link>
          <Link href="/terms" className="text-muted-foreground hover:text-primary-600">
            Terms
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start">
            <Lotus className="h-6 w-6 text-primary-600" />
            <p className="ml-2 text-center text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} Rtamarga Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}