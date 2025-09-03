import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Target, Eye, Users, Award, Globe, Calendar } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-heading font-bold text-xl">Utkal Foundation</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                Our Team
              </Link>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Support Us</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb Section */}
      <Breadcrumb items={[{ label: "HOME", href: "/" }, { label: "ABOUT US" }]} />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              About Utkal Foundation
            </Badge>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Building a <span className="text-primary">Better Tomorrow</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Since 2020, we have been dedicated to creating sustainable change through innovative solutions across
              multiple sectors in India.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading font-bold text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  To empower communities through sustainable development initiatives in environment, healthcare,
                  education, and governance, creating lasting positive change across India.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-heading font-bold text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  A sustainable and equitable society where every individual has access to basic necessities,
                  opportunities for growth, and a voice in governance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-success-soft rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-heading font-bold text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  Transparency, community participation, sustainability, innovation, and inclusive development guide all
                  our initiatives and partnerships.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Utkal Foundation was established in 2020 with a vision to address the multifaceted challenges facing
                communities across India. Founded by a group of passionate social entrepreneurs, we began our journey in
                Odisha and have since expanded our reach to multiple states.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our approach is rooted in the belief that sustainable development requires a holistic strategy that
                addresses environmental, social, and governance challenges simultaneously. We work closely with local
                communities, government agencies, and partner organizations to create lasting impact.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Over the years, we have evolved from a small grassroots organization to a recognized NGO working across
                six key focus areas, always maintaining our commitment to transparency, community participation, and
                measurable impact.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">View Our Impact Report</Button>
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <img
                src="/indian-ngo-community-work.png"
                alt="Utkal Foundation journey and community work"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">Key Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that reflect our commitment to creating meaningful change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                number: "500,000+",
                label: "Lives Impacted",
                description: "Direct and indirect beneficiaries across all programs",
              },
              {
                icon: Globe,
                number: "15",
                label: "States Covered",
                description: "Presence across multiple Indian states",
              },
              {
                icon: Award,
                number: "25+",
                label: "Awards Received",
                description: "Recognition for excellence in social work",
              },
              {
                icon: Calendar,
                number: "4+",
                label: "Years of Impact",
                description: "Consistent service since our establishment",
              },
            ].map((achievement, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-primary mb-2">{achievement.number}</div>
                  <CardTitle className="font-heading font-semibold text-lg">{achievement.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">{achievement.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">Our Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborating with government agencies, corporations, and international organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Government Partners",
                description:
                  "Working with state and central government departments for policy implementation and community development programs.",
                partners: [
                  "Ministry of Rural Development",
                  "State Forest Departments",
                  "Urban Development Authorities",
                ],
              },
              {
                category: "Corporate Partners",
                description:
                  "Collaborating with private sector organizations for CSR initiatives and sustainable development projects.",
                partners: ["Tech Companies", "Manufacturing Industries", "Financial Institutions"],
              },
              {
                category: "International Partners",
                description: "Partnering with global organizations for knowledge exchange and funding support.",
                partners: ["UN Agencies", "International NGOs", "Development Banks"],
              },
            ].map((partnership, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-heading font-semibold text-xl">{partnership.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {partnership.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {partnership.partners.map((partner, idx) => (
                      <Badge key={idx} variant="outline" className="mr-2 mb-2">
                        {partner}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Be part of our journey to create sustainable change. Together, we can build a better future for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Become a Volunteer
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
