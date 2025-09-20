"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, ImageIcon, Video } from "lucide-react"

export function ContentScheduler() {
  const [contentType, setContentType] = useState("reel")
  const [title, setTitle] = useState("")
  const [caption, setCaption] = useState("")
  const [publishTime, setPublishTime] = useState("")

  const handleSchedule = () => {
    // Schedule content logic
    console.log("Scheduling content:", { contentType, title, caption, publishTime })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          Schedule Content
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="content-type">Content Type</Label>
          <Select value={contentType} onValueChange={setContentType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="reel">
                <div className="flex items-center">
                  <Video className="w-4 h-4 mr-2" />
                  Reel
                </div>
              </SelectItem>
              <SelectItem value="story">
                <div className="flex items-center">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Story
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Enter content title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="caption">Caption</Label>
          <Textarea
            id="caption"
            placeholder="Write your caption here..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows={4}
          />
          <p className="text-xs text-muted-foreground mt-1">AI will optimize your caption for better engagement</p>
        </div>

        <div>
          <Label htmlFor="publish-time">Publish Time</Label>
          <div className="flex space-x-2">
            <Input type="date" className="flex-1" />
            <Input type="time" className="flex-1" />
          </div>
        </div>

        <div className="flex space-x-4">
          <Button variant="outline" className="flex-1 bg-transparent">
            Save Draft
          </Button>
          <Button onClick={handleSchedule} className="flex-1 bg-accent hover:bg-accent/90">
            <Clock className="w-4 h-4 mr-2" />
            Schedule
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
