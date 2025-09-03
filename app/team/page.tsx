import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Linkedin, Mail, Users, Award, GraduationCap } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"

export default function TeamPage() {
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
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Join Our Team</Button>
            </div>
          </div>
        </div>
      </nav>

      <Breadcrumb
        items={[{ label: "HOME", href: "/" }, { label: "ABOUT US", href: "/about" }, { label: "OUR TEAM" }]}
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800">
              Our Team
            </Badge>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Meet the <span className="text-blue-600">Change Makers</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate individuals dedicated to creating sustainable impact across communities in India.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced leaders guiding our mission with vision and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mr. Suresh Mishra",
                position: "Founder & Executive Director",
                education: "PhD in Environmental Science, IIT Delhi",
                experience: "15+ years in sustainable development",
                expertise: ["Environmental Policy", "Community Development", "Strategic Planning"],
                image: "indian professional man environmental scientist director",
              },
              {
                name: "Priya Sharma",
                position: "Program Director",
                education: "MBA in Social Entrepreneurship, TISS Mumbai",
                experience: "12+ years in NGO management",
                expertise: ["Program Management", "Stakeholder Engagement", "Impact Measurement"],
                image: "indian professional woman program director social work",
              },
              {
                name: "Dr. Anil Patel",
                position: "Healthcare Director",
                education: "MBBS, MD Community Medicine",
                experience: "20+ years in public health",
                expertise: ["Public Health", "Rural Healthcare", "Health Policy"],
                image: "indian doctor healthcare director public health professional",
              },
              {
                name: "Meera Reddy",
                position: "Finance & Operations Head",
                education: "CA, CFA",
                experience: "10+ years in financial management",
                expertise: ["Financial Planning", "Operations Management", "Compliance"],
                image: "indian professional woman finance operations manager",
              },
              {
                name: "Suresh Nair",
                position: "Field Operations Manager",
                education: "MSW in Rural Development",
                experience: "8+ years in grassroots work",
                expertise: ["Field Operations", "Community Mobilization", "Project Implementation"],
                image: "indian professional man field operations rural development",
              },
              {
                name: "Dr. Kavita Singh",
                position: "Research & Policy Head",
                education: "PhD in Public Policy, JNU",
                experience: "14+ years in policy research",
                expertise: ["Policy Research", "Data Analysis", "Advocacy"],
                image: "indian professional woman researcher policy analyst",
              },
            ].map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={`/abstract-geometric-shapes.png?height=128&width=128&query=${member.image}`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="font-heading font-bold text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.position}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Education</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.education}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Experience</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.experience}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Expertise</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center gap-3 pt-4">
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-transparent">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-transparent">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">Advisory Board</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Distinguished advisors providing strategic guidance and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Prof. Sunita Narain",
                position: "Environmental Policy Advisor",
                organization: "Centre for Science and Environment",
                image: "indian senior woman environmental policy advisor professor",
              },
              {
                name: "Dr. Ashok Khosla",
                position: "Sustainable Development Advisor",
                organization: "Development Alternatives",
                image: "indian senior man sustainable development advisor",
              },
              {
                name: "Ms. Aruna Roy",
                position: "Governance & Transparency Advisor",
                organization: "MKSS",
                image: "indian senior woman governance transparency social activist",
              },
              {
                name: "Dr. Devi Shetty",
                position: "Healthcare Strategy Advisor",
                organization: "Narayana Health",
                image: "indian senior man healthcare strategy cardiac surgeon",
              },
            ].map((advisor, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={`/abstract-geometric-shapes.png?height=96&width=96&query=${advisor.image}`}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="font-heading font-semibold text-lg">{advisor.name}</CardTitle>
                  <CardDescription className="text-primary text-sm font-medium">{advisor.position}</CardDescription>
                  <CardDescription className="text-muted-foreground text-xs">{advisor.organization}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are always looking for passionate individuals who share our vision of creating sustainable change.
              Whether you're a recent graduate or an experienced professional, there's a place for you in our mission.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Full-time Positions",
                  description: "Join our core team and lead impactful programs across various focus areas.",
                  action: "View Openings",
                },
                {
                  title: "Internship Program",
                  description: "Gain hands-on experience in social development and contribute to meaningful projects.",
                  action: "Apply for Internship",
                },
                {
                  title: "Volunteer Opportunities",
                  description: "Contribute your skills and time to support our initiatives in your area of expertise.",
                  action: "Become a Volunteer",
                },
              ].map((opportunity, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-heading font-semibold text-xl">{opportunity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                      {opportunity.description}
                    </CardDescription>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      {opportunity.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact HR Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
