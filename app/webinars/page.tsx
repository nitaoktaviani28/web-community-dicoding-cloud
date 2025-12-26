import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WebinarCard } from "@/components/webinar-card"
import { upcomingWebinars, pastWebinars } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Webinars - Dicoding Cloud Community",
  description: "Ikuti webinar cloud computing dan DevOps terbaru dari Dicoding Cloud Community.",
}

export default function WebinarsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 to-blue-50/50 py-12 border-b">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Webinars</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Daftar lengkap webinar yang kami selenggarakan, mulai dari yang akan datang hingga yang telah berlangsung.
            </p>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Upcoming Webinars</h2>
            {upcomingWebinars.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {upcomingWebinars.map((webinar) => (
                  <WebinarCard key={webinar.id} webinar={webinar} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/30 rounded-xl">
                <p className="text-muted-foreground">Belum ada webinar yang dijadwalkan. Pantau terus untuk update terbaru!</p>
              </div>
            )}
          </div>
        </section>

        {/* Past Webinars */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Past Webinars</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastWebinars.map((webinar) => (
                <WebinarCard key={webinar.id} webinar={webinar} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
