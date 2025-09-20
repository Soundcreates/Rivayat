"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    question: "How does Rivayat help artisans?",
    answer:
      "We provide artisans with a direct platform to showcase their crafts, tell their stories, and connect with customers worldwide. 85% of each sale goes directly to the artisan, ensuring fair compensation for their skills and time.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Orders can be cancelled within 24 hours of placement for a full refund. After 24 hours, cancellation depends on the production status. Custom or personalized items cannot be cancelled once production begins.",
  },
  {
    question: "How do you verify artisan authenticity?",
    answer:
      "Our verification process includes on-ground visits, skill assessments, and documentation of traditional techniques. Verified artisans receive a special badge and are featured prominently on our platform.",
  },
  {
    question: "What shipping options are available?",
    answer:
      "We offer Local (2-3 days), Regional (3-5 days), and National (5-7 days) shipping across India. International shipping is available to select countries with 10-15 day delivery times.",
  },
  {
    question: "Do you offer returns and exchanges?",
    answer:
      "Yes, we accept returns within 7 days of delivery for unused items in original packaging. Handmade items may have slight variations which are not considered defects. Custom items are non-returnable.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground leading-relaxed">
            Everything you need to know about shopping with Rivayat
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-sm">
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-medium text-primary pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed text-pretty">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">Still have questions? We're here to help.</p>
          <a
            href="/help"
            className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
          >
            Visit Help Center →
          </a>
        </div>
      </div>
    </section>
  )
}
