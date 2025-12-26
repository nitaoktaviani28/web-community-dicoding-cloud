import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { MessageCircle, Diamond as Discord, Instagram, ArrowUpRight, Sparkles, Linkedin } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Join Us - Dicoding Cloud Community",
  description: "Bergabunglah dengan Dicoding Cloud Community melalui WhatsApp, Discord, atau ikuti kami di Instagram.",
}

export default function JoinPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 lg:py-32 flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Grow with us
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Ready to elevate your cloud skills?
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Bergabunglah dengan ratusan anggota lainnya dan mulai perjalanan Anda di dunia Cloud & DevOps hari ini.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group relative p-8 bg-background rounded-2xl border shadow-sm transition-all hover:shadow-md hover:border-primary/50">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-green-600 transition-transform group-hover:scale-110">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-6">Grup diskusi santai dan info terupdate.</p>
                <Button asChild variant="outline" className="w-full group/btn bg-transparent">
                  <Link
                    href="https://chat.whatsapp.com/LtcmnRmH96RAfC0M8CCN3M"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    Join Group{" "}
                    <ArrowUpRight className="w-3 h-3 opacity-0 transition-all group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </Button>
              </div>

              <div className="group relative p-8 bg-background rounded-2xl border shadow-sm transition-all hover:shadow-md hover:border-primary/50">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 transition-transform group-hover:scale-110">
                  <Discord className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Discord</h3>
                <p className="text-sm text-muted-foreground mb-6">Server teknis untuk mentoring dan kolaborasi.</p>
                <Button asChild variant="outline" className="w-full group/btn bg-transparent">
                  <Link
                    href="https://discord.gg/E6dMrqGy"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    Join Server{" "}
                    <ArrowUpRight className="w-3 h-3 opacity-0 transition-all group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </Button>
              </div>

              <div className="group relative p-8 bg-background rounded-2xl border shadow-sm transition-all hover:shadow-md hover:border-primary/50">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-50 text-pink-600 transition-transform group-hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Instagram</h3>
                <p className="text-sm text-muted-foreground mb-6">Update visual dan dokumentasi kegiatan.</p>
                <Button asChild variant="outline" className="w-full group/btn bg-transparent">
                  <Link
                    href="https://www.instagram.com/dicodingcloudcommunity_?igsh=MWpzeXF3ZzM2MWU0bw=="
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    Follow Us{" "}
                    <ArrowUpRight className="w-3 h-3 opacity-0 transition-all group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </Button>
              </div>

              <div className="group relative p-8 bg-background rounded-2xl border shadow-sm transition-all hover:shadow-md hover:border-primary/50">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 transition-transform group-hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground mb-6">Info profesional dan networking industri.</p>
                <Button asChild variant="outline" className="w-full group/btn bg-transparent">
                  <Link
                    href="https://www.linkedin.com/company/dicoding-cloud-community/"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    Connect{" "}
                    <ArrowUpRight className="w-3 h-3 opacity-0 transition-all group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
