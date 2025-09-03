import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Users, Leaf, Stethoscope, CreditCard, Smartphone, Building, Check } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"

export default function DonatePage() {
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
            <div className="flex items-center space-x-4">
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </nav>

      <Breadcrumb items={[{ label: "HOME", href: "/" }, { label: "CAMPAIGN" }]} />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-brand-orange-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 text-sm font-medium bg-brand-orange-soft text-brand-orange"
            >
              Make a Donation
            </Badge>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Your Support <span className="text-brand-orange">Changes Lives</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Every donation, big or small, helps us create lasting impact in communities across India. Join us in
              building a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">Your Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how your donation directly contributes to our various programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                amount: "₹500",
                impact: "Provides clean water for a family for one month",
                icon: Leaf,
                color: "text-primary",
                bgColor: "bg-primary/10",
              },
              {
                amount: "₹1,000",
                impact: "Funds medical check-up for 5 children in rural areas",
                icon: Stethoscope,
                color: "text-brand-orange",
                bgColor: "bg-brand-orange-soft",
              },
              {
                amount: "₹2,500",
                impact: "Supports skill training for one person for 3 months",
                icon: Users,
                color: "text-accent",
                bgColor: "bg-success-soft",
              },
              {
                amount: "₹5,000",
                impact: "Plants 100 trees and maintains them for a year",
                icon: Leaf,
                color: "text-accent",
                bgColor: "bg-success-soft",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <div className={`text-2xl font-heading font-bold ${item.color} mb-2`}>{item.amount}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">{item.impact}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">Make Your Donation</h2>
              <p className="text-lg text-muted-foreground">Choose your donation amount and preferred payment method</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Donation Amount Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading font-semibold text-xl">Select Donation Amount</CardTitle>
                  <CardDescription>Choose a preset amount or enter your own</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {["₹500", "₹1,000", "₹2,500", "₹5,000", "₹10,000", "₹25,000"].map((amount) => (
                      <Button
                        key={amount}
                        variant="outline"
                        className="h-12 text-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                      >
                        {amount}
                      </Button>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="customAmount" className="text-sm font-medium">
                      Custom Amount
                    </label>
                    <Input id="customAmount" placeholder="Enter amount in ₹" className="text-lg h-12" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Donation Type</h3>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="donationType"
                          value="one-time"
                          className="text-primary"
                          defaultChecked
                        />
                        <span>One-time donation</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="donationType" value="monthly" className="text-primary" />
                        <span>Monthly recurring</span>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading font-semibold text-xl">Payment Method</CardTitle>
                  <CardDescription>Secure payment options available</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      {
                        icon: CreditCard,
                        title: "Credit/Debit Card",
                        description: "Visa, Mastercard, RuPay accepted",
                        color: "text-primary",
                      },
                      {
                        icon: Smartphone,
                        title: "UPI Payment",
                        description: "Google Pay, PhonePe, Paytm",
                        color: "text-accent",
                      },
                      {
                        icon: Building,
                        title: "Net Banking",
                        description: "All major banks supported",
                        color: "text-brand-orange",
                      },
                    ].map((method, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-4 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          className="text-primary"
                          defaultChecked={index === 0}
                        />
                        <div
                          className={`w-10 h-10 ${method.color.replace("text-", "bg-").replace("-600", "-100")} rounded-lg flex items-center justify-center`}
                        >
                          <method.icon className={`w-5 h-5 ${method.color}`} />
                        </div>
                        <div>
                          <div className="font-medium">{method.title}</div>
                          <div className="text-sm text-muted-foreground">{method.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="donorName" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input id="donorName" placeholder="Enter your full name" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="donorEmail" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input id="donorEmail" type="email" placeholder="Enter your email" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="donorPhone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="donorPhone" type="tel" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <Button className="w-full bg-brand-orange hover:bg-brand-orange text-white h-12 text-lg">
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
                Why Your Donation Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Your contribution directly funds our programs and helps us reach more communities in need. We ensure
                transparency and accountability in every rupee spent.
              </p>

              <div className="space-y-4">
                {[
                  "100% of donations go directly to programs",
                  "Regular impact reports and updates",
                  "Tax exemption under Section 80G",
                  "Transparent financial reporting",
                  "Direct community impact",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-square bg-brand-orange-soft rounded-2xl flex items-center justify-center">
              <img
                src="/indian-ngo-community-work.png"
                alt="Community impact through donations"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">Other Ways to Support</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond monetary donations, there are many ways to contribute to our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Volunteer Your Time",
                description: "Join our team of dedicated volunteers and contribute your skills to our programs.",
                action: "Become a Volunteer",
                icon: Users,
                color: "text-blue-600",
              },
              {
                title: "Corporate Partnership",
                description: "Partner with us for CSR initiatives and employee engagement programs.",
                action: "Explore Partnership",
                icon: Building,
                color: "text-green-600",
              },
              {
                title: "Spread Awareness",
                description: "Share our mission with your network and help us reach more supporters.",
                action: "Share Our Story",
                icon: Heart,
                color: "text-red-600",
              },
            ].map((option, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${option.color.replace("text-", "bg-").replace("-600", "-100")} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <option.icon className={`w-8 h-8 ${option.color}`} />
                  </div>
                  <CardTitle className="font-heading font-semibold text-xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {option.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
