import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: "1",
    title: "Sustainable Water Solutions: Our Impact in Rural Odisha",
    excerpt:
      "Discover how our clean water initiatives have transformed lives in remote villages, providing access to safe drinking water for over 10,000 families.",
    author: "Dr. Priya Sharma",
    date: "2024-01-15",
    category: "Water & Sanitation",
    readTime: "5 min read",
    image: "/image(3).jpg",
  },
  {
    id: "2",
    title: "Empowering Women Through Skill Development Programs",
    excerpt:
      "Learn about our comprehensive women empowerment initiatives that have helped over 500 women become financially independent through skill training.",
    author: "Rajesh Kumar",
    date: "2024-01-10",
    category: "Empowerment",
    readTime: "4 min read",
    image: "/women-empowerment-india.png",
  },
  {
    id: "3",
    title: "Climate Change Adaptation in Coastal Communities",
    excerpt:
      "Exploring innovative approaches to help coastal communities in Odisha adapt to climate change challenges and build resilience.",
    author: "Dr. Anita Patel",
    date: "2024-01-05",
    category: "Environment",
    readTime: "6 min read",
    image: "/download.jpeg",
  },
  {
    id: "4",
    title: "Healthcare Access: Mobile Medical Units Making a Difference",
    excerpt:
      "How our mobile healthcare initiative is bridging the gap in medical services for remote and underserved communities.",
    author: "Dr. Suresh Mohanty",
    date: "2023-12-28",
    category: "Healthcare",
    readTime: "5 min read",
    image: "/mobile-healthcare-rural-india.png",
  },
  {
    id: "5",
    title: "Urban Governance: Building Transparent Communities",
    excerpt:
      "Our efforts in promoting transparency and citizen participation in urban governance processes across Indian cities.",
    author: "Meera Nair",
    date: "2023-12-20",
    category: "Governance",
    readTime: "7 min read",
    image: "urban-governance-india.png",
  },
  {
    id: "6",
    title: "Disaster Preparedness: Lessons from Cyclone Response",
    excerpt:
      "Key insights from our disaster management efforts during recent cyclones and how communities can better prepare for natural disasters.",
    author: "Amit Sahoo",
    date: "2023-12-15",
    category: "Disaster Management",
    readTime: "6 min read",
    image: "image(2).jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              Latest News & Updates
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Stay informed about our latest initiatives, impact stories, and insights from the field
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-8">Featured Article</h2>
            <Card className="card-interactive hover-lift overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square overflow-hidden">
                  <img
                    src={`${blogPosts[0].image}`}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover hover-scale transition-transform duration-300"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {blogPosts[0].category}
                  </Badge>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-foreground mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(blogPosts[0].date).toLocaleDateString("en-IN")}
                      </div>
                    </div>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Link href={`/blog/${blogPosts[0].id}`} className="group">
                    <div className="flex items-center text-primary hover:text-primary/80 transition-colors">
                      <span className="font-semibold">Read Full Article</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Grid */}
          <div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-8">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="card-interactive hover-lift overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`${post.image}`}
                      alt={post.title}
                      className="w-full h-full object-cover hover-scale transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="font-heading font-semibold text-lg sm:text-xl line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString("en-IN")}
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.id}`} className="group">
                      <div className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm">
                        <span className="font-semibold">Read More</span>
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
