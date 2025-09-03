import Link from "next/link"
import { Home } from "lucide-react"

interface BreadcrumbProps {
  items: Array<{
    label: string
    href?: string
  }>
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <section className="py-16 sm:py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center space-x-2 text-sm mb-4">
          <Home className="w-4 h-4" />
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              {index > 0 && <span className="text-primary-foreground/60">-</span>}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary-foreground uppercase tracking-wide font-medium">{item.label}</span>
              )}
            </div>
          ))}
        </div>
        <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
          {items[items.length - 1].label}
        </h1>
      </div>
    </section>
  )
}
