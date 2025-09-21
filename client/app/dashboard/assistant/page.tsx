"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, Bot, User, Lightbulb, Target, TrendingUp, Sparkles, Copy } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
}

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your AI assistant for Rivayat. I can help you with product descriptions, marketing strategies, pricing advice, and business insights. How can I assist you today?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [productDescription, setProductDescription] = useState("")
  const [generatedDescription, setGeneratedDescription] = useState("")
  const [isGeneratingDescription, setIsGeneratingDescription] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputMessage),
        sender: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("pricing") || lowerInput.includes("price")) {
      return "For pricing your handcrafted items, consider these factors: 1) Material costs (silk, cotton, dyes), 2) Time invested (hours of work), 3) Skill level and uniqueness, 4) Market demand. A good formula is: (Material Cost + Labor Cost) × 2.5 = Retail Price. For premium handloom items, don't undervalue your craftsmanship!"
    }

    if (lowerInput.includes("marketing") || lowerInput.includes("promote")) {
      return "Here are effective marketing strategies for artisans: 1) Share your story - customers love authentic narratives, 2) Use high-quality photos showing the creation process, 3) Engage with customers through social media, 4) Collaborate with fashion influencers, 5) Participate in craft fairs and exhibitions. Focus on the heritage and uniqueness of your work!"
    }

    if (lowerInput.includes("social media") || lowerInput.includes("instagram")) {
      return "Social media tips for artisans: 1) Post consistently (3-4 times per week), 2) Use relevant hashtags like #HandmadeInIndia #TraditionalCraft, 3) Share behind-the-scenes content, 4) Engage with your community, 5) Use Stories for daily updates. Remember, authenticity resonates more than perfection!"
    }

    return "That's a great question! I can help you with various aspects of your artisan business including pricing strategies, marketing techniques, product descriptions, social media planning, and business growth tips. What specific area would you like to explore further?"
  }

  const generateProductDescription = async () => {
    if (!productDescription.trim()) return

    setIsGeneratingDescription(true)

    // Simulate AI generation
    setTimeout(() => {
      setGeneratedDescription(
        `Exquisite ${productDescription.toLowerCase()} crafted with meticulous attention to detail by skilled artisans. This piece embodies the rich heritage of traditional Indian craftsmanship, featuring intricate patterns and premium materials. Each item is handmade with love, ensuring uniqueness and authenticity.\n\nKey Features:\n• Handcrafted using traditional techniques\n• Premium quality materials\n• Unique design with cultural significance\n• Perfect for special occasions or everyday elegance\n• Supports local artisan communities\n\nCare Instructions: Handle with care, dry clean recommended to preserve the intricate work and vibrant colors.`,
      )
      setIsGeneratingDescription(false)
    }, 2000)
  }

  const quickPrompts = [
    { text: "Help me price my silk saree", icon: TrendingUp },
    { text: "Marketing strategy for handloom products", icon: Target },
    { text: "Social media content ideas", icon: Lightbulb },
    { text: "How to photograph my products", icon: Sparkles },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-heading font-bold text-foreground">AI Assistant</h2>
        <p className="text-muted-foreground mt-2">Get personalized advice and support for your artisan business.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle className="font-heading flex items-center">
                <Bot className="w-5 h-5 mr-2 text-accent" />
                Business Assistant
              </CardTitle>
              <CardDescription>Ask questions about pricing, marketing, and growing your business.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    >
                      <Avatar className="w-8 h-8">
                        {message.sender === "user" ? (
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            <User className="w-4 h-4" />
                          </AvatarFallback>
                        ) : (
                          <AvatarFallback className="bg-accent text-accent-foreground">
                            <Bot className="w-4 h-4" />
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div
                        className={`rounded-lg p-3 ${
                          message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-accent text-accent-foreground">
                          <Bot className="w-4 h-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-muted text-foreground rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me anything about your business..."
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                />
                <Button onClick={sendMessage} disabled={!inputMessage.trim() || isTyping}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          {/* Quick Prompts */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-lg">Quick Questions</CardTitle>
              <CardDescription>Common topics artisans ask about</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickPrompts.map((prompt, index) => {
                const IconComponent = prompt.icon
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-3 bg-transparent"
                    onClick={() => setInputMessage(prompt.text)}
                  >
                    <IconComponent className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{prompt.text}</span>
                  </Button>
                )
              })}
            </CardContent>
          </Card>

          {/* Product Description Generator */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-lg flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-accent" />
                Description Generator
              </CardTitle>
              <CardDescription>Generate compelling product descriptions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="product-input">Product Name</Label>
                <Input
                  id="product-input"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  placeholder="e.g., Silk Saree, Block Print Kurta"
                />
              </div>

              <Button
                onClick={generateProductDescription}
                disabled={isGeneratingDescription || !productDescription.trim()}
                className="w-full"
              >
                {isGeneratingDescription ? (
                  <>
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Description
                  </>
                )}
              </Button>

              {generatedDescription && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Generated Description</Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigator.clipboard.writeText(generatedDescription)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="p-3 bg-muted rounded-lg text-sm whitespace-pre-wrap max-h-40 overflow-y-auto">
                    {generatedDescription}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Business Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-lg">Today's Tip</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm text-foreground">
                  <strong>Photography Tip:</strong> Natural lighting works best for showcasing textile textures. Take
                  photos near a window during golden hour for warm, appealing product shots.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
