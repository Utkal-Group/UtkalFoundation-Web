import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Leaf, TreePine, Droplets, Recycle, Wind, Sun } from "lucide-react"
import Link from "next/link"

export default function EnvironmentPage() {
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary">
              Environment & Eco-Restoration
            </Badge>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Protecting Our <span className="text-accent">Natural Heritage</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              We work tirelessly to restore ecosystems, combat climate change, and ensure a sustainable future for
              generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-16">
            Our Environmental Initiatives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TreePine,
                title: "Forest Restoration",
                description: "Planting native trees and restoring degraded forest lands across rural India",
                stats: "50,000+ trees planted",
                color: "text-green-600",
              },
              {
                icon: Droplets,
                title: "Water Conservation",
                description: "Building rainwater harvesting systems and protecting water bodies",
                stats: "200+ water bodies restored",
                color: "text-blue-600",
              },
              {
                icon: Recycle,
                title: "Waste Management",
                description: "Implementing sustainable waste management practices in communities",
                stats: "100+ villages covered",
                color: "text-purple-600",
              },
              {
                icon: Wind,
                title: "Clean Energy",
                description: "Promoting renewable energy solutions in rural and urban areas",
                stats: "500+ solar installations",
                color: "text-yellow-600",
              },
              {
                icon: Leaf,
                title: "Biodiversity Protection",
                description: "Conserving endangered species and protecting natural habitats",
                stats: "15+ species protected",
                color: "text-emerald-600",
              },
              {
                icon: Sun,
                title: "Climate Action",
                description: "Educating communities about climate change and adaptation strategies",
                stats: "10,000+ people trained",
                color: "text-orange-600",
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

      {/* Impact Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-16">Environmental Impact</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-6">Transforming Landscapes</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our comprehensive approach to environmental restoration has transformed over 500 hectares of degraded
                land into thriving ecosystems.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Hectares Restored</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Trees Planted</div>
                </div>
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Join Our Mission</Button>
            </div>
            <div className="aspect-square bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center">
              <img
                src="/india-forest-restoration.png"
                alt="Environmental restoration work"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
