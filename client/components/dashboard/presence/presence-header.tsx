import { Button } from "@/components/ui/button"
import { Sparkles, Calendar } from "lucide-react"

export function PresenceHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
        <h1 className="font-serif text-3xl font-bold text-primary mb-2">AI Digital Presence</h1>
        <p className="text-muted-foreground">Schedule and manage your social media content with AI assistance</p>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          <Calendar className="w-4 h-4 mr-2" />
          View Calendar
        </Button>

        <Button size="sm" className="bg-accent hover:bg-accent/90">
          <Sparkles className="w-4 h-4 mr-2" />
          Generate Content
        </Button>
      </div>
    </div>
  )
}
