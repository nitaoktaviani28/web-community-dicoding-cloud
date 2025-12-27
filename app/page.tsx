import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WebinarCard } from "@/components/webinar-card"
import { Button } from "@/components/ui/button"
import { upcomingWebinars, pastWebinars, communityStats } from "@/lib/data"
import Link from "next/link"
import { Users, Video, Mic2, ArrowRight, MessageSquare, Handshake } from "lucide-react"

export default function Home() {
  // 🔹 FILTER: hanya webinar upcoming yang ADA poster & bukan placeholder
  const visibleUpcomingWebinars = upcomingWebinars.filter(
    (webinar) => webinar.posterUrl && !webinar.posterUrl.includes("placeholder"),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/95 via-primary to-blue-800 py-20 text-white lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl whitespace-nowrap">
                Dicoding Cloud Community
              </h1>

              <p className="text-lg text-blue-50/90 sm:text-xl">
                Belajar, Berbagi, dan Bertumbuh di Dunia Cloud & DevOps bersama para ahli di bidangnya.
              </p>

              <div className="space-y-1">
                <p className="text-xs font-medium text-blue-100/80 uppercase tracking-wide">
                  Bagian dari program Dicoding – Dicoding Community Network
                </p>
                <p className="text-xs text-blue-200/70">
                  Fokus pada pembelajaran, diskusi, dan praktik Cloud Computing & DevOps.
                </p>
              </div>

              {/* Button removed */}
            </div>
          </div>

          {/* Background blur accents */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        </section>

        {/* ================= COMMUNITY STATS ================= */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard icon={<Users className="h-6 w-6" />} value={communityStats.members} label="Members" />
              <StatCard icon={<Video className="h-6 w-6" />} value={communityStats.webinars} label="Webinars" />
              <StatCard
                icon={<MessageSquare className="h-6 w-6" />}
                value={communityStats.techTalks}
                label="Tech Talks"
              />
              <StatCard icon={<Mic2 className="h-6 w-6" />} value={communityStats.speakers} label="Speakers" />
            </div>
          </div>
        </section>

        {/* ================= COLLABORATION LOGOS ================= */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-muted-foreground font-medium uppercase tracking-widest text-xs">
                <Handshake className="h-4 w-4" />
                Kolaborasi Bersama
              </div>
              <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img src="/images/logo-dicoding.png" alt="Dicoding" className="h-10 w-auto" />
                <img src="/images/logo-dfg.png" alt="DFG" className="h-12 w-auto" />
                <img src="/images/logo-debug-life.png" alt="Debug Life" className="h-10 w-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= UPCOMING WEBINARS ================= */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Upcoming Webinars</h2>
                <p className="text-muted-foreground text-lg">Jangan lewatkan kesempatan belajar langsung dari ahli.</p>
              </div>

              <Button asChild variant="ghost" className="group">
                <Link href="/webinars" className="flex items-center gap-2">
                  Lihat Semua
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleUpcomingWebinars.slice(0, 5).map((webinar) => (
                <WebinarCard key={webinar.id} webinar={webinar} />
              ))}
            </div>
          </div>
        </section>

        {/* ================= PAST WEBINARS ================= */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Past Webinars</h2>
              <p className="text-muted-foreground text-lg">Kumpulan webinar yang telah berlangsung sebelumnya.</p>
            </div>

            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {pastWebinars.map((webinar) => (
                <div key={webinar.id} className="group relative aspect-[4/5] overflow-hidden rounded-xl border bg-card">
                  <img
                    src={webinar.posterUrl || "/placeholder.svg"}
                    alt={webinar.title}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
                    <p className="text-white font-semibold text-sm line-clamp-2">{webinar.title}</p>
                    <p className="text-white/70 text-xs mt-1">{webinar.speaker}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

/* ================= REUSABLE STAT CARD ================= */
function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: number
  label: string
}) {
  return (
    <div className="flex flex-col items-center gap-2 p-6 bg-background rounded-xl border shadow-sm">
      <div className="rounded-full bg-primary/10 p-3 text-primary">{icon}</div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider text-center">{label}</div>
    </div>
  )
}
