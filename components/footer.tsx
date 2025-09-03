import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white rounded-full p-2">
                <img src="/utkalcorporation.png" alt="" className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-xl">Utkal Foundation</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering communities through sustainable development, environmental protection, and social welfare
              initiatives across India.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-accent hover:text-accent-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-accent hover:text-accent-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-accent hover:text-accent-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-accent hover:text-accent-foreground">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-accent">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/team" className="hover:text-accent transition-colors">
                Our Team
              </Link>
              <Link href="/campaigns" className="hover:text-accent transition-colors">
                Campaigns
              </Link>
              <Link href="/events" className="hover:text-accent transition-colors">
                Events
              </Link>
              <Link href="/blog" className="hover:text-accent transition-colors">
                News & Articles
              </Link>
              <Link href="/contact" className="hover:text-accent transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Our Work */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-accent">Our Work</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/environment" className="hover:text-accent transition-colors">
                Environment & Eco-Restoration
              </Link>
              <Link href="/healthcare" className="hover:text-accent transition-colors">
                Healthcare Access
              </Link>
              <Link href="/empowerment" className="hover:text-accent transition-colors">
                Community Empowerment
              </Link>
              <Link href="/disaster-management" className="hover:text-accent transition-colors">
                Disaster Management
              </Link>
              <Link href="/urban-governance" className="hover:text-accent transition-colors">
                Urban Governance
              </Link>
              <Link href="/social-welfare" className="hover:text-accent transition-colors">
                Social Welfare
              </Link>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-accent">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm">Bhubaneswar, Odisha, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm">info@utkalfoundation.org</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-accent">Newsletter</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">© 2024 Utkal Foundation. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
