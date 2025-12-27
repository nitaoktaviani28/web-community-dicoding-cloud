import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-dcn.jpg"
            alt="Dicoding Cloud Community"
            width={40}
            height={40}
            className="rounded-lg object-cover"
          />
          <span className="hidden font-bold sm:inline-block text-primary">Dicoding Cloud Community</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/webinars" className="transition-colors hover:text-primary">
            Webinars
          </Link>
          <Link href="/documentation" className="transition-colors hover:text-primary">
            Documentation
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="default" size="sm">
            <Link href="/join">Join Us</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
