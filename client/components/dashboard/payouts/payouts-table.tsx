import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, RefreshCw } from "lucide-react"

// Mock payouts data
const payouts = [
  {
    id: "PAY-001",
    amount: 15600,
    status: "PROCESSED",
    date: "2024-01-10",
    processedDate: "2024-01-12",
    orders: ["ORD-001", "ORD-002", "ORD-003"],
  },
  {
    id: "PAY-002",
    amount: 8200,
    status: "PENDING",
    date: "2024-01-15",
    processedDate: null,
    orders: ["ORD-004", "ORD-005"],
  },
  {
    id: "PAY-003",
    amount: 22400,
    status: "PROCESSED",
    date: "2024-01-05",
    processedDate: "2024-01-07",
    orders: ["ORD-006", "ORD-007", "ORD-008", "ORD-009"],
  },
  {
    id: "PAY-004",
    amount: 3200,
    status: "FAILED",
    date: "2024-01-08",
    processedDate: null,
    orders: ["ORD-010"],
    failureReason: "Invalid bank details",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "PENDING":
      return "bg-yellow-100 text-yellow-800"
    case "PROCESSED":
      return "bg-green-100 text-green-800"
    case "FAILED":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function PayoutsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Payout History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-medium">Payout ID</th>
                <th className="text-left p-4 font-medium">Amount</th>
                <th className="text-left p-4 font-medium">Orders</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Requested</th>
                <th className="text-left p-4 font-medium">Processed</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((payout) => (
                <tr key={payout.id} className="border-b hover:bg-muted/50">
                  <td className="p-4">
                    <span className="font-mono text-sm">{payout.id}</span>
                  </td>
                  <td className="p-4">
                    <span className="font-medium">₹{payout.amount.toLocaleString()}</span>
                  </td>
                  <td className="p-4">
                    <div className="text-sm">
                      <span className="text-muted-foreground">
                        {payout.orders.length} order{payout.orders.length > 1 ? "s" : ""}
                      </span>
                      <div className="text-xs text-muted-foreground mt-1">
                        {payout.orders.slice(0, 2).join(", ")}
                        {payout.orders.length > 2 && "..."}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge className={getStatusColor(payout.status)}>{payout.status}</Badge>
                    {payout.failureReason && <div className="text-xs text-red-600 mt-1">{payout.failureReason}</div>}
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-muted-foreground">{new Date(payout.date).toLocaleDateString()}</span>
                  </td>
                  <td className="p-4">
                    {payout.processedDate ? (
                      <span className="text-sm text-muted-foreground">
                        {new Date(payout.processedDate).toLocaleDateString()}
                      </span>
                    ) : (
                      <span className="text-sm text-muted-foreground">-</span>
                    )}
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      {payout.status === "FAILED" && (
                        <Button variant="ghost" size="sm">
                          <RefreshCw className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
