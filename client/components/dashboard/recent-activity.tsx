import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Package, ShoppingCart, Star, TrendingUp } from "lucide-react"

const activities = [
  {
    type: "order",
    title: "New order received",
    description: "Handwoven Banarasi Silk Saree - ₹4,500",
    time: "2 minutes ago",
    icon: ShoppingCart,
    customer: "Priya Sharma",
  },
  {
    type: "review",
    title: "New 5-star review",
    description: 'Block Printed Cotton Kurta - "Beautiful craftsmanship!"',
    time: "1 hour ago",
    icon: Star,
    customer: "Amit Kumar",
  },
  {
    type: "stock",
    title: "Low stock alert",
    description: "Brass Decorative Bowl - Only 2 items left",
    time: "3 hours ago",
    icon: Package,
    customer: null,
  },
  {
    type: "milestone",
    title: "Sales milestone reached",
    description: "Congratulations! You've reached ₹50,000 in monthly sales",
    time: "1 day ago",
    icon: TrendingUp,
    customer: null,
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <div
                className={`p-2 rounded-full ${
                  activity.type === "order"
                    ? "bg-green-100 text-green-600"
                    : activity.type === "review"
                      ? "bg-yellow-100 text-yellow-600"
                      : activity.type === "stock"
                        ? "bg-red-100 text-red-600"
                        : "bg-blue-100 text-blue-600"
                }`}
              >
                <activity.icon className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-primary">{activity.title}</p>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                {activity.customer && (
                  <div className="flex items-center mt-2">
                    <Avatar className="w-6 h-6 mr-2">
                      <AvatarImage src={`/abstract-geometric-shapes.png?height=24&width=24&query=${activity.customer}`} />
                      <AvatarFallback className="text-xs">
                        {activity.customer
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{activity.customer}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
