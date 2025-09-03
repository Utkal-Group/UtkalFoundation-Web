import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, GraduationCap, Briefcase, HandHeart, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function EmpowermentPage() {
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800">
              Community Empowerment
            </Badge>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Building <span className="text-blue-600">Stronger Communities</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Empowering individuals and communities with skills, resources, and opportunities for sustainable
              development and self-reliance.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-16">Empowerment Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Skill Development",
                description: "Vocational training programs in tailoring, handicrafts, and digital literacy",
                stats: "5,000+ trained",
                color: "text-blue-600",
              },
              {
                icon: Briefcase,
                title: "Livelihood Support",
                description: "Microfinance and entrepreneurship support for small business development",
                stats: "1,200+ businesses",
                color: "text-green-600",
              },
              {
                icon: Users,
                title: "Women Empowerment",
                description: "Special programs focused on women's economic and social empowerment",
                stats: "3,000+ women",
                color: "text-pink-600",
              },
              {
                icon: Target,
                title: "Youth Development",
                description: "Leadership training and career guidance for young people",
                stats: "2,500+ youth",
                color: "text-purple-600",
              },
              {
                icon: HandHeart,
                title: "Community Leadership",
                description: "Training local leaders in governance and community development",
                stats: "500+ leaders",
                color: "text-orange-600",
              },
              {
                icon: TrendingUp,
                title: "Financial Literacy",
                description: "Education on banking, savings, and financial planning",
                stats: "8,000+ beneficiaries",
                color: "text-teal-600",
              },
            ].map((program, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${program.color}`}
                  >
                    <program.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-heading font-semibold text-xl">{program.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {program.stats}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-16">Success Stories</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
              <img
                src="/women-empowerment-india.png"
                alt="Community empowerment programs"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl mb-6">Creating Sustainable Livelihoods</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Through our comprehensive empowerment programs, we have helped thousands of individuals build
                sustainable livelihoods and become self-reliant.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-blue-600 mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">Employment Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-blue-600 mb-2">₹15K</div>
                  <div className="text-sm text-muted-foreground">Avg Monthly Income</div>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Involved</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
