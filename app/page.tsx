"use client";
import Link from "next/link"
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Users, Quote, Star } from "lucide-react"

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const testimonials = [
  {
    text: "Working with Utkal Foundation has been transformative. Their approach to environmental education and community engagement has helped our village implement sustainable practices.",
    name: "Priya Sharma",
    role: "Community Leader",
    image: "/indian-woman-environmental-activist-smiling.png",
  },
  {
    text: "The foundation's initiatives brought real change to our community. We now focus on clean energy and waste management.",
    name: "Rajesh Kumar",
    role: "Social Worker",
    image: "/indian-man-social-worker.png",
  },
  {
    text: "I’m inspired by their work. Their workshops empower youth to be more conscious about sustainability.",
    name: "Ananya Singh",
    role: "Student Volunteer",
    image: "/indian-student-volunteer.png",
  },
];


export default function HomePage() {
  const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0">
          <img
            src="/hands-holding-earth-globe-leaves.png"
            alt="Environmental protection - hands holding earth"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <ScrollAnimation animation="fadeInUp">
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-2 text-sm font-medium animate-float bg-accent/20 text-accent border-accent/30"
              >
                UTKAL FOUNDATION
              </Badge>
              <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight tracking-tight">
                Go Green Today,
                <br />
                Save The World
                <br />
                Tomorrow
              </h1>
              <p className="font-serif text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
                Join us in making impactful strides in environment, health, and governance. Together, we create lasting
                change through innovative solutions and community empowerment for a sustainable future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button
                    size="lg"
                    className="btn-magnetic bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-3 font-semibold"
                  >
                    DISCOVER NOW
                  </Button>
                </Link>
                <Link href="/donate">
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover-glow border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent rounded-full px-8 py-3 group font-semibold"
                  >
                    VIEW CAMPAIGNS
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Social Media Icons - Right Side */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
          <a
            href="#"
            className="w-12 h-12 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252C24.007 5.367 18.641.001.012.001z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollAnimation animation="slideInLeft">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                DONATION
              </Badge>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                Join our Event & Helping us by Donation
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Your support enables us to create lasting environmental impact. Every donation helps us plant trees,
                clean water sources, and educate communities about sustainable practices for a greener future.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">
                    Direct impact on environmental restoration and community development projects
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">
                    Transparent use of funds with regular impact reports and community updates
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">
                    Join a community of changemakers working towards sustainable development goals
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/donate">
                  <Button
                    size="lg"
                    className="btn-magnetic bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path
                        fillRule="evenodd"
                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-semibold">OPEN DONATIONS</span>
                  </Button>
                </Link>
                <button className="flex items-center space-x-3 text-primary hover:text-primary/80 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold">WATCH VIDEO</span>
                </button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideInRight">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square">
                    <img
                      src="https://hrkit.rometheme.pro/zonagreen/wp-content/uploads/sites/104/2024/06/photo-8.jpg"
                      alt="Hands holding small plants - community environmental action"
                      className="w-full h-full object-cover rounded-2xl hover-scale transition-transform"
                    />
                  </div>
                  <div className="aspect-square">
                    <img
                      src="/india-community-volunteers.png"
                      alt="Environmental volunteers working together"
                      className="w-full h-full object-cover rounded-2xl hover-scale transition-transform"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Green Infographic Section */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-accent/20 text-accent border-accent/30">
                GREEN ECOLOGY
              </Badge>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-primary-foreground mb-6">
                The Importance of Ecosystem
              </h2>
              <p className="text-base sm:text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Understanding the interconnected web of life helps us protect biodiversity and maintain ecological
                balance. Every element plays a crucial role in sustaining our planet's health and ensuring a sustainable
                future for generations to come.
              </p>
            </div>
          </ScrollAnimation>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Left Side Items */}
              <div className="space-y-6">
                <ScrollAnimation animation="slideInLeft" delay={100}>
                  <div className="flex items-center space-x-4 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-primary-foreground/20 transition-colors">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zm2 2V5h1v1h-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-primary-foreground mb-1">TREES</h3>
                      <p className="text-sm text-primary-foreground/80">
                        Carbon absorption and oxygen production for cleaner air and climate stability
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideInLeft" delay={200}>
                  <div className="flex items-center space-x-4 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-primary-foreground/20 transition-colors">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-primary-foreground mb-1">ANIMAL</h3>
                      <p className="text-sm text-primary-foreground/80">
                        Biodiversity preservation and natural ecosystem balance maintenance
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideInLeft" delay={300}>
                  <div className="flex items-center space-x-4 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-primary-foreground/20 transition-colors">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-primary-foreground mb-1">HOME</h3>
                      <p className="text-sm text-primary-foreground/80">
                        Sustainable living practices and eco-friendly community development
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Center Lightbulb */}
              <div className="flex justify-center">
                <ScrollAnimation animation="scaleIn" delay={400}>
                  <div className="relative">
                    <div className="w-48 h-48 bg-accent/20 rounded-full flex items-center justify-center animate-pulse-slow">
                      <div className="w-32 h-32 bg-primary-foreground rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">GREEN</div>
                          <div className="text-sm text-primary/80">INFOGRAPHIC</div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-8 bg-accent/30 rounded-t-full flex items-end justify-center pb-2">
                        <svg className="w-6 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Right Side Items */}
              <div className="space-y-6">
                <ScrollAnimation animation="slideInRight" delay={100}>
                  <div className="flex items-center space-x-4 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-primary-foreground/20 transition-colors">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 6.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464a1 1 0 10-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-primary-foreground mb-1">ENERGY</h3>
                      <p className="text-sm text-primary-foreground/80">
                        Renewable energy solutions and sustainable power generation systems
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideInRight" delay={200}>
                  <div className="flex items-center space-x-4 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-primary-foreground/20 transition-colors">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-primary-foreground mb-1">WATER</h3>
                      <p className="text-sm text-primary-foreground/80">
                        Clean water access and conservation programs for sustainable communities
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideInRight" delay={300}>
                  <div className="flex items-center space-x-4 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-primary-foreground/20 transition-colors">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-primary-foreground mb-1">RECYCLE</h3>
                      <p className="text-sm text-primary-foreground/80">
                        Waste management and circular economy initiatives for zero waste communities
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollAnimation animation="slideInLeft">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square">
                    <img
                      src="/hands-earth-plant.png"
                      alt="Hands holding earth with plant"
                      className="w-full h-full object-cover rounded-2xl hover-scale transition-transform"
                    />
                  </div>
                  <div className="aspect-[4/3]">
                    <img
                      src="https://hrkit.rometheme.pro/zonagreen/wp-content/uploads/sites/104/2024/06/photo-5.jpg"
                      alt="Environmental volunteers"
                      className="w-full h-full object-cover rounded-2xl hover-scale transition-transform"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[4/3]">
                    <img
                      src="/volunteer-recycling-team.png"
                      alt="Volunteers with recycling"
                      className="w-full h-full object-cover rounded-2xl hover-scale transition-transform"
                    />
                  </div>
                  <div className="bg-accent/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <div className="flex -space-x-2 mb-3">
                      <div className="w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
                      <div className="w-8 h-8 bg-accent rounded-full border-2 border-background"></div>
                      <div className="w-8 h-8 bg-primary/70 rounded-full border-2 border-background"></div>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs bg-transparent">
                      Join Our Community
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideInRight">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                ABOUT US
              </Badge>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                Join Us Utkal Foundation in The Fight for Environment
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                We are dedicated to creating sustainable environmental solutions through community engagement,
                education, and direct action. Our mission is to protect natural resources while empowering local
                communities to build a greener future.
              </p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Through innovative programs in reforestation, waste management, and renewable energy, we work alongside
                communities to implement lasting environmental changes that benefit both people and planet.
              </p>

              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <img src="/chairman__1_-removebg-preview.png" alt="Founder" className="w-10 h-10 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Suresh Mishra</h4>
                  <p className="text-sm text-muted-foreground">Founder & Environmental Activist</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/events">
                  <Button
                    size="lg"
                    className="btn-magnetic bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-semibold">ATTEND EVENT</span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-3 flex items-center space-x-2 group bg-transparent"
                  >
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">JOIN & INVOLVED</span>
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 sm:py-20 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp">
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video rounded-3xl overflow-hidden relative group cursor-pointer">
                <img
                  src="/crystal-globe-moss.png"
                  alt="Environmental video - crystal globe in nature"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary-foreground/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Project Categories Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollAnimation animation="slideInLeft">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                PROJECT CATEGORIES
              </Badge>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                We are an Organization that Educates Society
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Through comprehensive education and community engagement, we empower individuals and communities to take
                meaningful action for environmental protection and sustainable development.
              </p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Our programs focus on practical solutions that create lasting impact while building awareness about
                environmental challenges and opportunities for positive change.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 mb-8 italic text-muted-foreground">
                "Education is the most powerful weapon which you can use to change the world. When we educate
                communities about environmental protection, we create lasting change that benefits everyone."
              </blockquote>
              <p className="font-semibold text-foreground mb-8">- Rajesh Kumar, Founder</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button
                    size="lg"
                    className="btn-magnetic bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-3"
                  >
                    READ MORE
                  </Button>
                </Link>
                <div className="flex items-center space-x-3 text-primary">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Have a Questions ?</p>
                    <p className="font-semibold">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideInRight">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">01</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Conservation</h3>
                    <p className="text-muted-foreground">
                      Protecting natural habitats and biodiversity through community-based conservation programs and
                      sustainable resource management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">02</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Climate Action</h3>
                    <p className="text-muted-foreground">
                      Implementing climate resilience strategies and promoting renewable energy solutions to combat
                      climate change effects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">03</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Education & Awareness</h3>
                    <p className="text-muted-foreground">
                      Building environmental consciousness through educational programs, workshops, and community
                      outreach initiatives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">04</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Community Development</h3>
                    <p className="text-muted-foreground">
                      Empowering local communities with sustainable livelihood opportunities and environmental
                      stewardship skills.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                SAVE OUR FUTURE
              </Badge>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                Protect Nature for Future Generations
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join our mission to create a sustainable world. Every action counts in building a better future for our
                children and the planet we call home.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animation="fadeInUp" delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Volunteer Opportunities</h3>
                <p className="text-muted-foreground text-sm">
                  Join our community of changemakers and contribute your skills to environmental protection initiatives.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Membership</h3>
                <p className="text-muted-foreground text-sm">
                  Become a member and gain access to exclusive events, resources, and networking opportunities.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path
                      fillRule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Donate</h3>
                <p className="text-muted-foreground text-sm">
                  Support our environmental programs and help us create lasting impact in communities worldwide.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Campaigns</h3>
                <p className="text-muted-foreground text-sm">
                  Participate in our environmental campaigns and help raise awareness about critical issues.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
