import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import type { Webinar } from "@/lib/data"
import { CalendarDays, User } from "lucide-react"

interface WebinarCardProps {
  webinar: Webinar
}

export function WebinarCard({ webinar }: WebinarCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden hover:shadow-md transition-shadow">
      {/* ===== POSTER (FULL, TIDAK TERPOTONG) ===== */}
      <div className="relative w-full bg-muted">
        <Image
          src={webinar.posterUrl || "/placeholder.svg"}
          alt={webinar.title}
          width={800}
          height={1000}
          className="h-auto w-full object-contain"
          priority
        />

        {webinar.status === "upcoming" && (
          <div className="absolute right-3 top-3 rounded bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
            Upcoming
          </div>
        )}
      </div>

      {/* ===== HEADER ===== */}
      <CardHeader className="p-4 flex-none">
        <CardTitle className="line-clamp-2 text-lg">{webinar.title}</CardTitle>

        <CardDescription className="mt-2 flex items-center gap-4">
          <span className="flex items-center gap-1 text-xs">
            <CalendarDays className="h-3 w-3" />
            {new Date(webinar.date).toLocaleDateString("id-ID", {
              dateStyle: "medium",
            })}
          </span>

          <span className="flex items-center gap-1 text-xs">
            <User className="h-3 w-3" />
            {webinar.speaker}
          </span>
        </CardDescription>
      </CardHeader>

      {/* ===== DESCRIPTION ===== */}
      <CardContent className="flex-1 p-4 pt-0">
        <p className="text-sm text-muted-foreground">{webinar.description}</p>
      </CardContent>

      {/* ===== CTA ===== */}
    </Card>
  )
}
