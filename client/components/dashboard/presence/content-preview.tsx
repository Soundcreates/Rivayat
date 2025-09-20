import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Edit, Trash2, Clock } from "lucide-react"

// Mock scheduled content
const scheduledContent = [
  {
    id: "1",
    type: "reel",
    title: "Behind the Scenes: Block Printing Process",
    caption: "Watch how traditional block printing comes to life! 🎨 #HandmadeCrafts #BlockPrinting",
    publishTime: "2024-01-16T10:00:00",
    status: "scheduled",
  },
  {
    id: "2",
    type: "story",
    title: "New Silk Saree Collection",
    caption: "Introducing our latest handwoven silk sarees ✨",
    publishTime: "2024-01-16T15:30:00",
    status: "scheduled",
  },
  {
    id: "3",
    type: "reel",
    title: "Customer Testimonial",
    caption: "Hear what our customers say about our crafts 💝",
    publishTime: "2024-01-15T12:00:00",
    status: "published",
  },
]

export function ContentPreview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Scheduled Content</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {scheduledContent.map((content) => (
            <div key={content.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {content.type === "reel" ? (
                    <Play className="w-4 h-4 text-accent" />
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-accent" />
                  )}
                  <span className="font-medium text-primary">{content.title}</span>
                </div>
                <Badge variant={content.status === "published" ? "default" : "secondary"}>{content.status}</Badge>
              </div>

              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{content.caption}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="w-3 h-3 mr-1" />
                  {new Date(content.publishTime).toLocaleString()}
                </div>

                {content.status === "scheduled" && (
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {scheduledContent.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p>No scheduled content yet.</p>
            <p className="text-sm">Create your first post to get started!</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
