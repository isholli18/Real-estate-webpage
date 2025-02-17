import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/">
              <a className="flex items-center">
                <span className="text-xl font-bold text-primary">SSInvestmentBroker</span>
              </a>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="flex space-x-4">
              {links.map(({ href, label }) => (
                <Link key={href} href={href}>
                  <a
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium",
                      location === href
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:text-primary"
                    )}
                  >
                    {label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