<section className="py-16 sm:py-20 bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      
      {/* Left Side - Images */}
      <ScrollAnimation animation="slideInLeft">
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square">
            <img
              src="/diverse-volunteers-charity.png"
              alt="Volunteers with charity signs"
              className="w-full h-full object-cover rounded-2xl hover-scale transition-transform"
            />
          </div>
          <div className="space-y-4">
            <div className="aspect-[4/3]">
              <img
                src="https://hrkit.rometheme.pro/zonagreen/wp-content/uploads/sites/104/2024/06/photo-3.jpg"
                alt="Save the planet volunteers"
                className="w-full h-full object-cover rounded-2xl hover-scale transition-transform"
              />
            </div>
            <div className="bg-accent/10 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">+1.2K</div>
              <div className="text-sm text-muted-foreground">User Community</div>
            </div>
            <div className="aspect-[4/3]">
              <img
                src="https://hrkit.rometheme.pro/zonagreen/wp-content/uploads/sites/104/2024/06/photo-7.jpg"
                alt="Save the planet volunteers"
                className="w-full h-full object-cover rounded-2xl hover-scale transition-transform"
              />
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Right Side - Text + Feedback Slider */}
      <ScrollAnimation animation="slideInRight">
        <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
          OUR TESTIMONIAL
        </Badge>
        <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
          A Sustainable Planet for All
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
          Our community members share their experiences and the positive impact they've witnessed through our
          environmental initiatives and community programs.
        </p>
        <p className="text-base text-muted-foreground mb-8 leading-relaxed">
          Together, we're building a network of environmental champions who are committed to creating lasting
          change in their communities and beyond.
        </p>

        {/* Slider only for feedbacks */}
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i}>
              <div className="bg-muted/50 rounded-2xl p-6 shadow-md">
                <div className="flex items-start mb-4">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                </div>
                <p className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </ScrollAnimation>
    </div>
  </div>
