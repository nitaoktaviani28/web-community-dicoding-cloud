import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DocumentationCard } from "@/components/documentation-card"
import { documentation } from "@/lib/data"
import type { Metadata } from "next"
import { BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Documentation - Dicoding Cloud Community",
  description: "Akses dokumentasi lengkap dari webinar Dicoding Cloud Community.",
}

export default function DocumentationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 to-blue-50/50 py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Dokumentasi lengkap dari webinar yang telah berlangsung.
            </p>
          </div>
        </section>

        {/* Documentation List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {documentation.length > 0 ? (
              <div className="space-y-6">
                {documentation.map((doc) => (
                  <DocumentationCard key={doc.id} doc={doc} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/30 rounded-xl">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                <p className="text-muted-foreground">Dokumentasi sedang dalam proses. Silakan cek kembali nanti!</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
