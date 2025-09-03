import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, AlertTriangle, Users, Home, Truck, Radio } from "lucide-react"
import Link from "next/link"

export default function DisasterManagementPage() {
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-orange-100 text-orange-800">
              Disaster Management
            </Badge>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Building <span className="text-orange-600">Resilient Communities</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Preparing communities for natural disasters through early warning systems, emergency response training,
              and resilient infrastructure development.
            </p>
          </div>
        </div>
      </section>

      {/* Disaster Management Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-16">
            Our Disaster Management Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Early Warning Systems",
                description: "Advanced weather monitoring and community alert systems for timely warnings",
                stats: "50+ villages covered",
                color: "text-orange-600",
              },
              {
                icon: Users,
                title: "Emergency Response Training",
                description: "Training community volunteers in first aid and emergency response",
                stats: "1,000+ volunteers",
                color: "text-red-600",
              },
              {
                icon: Home,
                title: "Resilient Infrastructure",
                description: "Building disaster-resistant homes and community centers",
                stats: "200+ structures",
                color: "text-blue-600",
              },
              {
                icon: Truck,
                title: "Relief Distribution",
                description: "Rapid deployment of food, water, and medical supplies during disasters",
                stats: "24/7 response team",
                color: "text-green-600",
              },
              {
                icon: Radio,
                title: "Communication Networks",
                description: "Establishing reliable communication systems for emergency coordination",
                stats: "30+ networks",
                color: "text-purple-600",
              },
              {
                icon: Shield,
                title: "Risk Assessment",
                description: "Comprehensive vulnerability mapping and risk assessment studies",
                stats: "100+ assessments",
                color: "text-teal-600",
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

      {/* Disaster Response Impact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-16">Emergency Response Impact</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center">
              <img
                src="/india-flood-relief.png"
                alt="Disaster management and emergency response"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl mb-6">Rapid Response, Lasting Recovery</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our disaster management programs have helped communities prepare for and recover from natural disasters,
                reducing casualties and economic losses.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-orange-600 mb-2">75%</div>
                  <div className="text-sm text-muted-foreground">Risk Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-orange-600 mb-2">48hrs</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">Join Response Team</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
