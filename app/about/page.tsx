import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { Target, Eye, Heart, ShieldCheck, Globe, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About - Dicoding Cloud Community",
  description: "Kenali lebih dekat Dicoding Cloud Community, visi, misi, dan nilai-nilai komunitas kami.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-blue-50/50 py-16 border-b">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight mb-6">About Us</h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Dicoding Cloud Community adalah wadah bagi para pengembang, pelajar, dan praktisi IT di Indonesia untuk
              belajar, berbagi, dan bertumbuh bersama dalam ekosistem Cloud Computing dan DevOps.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6 p-8 bg-primary/5 rounded-2xl border border-primary/10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Eye className="w-4 h-4" />
                  Visi
                </div>
                <h2 className="text-2xl font-bold">Menjadi Komunitas Cloud Terdepan</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi pusat rujukan dan pengembangan bakat teknologi cloud terbaik di Indonesia yang mampu bersaing
                  di kancah global melalui kolaborasi dan edukasi berkelanjutan.
                </p>
              </div>
              <div className="space-y-6 p-8 bg-blue-50/50 rounded-2xl border border-blue-100">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                  <Target className="w-4 h-4" />
                  Misi
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Zap className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-muted-foreground">
                      Menyelenggarakan webinar dan workshop berkualitas secara rutin.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <Globe className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-muted-foreground">Membangun jejaring profesional antar anggota komunitas.</p>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-muted-foreground">
                      Menyediakan akses ke sumber daya pembelajaran cloud yang terkurasi.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Community Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nilai-nilai yang kami pegang teguh dalam menjalankan komunitas ini.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Belajar",
                  desc: "Kami percaya bahwa pembelajaran tidak pernah berhenti di dunia teknologi.",
                  icon: Zap,
                },
                {
                  title: "Berbagi",
                  desc: "Berbagi pengetahuan adalah cara terbaik untuk memperkuat pemahaman sendiri.",
                  icon: Heart,
                },
                {
                  title: "Bertumbuh",
                  desc: "Membantu sesama anggota untuk mencapai potensi maksimal dalam karir IT.",
                  icon: Target,
                },
              ].map((value, idx) => (
                <div key={idx} className="bg-background p-8 rounded-xl border shadow-sm text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
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
