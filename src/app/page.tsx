"use client";

import { Card, CardContent } from "@/components/atom/card";
import { Mail, Phone, Search } from "lucide-react";
import { useEffect, useState } from "react";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/atom/button";
import HomeCarousel from "@/components/organisms/home-carousel";
import { Input } from "@/components/atom/input";

// import { motion } from "framer-motion";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Navbar */}
      <nav
        className={`w-full flex justify-between items-center p-4 shadow-md fixed top-0 z-50 transition-all duration-300 text-white ${
          isScrolled ? "bg-amber-600 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="text-xl font-bold">🐾 PetShop</div>
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <span className="text-sm font-semibold">📞 0123-456-789</span>
        </div>
      </nav>

      {/* Image Slider */}
      <section id="home" className="w-full">
        <HomeCarousel />
      </section>

      <section id="services" className="w-full py-10 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
        <div className="flex overflow-x-auto gap-4 px-4 pb-2">
          {[
            "Grooming",
            "Veterinary",
            "Pet Sitting",
            "Training",
            "Pet Taxi",
            "Pet Taxi",
            "Pet Taxi",
            "Pet Taxi",
            "Pet Taxi",
          ].map((service, index) => (
            <Card
              key={`${service}-${index}`}
              className="min-w-[200px] flex-shrink-0"
            >
              <CardContent className="font-semibold text-center">
                {service}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section className="w-full py-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6 px-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-4">
                <p className="text-sm italic">
                  &quot;Great service and friendly staff! My dog loves
                  them.&quot;
                </p>
                <p className="mt-2 font-semibold">— Customer {i}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section className="w-full py-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6 px-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-4">
                <p className="text-sm italic">
                  &quot;Great service and friendly staff! My dog loves
                  them.&quot;
                </p>
                <p className="mt-2 font-semibold">— Customer {i}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section className="w-full py-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6 px-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-4">
                <p className="text-sm italic">
                  &quot;Great service and friendly staff! My dog loves
                  them.&quot;
                </p>
                <p className="mt-2 font-semibold">— Customer {i}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full py-10 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <form className="flex flex-col gap-4 max-w-xl mx-auto px-4">
          <Input type="text" placeholder="Your Name" />
          <Input type="text" placeholder="Your Email" />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="border border-gray-300 rounded-md p-2 resize-none"
          ></textarea>
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-8 px-4 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold mb-2">Contact Us</h4>
          <p>
            <Phone className="inline w-4 h-4 mr-2" />
            0123-456-789
          </p>
          <p>
            <Mail className="inline w-4 h-4 mr-2" />
            contact@petshop.com
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Working Hours</h4>
          <p>Mon - Sat: 8am - 7pm</p>
          <p>Sunday: Closed</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Newsletter</h4>
          <Input type="email" placeholder="Enter your email" className="mb-2" />
          <Button>Subscribe</Button>
        </div>
      </footer>
    </div>
  );
}
