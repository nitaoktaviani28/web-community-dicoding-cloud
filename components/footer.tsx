import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo-dcn.jpg" alt="Dicoding Cloud Community" width={40} height={40} className="rounded-lg" />
              <span className="font-bold text-primary">Dicoding Cloud Community</span>
            </Link>
            <p className="text-muted-foreground max-w-xs text-sm">
              Belajar, Berbagi, dan Bertumbuh di Dunia Cloud & DevOps bersama komunitas Dicoding.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/webinars" className="hover:text-primary transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="https://www.instagram.com/dicodingcloudcommunity_?igsh=MWpzeXF3ZzM2MWU0bw=="
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/E6dMrqGy"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://chat.whatsapp.com/LtcmnRmH96RAfC0M8CCN3M"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/dicoding-cloud-community/"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Dicoding Cloud Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
