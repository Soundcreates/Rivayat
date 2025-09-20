import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, Users, Package, Clock, RotateCcw } from "lucide-react"

const kpis = [
  {
    title: "Average Order Value",
    value: "₹2,450",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "vs last 30 days",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "+0.8%",
    trend: "up",
    icon: TrendingUp,
    description: "visitors to buyers",
  },
  {
    title: "Repeat Purchase %",
    value: "28%",
    change: "-2.1%",
    trend: "down",
    icon: Users,
    description: "returning customers",
  },
  {
    title: "Stockout Rate",
    value: "8%",
    change: "+1.2%",
    trend: "down",
    icon: Package,
    description: "out of stock items",
  },
  {
    title: "Payout Cycle Time",
    value: "5.2 days",
    change: "-0.8 days",
    trend: "up",
    icon: Clock,
    description: "average processing",
  },
  {
    title: "Return Rate",
    value: "2.1%",
    change: "-0.3%",
    trend: "up",
    icon: RotateCcw,
    description: "returned orders",
  },
]

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {kpis.map((kpi) => (
        <Card key={kpi.title} className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
            <kpi.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary mb-1">{kpi.value}</div>
            <div className="flex items-center text-xs">
              <span className={`flex items-center ${kpi.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                {kpi.trend === "up" ? (
                  <TrendingUp className="w-3 h-3 mr-1" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-1" />
                )}
                {kpi.change}
              </span>
              <span className="text-muted-foreground ml-2">{kpi.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
