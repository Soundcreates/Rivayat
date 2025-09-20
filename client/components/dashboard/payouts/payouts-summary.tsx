import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Clock, CheckCircle, AlertCircle } from "lucide-react"

const summaryData = [
  {
    title: "Available Balance",
    value: "₹12,450",
    description: "Ready for payout",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Pending Payouts",
    value: "₹8,200",
    description: "Processing",
    icon: Clock,
    color: "text-yellow-600",
  },
  {
    title: "This Month",
    value: "₹45,600",
    description: "Total earnings",
    icon: CheckCircle,
    color: "text-blue-600",
  },
  {
    title: "Failed Payouts",
    value: "₹0",
    description: "Requires attention",
    icon: AlertCircle,
    color: "text-red-600",
  },
]

export function PayoutsSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryData.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{item.title}</CardTitle>
            <item.icon className={`h-4 w-4 ${item.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary mb-1">{item.value}</div>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
