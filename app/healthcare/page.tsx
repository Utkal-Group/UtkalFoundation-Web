import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Stethoscope, Heart, Users, Pill, Activity, Shield } from "lucide-react"
import Link from "next/link"

export default function HealthcarePage() {
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-red-100 text-red-800">
              Healthcare Access
            </Badge>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Healthcare for <span className="text-red-600">Everyone</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Ensuring quality healthcare reaches the most underserved communities through mobile clinics, health camps,
              and awareness programs.
            </p>
          </div>
        </div>
      </section>

      {/* Healthcare Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-16">Our Healthcare Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Mobile Medical Camps",
                description: "Regular health camps in remote villages with qualified doctors and nurses",
                stats: "100+ camps annually",
                color: "text-red-600",
              },
              {
                icon: Heart,
                title: "Maternal Health",
                description: "Prenatal and postnatal care for mothers and newborns",
                stats: "2,000+ mothers",
                color: "text-pink-600",
              },
              {
                icon: Users,
                title: "Community Health Workers",
                description: "Training local health workers to provide basic healthcare services",
                stats: "200+ workers trained",
                color: "text-blue-600",
              },
              {
                icon: Pill,
                title: "Medicine Distribution",
                description: "Free distribution of essential medicines to those in need",
                stats: "50,000+ beneficiaries",
                color: "text-green-600",
              },
              {
                icon: Activity,
                title: "Health Awareness",
                description: "Education programs on hygiene, nutrition, and disease prevention",
                stats: "25,000+ educated",
                color: "text-purple-600",
              },
              {
                icon: Shield,
                title: "Vaccination Drives",
                description: "Immunization programs for children and adults",
                stats: "15,000+ vaccinated",
                color: "text-orange-600",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${service.color}`}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-heading font-semibold text-xl">{service.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {service.stats}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Impact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-16">Health Impact</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-6">Saving Lives, Building Health</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our healthcare initiatives have reached over 100,000 people in remote areas, providing essential medical
                care and health education.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-red-600 mb-2">100K+</div>
                  <div className="text-sm text-muted-foreground">People Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-red-600 mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Recovery Rate</div>
                </div>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white">Support Healthcare</Button>
            </div>
            <div className="aspect-square bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl flex items-center justify-center">
              <img
                src="/rural-india-medical-camp.png"
                alt="Healthcare services"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
