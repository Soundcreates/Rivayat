import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Package, Truck } from "lucide-react"

// Mock orders data
const orders = [
  {
    id: "ORD-001",
    customer: "Priya Sharma",
    items: 2,
    total: 6500,
    status: "PAID",
    date: "2024-01-15",
    products: ["Handwoven Silk Saree", "Silver Earrings"],
  },
  {
    id: "ORD-002",
    customer: "Amit Kumar",
    items: 1,
    total: 1200,
    status: "SHIPPED",
    date: "2024-01-14",
    products: ["Block Printed Kurta"],
  },
  {
    id: "ORD-003",
    customer: "Sunita Devi",
    items: 3,
    total: 2850,
    status: "DELIVERED",
    date: "2024-01-12",
    products: ["Brass Bowl", "Wooden Box", "Cotton Scarf"],
  },
  {
    id: "ORD-004",
    customer: "Rajesh Gupta",
    items: 1,
    total: 4500,
    status: "PLACED",
    date: "2024-01-15",
    products: ["Handwoven Carpet"],
  },
  {
    id: "ORD-005",
    customer: "Meera Joshi",
    items: 2,
    total: 1800,
    status: "RETURNED",
    date: "2024-01-10",
    products: ["Embroidered Cushion", "Clay Pot"],
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "PLACED":
      return "bg-blue-100 text-blue-800"
    case "PAID":
      return "bg-green-100 text-green-800"
    case "SHIPPED":
      return "bg-yellow-100 text-yellow-800"
    case "DELIVERED":
      return "bg-emerald-100 text-emerald-800"
    case "RETURNED":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function OrdersTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-medium">Order ID</th>
                <th className="text-left p-4 font-medium">Customer</th>
                <th className="text-left p-4 font-medium">Products</th>
                <th className="text-left p-4 font-medium">Total</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Date</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-muted/50">
                  <td className="p-4">
                    <span className="font-mono text-sm">{order.id}</span>
                  </td>
                  <td className="p-4">
                    <span className="font-medium">{order.customer}</span>
                  </td>
                  <td className="p-4">
                    <div>
                      <span className="text-sm text-muted-foreground">
                        {order.items} item{order.items > 1 ? "s" : ""}
                      </span>
                      <div className="text-xs text-muted-foreground mt-1">
                        {order.products.slice(0, 2).join(", ")}
                        {order.products.length > 2 && "..."}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="font-medium">₹{order.total.toLocaleString()}</span>
                  </td>
                  <td className="p-4">
                    <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-muted-foreground">{new Date(order.date).toLocaleDateString()}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      {order.status === "PAID" && (
                        <Button variant="ghost" size="sm">
                          <Package className="w-4 h-4" />
                        </Button>
                      )}
                      {order.status === "SHIPPED" && (
                        <Button variant="ghost" size="sm">
                          <Truck className="w-4 h-4" />
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
