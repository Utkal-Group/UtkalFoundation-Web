import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Home, GraduationCap, Shield, Utensils } from "lucide-react"
import Link from "next/link"

export default function SocialWelfarePage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { label: "HOME", href: "/" },
          { label: "SOCIAL WELFARE", href: "/social-welfare" },
        ]}
        title="Social Welfare Programs"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Heart className="h-4 w-4 mr-2" />
            SOCIAL WELFARE
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Building Stronger Communities Through Social Support
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our social welfare programs focus on providing essential support services, promoting social inclusion, and
            creating opportunities for vulnerable populations to thrive and participate fully in society.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Community Support Centers</h3>
              <p className="text-muted-foreground mb-4">
                Establishing local support centers that provide counseling, legal aid, and social services to community
                members in need.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Free counseling services
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Legal aid assistance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Social welfare guidance
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Housing Assistance</h3>
              <p className="text-muted-foreground mb-4">
                Supporting families in securing safe, affordable housing through financial assistance and housing
                development programs.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Affordable housing projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Rental assistance programs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Home improvement grants
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Education Support</h3>
              <p className="text-muted-foreground mb-4">
                Providing educational opportunities and support to children and adults from disadvantaged backgrounds.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Scholarship programs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Adult literacy classes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Skill development training
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Child Protection</h3>
              <p className="text-muted-foreground mb-4">
                Safeguarding children's rights and providing protection services for vulnerable children and families.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Child safety programs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Family support services
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Awareness campaigns
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Utensils className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Food Security</h3>
              <p className="text-muted-foreground mb-4">
                Addressing hunger and malnutrition through food distribution programs and nutrition education
                initiatives.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Community kitchens
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Food distribution drives
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Nutrition education
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Elderly Care</h3>
              <p className="text-muted-foreground mb-4">
                Providing comprehensive care and support services for elderly community members to ensure their dignity
                and well-being.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Senior citizen centers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Healthcare support
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Social activities
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Impact Statistics */}
        <div className="bg-accent/5 rounded-2xl p-8 mb-16">
          <h2 className="font-heading text-3xl font-bold text-center text-primary mb-8">Our Social Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15,000+</div>
              <div className="text-muted-foreground">Families Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Community Centers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">2,500+</div>
              <div className="text-muted-foreground">Children Educated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Housing Units Built</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-6">Join Our Social Welfare Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Help us create stronger, more inclusive communities where everyone has access to essential services and
            opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/donate">Support Our Programs</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
