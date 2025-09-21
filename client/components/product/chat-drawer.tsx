"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Send } from "lucide-react"
import { FeatureFlags } from "@/lib/types"

interface ChatDrawerProps {
  artisan: {
    id: string
    name: string
    avatar: string
  }
}

export function ChatDrawer({ artisan }: ChatDrawerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  if (!FeatureFlags.aiChat) {
    return null
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      // Send message logic here
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg bg-accent hover:bg-accent/90"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full sm:w-96">
        <SheetHeader className="border-b pb-4">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={artisan.avatar || "/placeholder.svg"} />
              <AvatarFallback>
                {artisan.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <SheetTitle className="text-left">{artisan.name}</SheetTitle>
              <p className="text-sm text-muted-foreground">Usually replies within an hour</p>
            </div>
          </div>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Chat Messages */}
          <div className="flex-1 py-4 space-y-4">
            <div className="flex items-start space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src={artisan.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-xs">
                  {artisan.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                <p className="text-sm">
                  Hello! Thank you for your interest in my handwoven saree. I'd be happy to answer any questions you
                  have about the craftsmanship or customization options.
                </p>
                <span className="text-xs text-muted-foreground">2 min ago</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground bg-muted rounded-full px-3 py-1 inline-block">
                This is a preview of the chat feature
              </p>
            </div>
          </div>

          {/* Message Input */}
          <div className="border-t pt-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Messages are powered by AI to help artisans respond quickly
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
