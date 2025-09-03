import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: "1",
    title: "Community Health Camp - Bhubaneswar",
    description:
      "Free medical checkups, health awareness sessions, and medicine distribution for underprivileged communities.",
    date: "2024-02-15",
    time: "9:00 AM - 4:00 PM",
    location: "Community Center, Bhubaneswar, Odisha",
    category: "Healthcare",
    attendees: 150,
    image: "https://www.nagpurtrends.com/uploads/thumbs/3218ay-Free-Medical-Camp-1024x576-l-thumb.jpeg",
  },
  {
    id: "2",
    title: "Tree Plantation Drive - Cuttack",
    description: "Join us in planting 1000+ saplings to restore green cover and combat climate change in urban areas.",
    date: "2024-02-22",
    time: "6:00 AM - 10:00 AM",
    location: "Millennium Park, Cuttack, Odisha",
    category: "Environment",
    attendees: 200,
    image: "https://thumbs.dreamstime.com/b/youth-volunteering-tree-planting-drive-isolated-vector-style-youth-volunteering-tree-planting-drive-isolated-vector-style-300012978.jpg",
  },
  {
    id: "3",
    title: "Women Empowerment Workshop",
    description:
      "Skill development workshop focusing on financial literacy, entrepreneurship, and leadership for rural women.",
    date: "2024-03-01",
    time: "10:00 AM - 3:00 PM",
    location: "Rural Development Center, Puri, Odisha",
    category: "Empowerment",
    attendees: 80,
    image: "https://www.inclusionhub.com/hubfs/Blog/Empowering-Women-in-the-Workplace--Strategies-for-Equality%2C-Leadership-&-Career-Advancement.jpg",
  },
  {
    id: "4",
    title: "Disaster Preparedness Training",
    description:
      "Community training on disaster preparedness, first aid, and emergency response for coastal communities.",
    date: "2024-03-08",
    time: "11:00 AM - 5:00 PM",
    location: "Coastal Community Hall, Puri, Odisha",
    category: "Disaster Management",
    attendees: 120,
    image: "https://ossim.in/dataimp1/636769928999581649course11.jpg",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              Upcoming Events
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Join us in our community events and be part of the positive change we're creating together
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="card-interactive hover-lift overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`${event.image}`}
                    alt={event.title}
                    className="w-full h-full object-cover hover-scale transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {event.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-1" />
                      {event.attendees} expected
                    </div>
                  </div>
                  <CardTitle className="font-heading font-semibold text-xl sm:text-2xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      {new Date(event.date).toLocaleDateString("en-IN", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-start text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button className="flex-1 btn-magnetic bg-accent hover:bg-accent/90 text-accent-foreground">
                      Register Now
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl mb-6">Want to Organize an Event?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Partner with us to organize impactful community events in your area
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="btn-magnetic">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
