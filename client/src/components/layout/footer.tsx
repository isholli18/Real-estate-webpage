import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Footer() {
  const [interest, setInterest] = useState("buy");

  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tagline */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-light tracking-wider uppercase">
            Your Dream House is One Step Away!
          </h2>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-sm text-gray-600">Don't hesitate</p>
            <p className="text-sm">(+355) 69 44 38 208</p>
          </div>
          <div className="text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Find Us</h3>
            <p className="text-sm text-gray-600">Our Address</p>
            <p className="text-sm">Tirane, Albania</p>
          </div>
          <div className="text-center">
            <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-gray-600">Direct Email</p>
            <p className="text-sm">ssinvestmentbrokeralbania@hotmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">FIND YOUR NEXT HOME</h3>
            <p className="text-gray-600">
              Looking for your dream property? Fill out the form and we'll help you find it.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">CONTACT US</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" required />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <Label>Interested in</Label>
                <div className="flex gap-4 mt-2">
                  {["buy", "rent", "other"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={option}
                        name="interest"
                        value={option}
                        checked={interest === option}
                        onChange={(e) => setInterest(e.target.value)}
                        className="text-primary"
                      />
                      <Label htmlFor={option} className="capitalize">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 mt-16">
          <p>© 2024 SSInvestmentBroker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}