"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Mock data for charts
const aovData = [
  { month: "Jan", value: 2200 },
  { month: "Feb", value: 2350 },
  { month: "Mar", value: 2100 },
  { month: "Apr", value: 2450 },
  { month: "May", value: 2600 },
  { month: "Jun", value: 2450 },
]

const conversionData = [
  { month: "Jan", rate: 2.8 },
  { month: "Feb", rate: 3.1 },
  { month: "Mar", rate: 2.9 },
  { month: "Apr", rate: 3.4 },
  { month: "May", rate: 3.6 },
  { month: "Jun", rate: 3.2 },
]

const revenueByCategory = [
  { category: "Clothing", revenue: 45000 },
  { category: "Jewelry", revenue: 32000 },
  { category: "Home Decor", revenue: 28000 },
  { category: "Textiles", revenue: 22000 },
  { category: "Wood Crafts", revenue: 18000 },
]

const ctrByCategory = [
  { category: "Clothing", ctr: 4.2 },
  { category: "Jewelry", ctr: 3.8 },
  { category: "Home Decor", ctr: 3.5 },
  { category: "Textiles", ctr: 3.1 },
  { category: "Wood Crafts", ctr: 2.9 },
]

const stockoutData = [
  { name: "In Stock", value: 92, color: "#937A24" },
  { name: "Out of Stock", value: 8, color: "#B64B12" },
]

const revenueByState = [
  { state: "Maharashtra", revenue: 35000 },
  { state: "Delhi", revenue: 28000 },
  { state: "Karnataka", revenue: 22000 },
  { state: "Tamil Nadu", revenue: 18000 },
  { state: "Gujarat", revenue: 15000 },
]

export function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* AOV Trend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Average Order Value Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={aovData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`₹${value}`, "AOV"]} />
              <Line type="monotone" dataKey="value" stroke="#CE793A" strokeWidth={2} dot={{ fill: "#CE793A" }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Conversion Rate */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Conversion Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value}%`, "Conversion Rate"]} />
              <Line type="monotone" dataKey="rate" stroke="#937A24" strokeWidth={2} dot={{ fill: "#937A24" }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Revenue by Category */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Revenue by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueByCategory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip formatter={(value) => [`₹${value}`, "Revenue"]} />
              <Bar dataKey="revenue" fill="#CE793A" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* CTR by Category */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Click-Through Rate by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ctrByCategory} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="category" type="category" width={80} />
              <Tooltip formatter={(value) => [`${value}%`, "CTR"]} />
              <Bar dataKey="ctr" fill="#937A24" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Stockout Percentage */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Stock Status</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stockoutData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {stockoutData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, "Stock"]} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center space-x-4 mt-4">
            {stockoutData.map((entry) => (
              <div key={entry.name} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }} />
                <span className="text-sm text-muted-foreground">
                  {entry.name}: {entry.value}%
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Revenue by State */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Revenue by State</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueByState}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="state" />
              <YAxis />
              <Tooltip formatter={(value) => [`₹${value}`, "Revenue"]} />
              <Bar dataKey="revenue" fill="#480903" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