</section>


      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                NEWSLETTER
              </Badge>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                Latest News & Article
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Stay updated with our latest environmental initiatives, success stories, and community impact through
                our regular newsletter and blog articles.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="fadeInUp" delay={100}>
              <div className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src="/woman-recycling-bottles.png"
                    alt="Recycling initiative"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    25 Jun
                  </div>
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Recycle</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Collecting Garbage Plastic Bottles into Recycle
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Our community recycling program has successfully collected over 10,000 plastic bottles this month,
                    turning waste into valuable resources for local development projects.
                  </p>
                  <Link href="/blog">
                    <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                      READ MORE
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <img src="https://hrkit.rometheme.pro/zonagreen/wp-content/uploads/sites/104/2024/06/blog-2.jpg" alt="Donation drive" className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    25 Jun
                  </div>
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path
                        fillRule="evenodd"
                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Donation</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Group Diverse People Volunteer Holding</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Our volunteer network continues to grow with passionate individuals from diverse backgrounds united
                    in their commitment to environmental protection and community service.
                  </p>
                  <Link href="/blog">
                    <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                      READ MORE
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src="https://hrkit.rometheme.pro/zonagreen/wp-content/uploads/sites/104/2024/06/blog-1.jpg"
                    alt="Community planting"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    25 Jun
                  </div>
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zm2 2V5h1v1h-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Grow</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Helping New Life to Grow Shot of a Diverse
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Through our tree planting initiatives, we've helped establish over 5,000 new trees this year,
                    creating green spaces that will benefit communities for generations to come.
                  </p>
                  <Link href="/blog">
                    <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                      READ MORE
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
