"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Leaf, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="bg-white rounded-full p-2">
              <img src="/utkalcorporation.png" alt="" className="w-6 h-6" />
            </div>
            <span className="font-heading font-bold text-xl">Utkal Foundation</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="nav-item hover:text-accent transition-colors">
              HOME
            </Link>

            <div className="relative group">
              <button
                className="nav-item flex items-center space-x-1 hover:text-accent transition-colors"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>ABOUT US</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === "about" && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white text-foreground rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setActiveDropdown("about")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href="/about"
                    className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/team"
                    className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="nav-item flex items-center space-x-1 hover:text-accent transition-colors"
                onMouseEnter={() => setActiveDropdown("pages")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>PAGES</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === "pages" && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white text-foreground rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setActiveDropdown("pages")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href="/environment"
                    className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Environment & Eco-Restoration
                  </Link>
                  <Link
                    href="/healthcare"
                    className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Healthcare Access
                  </Link>
                  <Link
                    href="/empowerment"
                    className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Community Empowerment
                  </Link>
                  <Link
                    href="/disaster-management"
                    className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Disaster Management
                  </Link>
                  <Link
                    href="/urban-governance"
                    className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Urban Governance
                  </Link>
                  <Link
                    href="/social-welfare"
                    className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Social Welfare
                  </Link>
                </div>
              )}
            </div>

            <Link href="/campaigns" className="nav-item hover:text-accent transition-colors">
              CAMPAIGNS
            </Link>

            <div className="relative group">
              <button
                className="nav-item flex items-center space-x-1 hover:text-accent transition-colors"
                onMouseEnter={() => setActiveDropdown("news")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>ARTICLE & NEWS</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === "news" && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white text-foreground rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setActiveDropdown("news")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href="/blog"
                    className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Latest News
                  </Link>
                  <Link
                    href="/events"
                    className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Events
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="nav-item hover:text-accent transition-colors">
              CONTACT US
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold btn-magnetic">
              <Link href="/donate">GET A QUOTES</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden p-2 hover:bg-primary/80 rounded-md transition-colors">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-foreground/20">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-accent transition-colors" onClick={toggleMenu}>
                HOME
              </Link>
              <Link href="/about" className="hover:text-accent transition-colors" onClick={toggleMenu}>
                ABOUT US
              </Link>
              <Link href="/team" className="hover:text-accent transition-colors" onClick={toggleMenu}>
                OUR TEAM
              </Link>
              <div className="space-y-2">
                <div className="font-semibold text-accent">PAGES</div>
                <Link
                  href="/environment"
                  className="block pl-4 hover:text-accent transition-colors"
                  onClick={toggleMenu}
                >
                  Environment & Eco-Restoration
                </Link>
                <Link
                  href="/healthcare"
                  className="block pl-4 hover:text-accent transition-colors"
                  onClick={toggleMenu}
                >
                  Healthcare Access
                </Link>
                <Link
                  href="/empowerment"
                  className="block pl-4 hover:text-accent transition-colors"
                  onClick={toggleMenu}
                >
                  Community Empowerment
                </Link>
                <Link
                  href="/disaster-management"
                  className="block pl-4 hover:text-accent transition-colors"
                  onClick={toggleMenu}
                >
                  Disaster Management
                </Link>
                <Link
                  href="/urban-governance"
                  className="block pl-4 hover:text-accent transition-colors"
                  onClick={toggleMenu}
                >
                  Urban Governance
                </Link>
                <Link
                  href="/social-welfare"
                  className="block pl-4 hover:text-accent transition-colors"
                  onClick={toggleMenu}
                >
                  Social Welfare
                </Link>
              </div>
              <Link href="/campaigns" className="hover:text-accent transition-colors" onClick={toggleMenu}>
                CAMPAIGNS
              </Link>
              <Link href="/blog" className="hover:text-accent transition-colors" onClick={toggleMenu}>
                ARTICLE & NEWS
              </Link>
              <Link href="/events" className="hover:text-accent transition-colors" onClick={toggleMenu}>
                EVENTS
              </Link>
              <Link href="/contact" className="hover:text-accent transition-colors" onClick={toggleMenu}>
                CONTACT US
              </Link>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-fit">
                <Link href="/donate" onClick={toggleMenu}>
                  GET A QUOTES
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
