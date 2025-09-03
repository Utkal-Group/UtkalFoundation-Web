import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar, Users, Target } from "lucide-react"
import Link from "next/link"

export default function CampaignsPage() {
  const campaigns = [
    {
      title: "Clean Water for Rural Communities",
      description: "Providing access to clean drinking water in remote villages across Odisha.",
      raised: 75000,
      goal: 100000,
      supporters: 245,
      daysLeft: 15,
      image: "/placeholder-ighrq.png",
      category: "Water & Sanitation",
    },
    {
      title: "Plant 10,000 Trees Initiative",
      description: "Massive tree plantation drive to combat deforestation and climate change.",
      raised: 45000,
      goal: 60000,
      supporters: 189,
      daysLeft: 22,
      image: "/placeholder-su24t.png",
      category: "Environment",
    },
    {
      title: "Education for All Children",
      description: "Building schools and providing educational resources in underserved areas.",
      raised: 120000,
      goal: 150000,
      supporters: 356,
      daysLeft: 8,
      image: "/rural-india-school-children.png",
      category: "Education",
    },
    {
      title: "Healthcare Mobile Units",
      description: "Deploying mobile medical units to provide healthcare in remote areas.",
      raised: 85000,
      goal: 120000,
      supporters: 198,
      daysLeft: 30,
      image: "/mobile-healthcare-rural-india.png",
      category: "Healthcare",
    },
    {
      title: "Women Empowerment Program",
      description: "Skill development and entrepreneurship training for rural women.",
      raised: 35000,
      goal: 50000,
      supporters: 142,
      daysLeft: 18,
      image: "/women-empowerment-india.png",
      category: "Empowerment",
    },
    {
      title: "Disaster Relief Fund",
      description: "Emergency relief and rehabilitation for disaster-affected communities.",
      raised: 95000,
      goal: 80000,
      supporters: 287,
      daysLeft: 0,
      image: "/india-disaster-relief.png",
      category: "Disaster Relief",
    },
  ]

  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { label: "HOME", href: "/" },
          { label: "CAMPAIGNS", href: "/campaigns" },
        ]}
        title="Active Campaigns"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Target className="h-4 w-4 mr-2" />
            ACTIVE CAMPAIGNS
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Support Our Ongoing Campaigns
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of supporters in making a real difference. Every contribution, no matter the size, helps us
            achieve our mission of creating sustainable change in communities across India.
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {campaigns.map((campaign, index) => {
            const progressPercentage = (campaign.raised / campaign.goal) * 100
            const isCompleted = campaign.raised >= campaign.goal

            return (
              <Card key={index} className="hover-lift overflow-hidden">
                <div className="relative">
                  <img
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {campaign.category}
                    </span>
                  </div>
                  {isCompleted && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        COMPLETED
                      </span>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">{campaign.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{campaign.description}</p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold">₹{campaign.raised.toLocaleString()} raised</span>
                        <span className="text-sm text-muted-foreground">₹{campaign.goal.toLocaleString()} goal</span>
                      </div>
                      <Progress value={progressPercentage} className="h-2" />
                      <div className="text-xs text-muted-foreground mt-1">
                        {Math.round(progressPercentage)}% completed
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-accent" />
                        <span>{campaign.supporters} supporters</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-accent" />
                        <span>{campaign.daysLeft > 0 ? `${campaign.daysLeft} days left` : "Campaign ended"}</span>
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      disabled={isCompleted}
                    >
                      <Link href={`/donate?campaign=${index}`}>
                        {isCompleted ? "Campaign Completed" : "Support This Campaign"}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Campaign Statistics */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 mb-16">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">Campaign Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">₹45L+</div>
              <div className="text-primary-foreground/80">Total Raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1,200+</div>
              <div className="text-primary-foreground/80">Active Supporters</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <div className="text-primary-foreground/80">Completed Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50,000+</div>
              <div className="text-primary-foreground/80">Lives Impacted</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-6">Start Your Own Campaign</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have an idea for a community project? Partner with us to launch your own campaign and make a lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Propose a Campaign</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
