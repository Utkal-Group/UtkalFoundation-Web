"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface DonationCampaign {
  id: string
  title: string
  description: string
  raised: number
  goal: number
  category: string
  image: string
  donors: number
}

const campaigns: DonationCampaign[] = [
  {
    id: "1",
    title: "Clean Water for Rural Communities",
    description: "Providing sustainable water solutions to remote villages in Odisha",
    raised: 75000,
    goal: 100000,
    category: "Water",
    image: "clean water wells rural India community development",
    donors: 245,
  },
  {
    id: "2",
    title: "Education Support for Tribal Children",
    description: "Building schools and providing educational resources in tribal areas",
    raised: 45000,
    goal: 80000,
    category: "Education",
    image: "tribal children education school India learning",
    donors: 189,
  },
  {
    id: "3",
    title: "Healthcare Mobile Units",
    description: "Mobile medical units reaching remote areas with essential healthcare",
    raised: 32000,
    goal: 60000,
    category: "Healthcare",
    image: "mobile medical unit rural healthcare India doctors",
    donors: 156,
  },
]

export function DonationProgress() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
            Active Campaigns
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Support our ongoing initiatives that are making real impact in communities across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {campaigns.map((campaign) => {
            const percentage = Math.round((campaign.raised / campaign.goal) * 100)

            return (
              <Card key={campaign.id} className="card-interactive hover-lift overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`/abstract-geometric-shapes.png?height=200&width=350&query=${campaign.image}`}
                    alt={campaign.title}
                    className="w-full h-full object-cover hover-scale transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {campaign.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{campaign.donors} donors</span>
                  </div>
                  <CardTitle className="font-heading font-semibold text-lg sm:text-xl line-clamp-2">
                    {campaign.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">{campaign.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Raised</span>
                      <span className="font-semibold">₹{campaign.raised.toLocaleString()}</span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{percentage}% funded</span>
                      <span className="text-muted-foreground">Goal: ₹{campaign.goal.toLocaleString()}</span>
                    </div>
                  </div>

                  <Link href={`/donate?campaign=${campaign.id}`}>
                    <Button className="w-full btn-magnetic bg-accent hover:bg-accent/90 text-accent-foreground">
                      Donate Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
