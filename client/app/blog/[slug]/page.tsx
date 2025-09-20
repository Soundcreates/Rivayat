import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = {
  "banarasi-weave-kashi-legacy": {
    title: "Banarasi Weave: Kashi's Living Legacy",
    author: "Priya Sharma",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Heritage",
    tags: ["Banarasi", "Silk", "Weaving", "Varanasi", "Heritage"],
    heroImage: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758376864/banarasi-silk-weaving-loom-master-craftsman_nv578v.jpg",
    content: `
      <p>In the narrow lanes of Varanasi, where the Ganges flows eternal, lives a tradition that has adorned royalty for over 500 years. The Banarasi weave, with its intricate patterns and lustrous silk, represents the pinnacle of Indian textile artistry.</p>
      
      <p>Master weaver Ramesh Chandra, whose family has been weaving for seven generations, sits at his handloom as the first rays of dawn filter through his workshop. His fingers move with practiced precision, creating patterns that seem to dance with light.</p>
      
      <p>"Each saree tells a story," he explains, his eyes never leaving the loom. "The motifs we weave - the kalga, bel, and jhallar - these are not just patterns. They are our heritage, passed down through centuries."</p>
      
      <p>The process of creating a single Banarasi saree can take anywhere from 15 days to six months, depending on the complexity of the design. The silk threads, often interwoven with gold and silver zari, create a fabric that is both luxurious and timeless.</p>
      
      <p>Today, as machine-made imitations flood the market, artisans like Ramesh face unprecedented challenges. Yet they continue to weave, preserving not just a craft, but a way of life that connects modern India to its glorious past.</p>
    `,
  },
  "dhokra-metal-casting": {
    title: "Dhokra Casting: From Wax to Bronze",
    author: "Arjun Patel",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Techniques",
    tags: ["Dhokra", "Bronze", "Casting", "Tribal Art", "Metal Work"],
    heroImage: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758376867/dhokra-bronze-casting-tribal-artisan-workshop_oucqrt.jpg",
    content: `
      <p>Deep in the forests of Chhattisgarh, where ancient traditions still thrive, the Dhokra artisans practice a craft that dates back 4,000 years. This lost-wax casting technique creates bronze sculptures that are both primitive and sophisticated.</p>
      
      <p>The process begins with clay from the riverbed, mixed with rice husk and cow dung to create the perfect consistency. Over this core, beeswax is carefully applied, shaped into intricate designs that will eventually become bronze.</p>
      
      <p>Sukra Bai, a master craftswoman from Kondagaon, demonstrates the delicate art of wax threading. "The wax must be warm but not hot," she explains, rolling thin strands between her palms. "Too hot and it breaks, too cold and it won't stick."</p>
      
      <p>Once the wax model is complete, it's covered with several layers of clay. The entire piece is then heated in a furnace, melting away the wax and leaving a perfect mold. Molten bronze is poured into this cavity, creating the final sculpture.</p>
      
      <p>Each Dhokra piece is unique - the technique doesn't allow for exact replicas. This individuality, combined with the rustic beauty of the bronze finish, makes every creation a treasured work of art.</p>
    `,
  },
  "ajrakh-indigo-madder": {
    title: "Ajrakh: Indigo & Madder, Block by Block",
    author: "Meera Krishnan",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Craft Stories",
    tags: ["Ajrakh", "Block Printing", "Indigo", "Natural Dyes", "Gujarat"],
    heroImage: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758376864/ajrakh-block-printing-indigo-dye-traditional-patte_jwmto4.jpg",
    content: `
      <p>Under the scorching sun of Kutch, where the desert meets the sea, lies the village of Ajrakhpur. Here, the ancient art of Ajrakh printing transforms plain cotton into mesmerizing tapestries of indigo and madder.</p>
      
      <p>The name 'Ajrakh' comes from the Arabic word 'azrak', meaning blue - the dominant color that defines this 700-year-old craft. But creating these deep blues and rich reds requires a process so complex it takes 16 steps and nearly a month to complete.</p>
      
      <p>Master printer Sufiyan Khatri begins before dawn, preparing the natural dyes that will bring the fabric to life. Indigo leaves fermented for days create the signature blue, while madder root produces the vibrant red. Iron and alum act as mordants, helping the colors bond permanently with the cotton.</p>
      
      <p>The wooden blocks, carved from teak and seasoned for years, are works of art themselves. Each block represents a different element of the design - stars, flowers, geometric patterns that when combined create the complex Ajrakh motifs.</p>
      
      <p>"Ajrakh is not just printing," Sufiyan explains as he aligns a block with mathematical precision. "It's a meditation, a prayer. Each print must be perfect, for there is no going back."</p>
      
      <p>The fabric undergoes multiple rounds of printing, washing, and drying. The harsh sun of Kutch, once an enemy, becomes an ally in setting the colors. The final result is a textile that grows more beautiful with age, its colors deepening with each wash.</p>
    `,
  },
  "channapatna-lacquered-toys": {
    title: "Channapatna Toys: Lacquered Joy",
    author: "Rohit Gupta",
    date: "2024-01-08",
    readTime: "5 min read",
    category: "Artisan Profiles",
    tags: ["Channapatna", "Toys", "Lacquer", "Wood Craft", "Karnataka"],
    heroImage: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758376865/channapatna-wooden-toys-colorful-lacquered-traditi_gqvqhm.jpg",
    content: `
      <p>In the small town of Channapatna, 60 kilometers from Bangalore, the sound of lathes fills the air as artisans transform simple wood into objects of joy. These are the makers of Channapatna toys, India's answer to European wooden toys, but with a vibrancy uniquely their own.</p>
      
      <p>The craft was introduced to this region in the 18th century by Tipu Sultan, who brought Persian artisans to train local craftsmen. Today, families like the Bavas have been making these toys for over five generations.</p>
      
      <p>Ravi Bava, a third-generation toy maker, selects his wood carefully. "Only ivory wood will do," he explains, running his hands over a smooth piece. "It's soft enough to carve easily but strong enough to last generations."</p>
      
      <p>The magic happens on the lathe, where rough wood is shaped into elephants, dolls, and spinning tops. But it's the lacquering process that truly brings these toys to life. Natural lac, derived from the secretions of insects, is mixed with vibrant dyes and applied while the toy spins on the lathe.</p>
      
      <p>The result is a finish so smooth and colorful it seems to glow. Red, yellow, green, and blue toys emerge from the workshop, each one safe for children and environmentally friendly - a stark contrast to plastic toys flooding the market.</p>
      
      <p>"When a child plays with our toys," Ravi smiles, "they're not just playing. They're connecting with centuries of craftsmanship, with the hands that shaped each curve, with the tradition that refuses to die."</p>
    `,
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Hero Image */}
        <div className="relative aspect-[2/1] mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.heroImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none text-foreground" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  )
}
