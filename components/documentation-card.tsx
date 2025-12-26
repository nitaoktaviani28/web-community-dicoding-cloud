import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Documentation } from "@/lib/data"
import { Github, CalendarDays } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface DocumentationCardProps {
  doc: Documentation
}

export function DocumentationCard({ doc }: DocumentationCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-48 aspect-video md:aspect-square relative flex-none">
          <Image src={doc.posterUrl || "/placeholder.svg"} alt={doc.webinarTitle} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <CardHeader className="p-6">
            <CardTitle className="text-xl">{doc.webinarTitle}</CardTitle>
            <CardDescription className="flex items-center gap-1 mt-1">
              <CalendarDays className="w-3 h-3" />
              {new Date(doc.date).toLocaleDateString("id-ID", { dateStyle: "medium" })}
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
            <div className="flex flex-wrap gap-2">
              {doc.githubUrl && (
                <Button variant="outline" size="sm" asChild className="gap-2 bg-transparent">
                  <Link href={doc.githubUrl}>
                    <Github className="w-4 h-4" />
                    GitHub
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}
