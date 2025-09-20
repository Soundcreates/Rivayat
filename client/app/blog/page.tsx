import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const posts = [
  {
    id: "1",
    title: "Banarasi Weave: Kashi's Living Legacy",
    excerpt:
      "Discover the intricate world of Banarasi silk weaving, where master craftsmen continue traditions passed down through generations in the holy city of Varanasi.",
    author: "Priya Sharma",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Heritage",
    image: "/banarasi-silk-weaving-loom-traditional.jpg",
    slug: "banarasi-weave-kashi-legacy",
  },
  {
    id: "2",
    title: "Dhokra Casting: From Wax to Bronze",
    excerpt:
      "Explore the ancient lost-wax casting technique of Dhokra, where tribal artisans transform beeswax and clay into stunning bronze sculptures.",
    author: "Arjun Patel",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Techniques",
    image: "/dhokra-bronze-casting-tribal-art.jpg",
    slug: "dhokra-metal-casting",
  },
  {
    id: "3",
    title: "Ajrakh: Indigo & Madder, Block by Block",
    excerpt:
      "Journey into the world of Ajrakh printing, where natural indigo and madder create mesmerizing geometric patterns on cotton fabric.",
    author: "Meera Krishnan",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Craft Stories",
    image: "/ajrakh-block-printing-indigo-patterns.jpg",
    slug: "ajrakh-indigo-madder",
  },
  {
    id: "4",
    title: "Channapatna Toys: Lacquered Joy",
    excerpt:
      "Meet the artisans of Channapatna who transform simple wood into colorful, lacquered toys that have delighted children for generations.",
    author: "Rohit Gupta",
    date: "2024-01-08",
    readTime: "5 min read",
    category: "Artisan Profiles",
    image: "/channapatna-wooden-toys-lacquered-colorful.jpg",
    slug: "channapatna-lacquered-toys",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Stories & Insights</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dive deep into the world of Indian crafts, meet the artisans, and discover the stories behind every thread
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-accent text-accent-foreground">{post.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span className="text-muted-foreground">{post.readTime}</span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-border">
                    <span className="text-xs text-accent font-medium flex items-center">
                      Read more <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
