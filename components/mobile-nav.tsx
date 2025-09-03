"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Heart, ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [focusOpen, setFocusOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-lg">Utkal Foundation</span>
        </div>

        <nav className="space-y-4">
          <Collapsible open={aboutOpen} onOpenChange={setAboutOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors">
              About
              <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 pl-4">
              <Link
                href="/about"
                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/team"
                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Our Team
              </Link>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible open={focusOpen} onOpenChange={setFocusOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors">
              Focus Areas
              <ChevronDown className={`h-4 w-4 transition-transform ${focusOpen ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 pl-4">
              <Link
                href="/environment"
                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Environment & Eco-Restoration
              </Link>
              <Link
                href="/empowerment"
                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Community Empowerment
              </Link>
              <Link
                href="/healthcare"
                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Healthcare Access
              </Link>
              <Link
                href="/disaster-management"
                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Disaster Management
              </Link>
              <Link
                href="/urban-governance"
                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Urban Governance
              </Link>
            </CollapsibleContent>
          </Collapsible>

          <Link
            href="#impact"
            className="block py-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Impact
          </Link>
          <Link
            href="/events"
            className="block py-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/blog"
            className="block py-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <div className="pt-4">
            <Link href="/donate" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Donate Now</Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
