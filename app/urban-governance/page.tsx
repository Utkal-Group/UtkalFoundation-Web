import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Building, Users, FileText, Scale, Megaphone, Eye } from "lucide-react"
import Link from "next/link"

export default function UrbanGovernancePage() {
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
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Support This Cause</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-purple-100 text-purple-800">
              Urban Governance
            </Badge>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Transparent & <span className="text-purple-600">Effective Governance</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Promoting transparent governance, citizen participation, and effective urban planning for sustainable city
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Governance Initiatives */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-16">Governance Initiatives</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Transparency Advocacy",
                description: "Promoting Right to Information and transparent government processes",
                stats: "500+ RTI applications",
                color: "text-purple-600",
              },
              {
                icon: Users,
                title: "Citizen Participation",
                description: "Facilitating public participation in urban planning and policy making",
                stats: "50+ consultations",
                color: "text-blue-600",
              },
              {
                icon: Building,
                title: "Urban Planning",
                description: "Supporting sustainable urban development and smart city initiatives",
                stats: "20+ projects",
                color: "text-green-600",
              },
              {
                icon: Scale,
                title: "Policy Advocacy",
                description: "Advocating for pro-poor policies and inclusive urban development",
                stats: "15+ policy changes",
                color: "text-orange-600",
              },
              {
                icon: Megaphone,
                title: "Civic Awareness",
                description: "Educating citizens about their rights and civic responsibilities",
                stats: "10,000+ citizens",
                color: "text-red-600",
              },
              {
                icon: FileText,
                title: "Governance Monitoring",
                description: "Monitoring government schemes and service delivery mechanisms",
                stats: "100+ audits",
                color: "text-teal-600",
              },
            ].map((initiative, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${initiative.color}`}
                  >
                    <initiative.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-heading font-semibold text-xl">{initiative.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {initiative.stats}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {initiative.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Impact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-16">Governance Impact</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-6">Strengthening Democracy</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our urban governance initiatives have strengthened democratic processes and improved service delivery in
                urban areas.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-purple-600 mb-2">80%</div>
                  <div className="text-sm text-muted-foreground">Transparency Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-purple-600 mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Cities Impacted</div>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Join Advocacy</Button>
            </div>
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center">
              <img
                src="/urban-governance-india.png"
                alt="Urban governance and citizen participation"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
