"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Eye, MoreHorizontal, Search, Filter } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock product data
const products = [
  {
    id: "1",
    title: "Handwoven Banarasi Silk Saree",
    price: 4500,
    mrp: 5500,
    stock: 12,
    status: "active",
    image: "/elegant-silk-saree.png",
    category: "Clothing",
    views: 245,
    orders: 8,
  },
  {
    id: "2",
    title: "Block Printed Cotton Kurta",
    price: 1200,
    mrp: 1500,
    stock: 0,
    status: "out_of_stock",
    image: "/cotton-kurta.jpg",
    category: "Clothing",
    views: 189,
    orders: 15,
  },
  {
    id: "3",
    title: "Brass Decorative Bowl",
    price: 850,
    mrp: 1000,
    stock: 25,
    status: "active",
    image: "/brass-bowl.jpg",
    category: "Home Decor",
    views: 156,
    orders: 6,
  },
]

export function ProductsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValues, setEditValues] = useState<{ [key: string]: any }>({})

  const handleEdit = (product: any) => {
    setEditingId(product.id)
    setEditValues({
      price: product.price,
      stock: product.stock,
    })
  }

  const handleSave = (id: string) => {
    // Save logic here
    setEditingId(null)
    setEditValues({})
  }

  const handleCancel = () => {
    setEditingId(null)
    setEditValues({})
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Products</CardTitle>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-medium">Product</th>
                <th className="text-left p-4 font-medium">Category</th>
                <th className="text-left p-4 font-medium">Price</th>
                <th className="text-left p-4 font-medium">Stock</th>
                <th className="text-left p-4 font-medium">Performance</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-muted/50">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-primary line-clamp-2">{product.title}</p>
                        <p className="text-sm text-muted-foreground">ID: {product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge variant="outline">{product.category}</Badge>
                  </td>
                  <td className="p-4">
                    {editingId === product.id ? (
                      <Input
                        type="number"
                        value={editValues.price}
                        onChange={(e) => setEditValues({ ...editValues, price: Number(e.target.value) })}
                        className="w-24"
                      />
                    ) : (
                      <div>
                        <p className="font-medium">₹{product.price.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground line-through">₹{product.mrp.toLocaleString()}</p>
                      </div>
                    )}
                  </td>
                  <td className="p-4">
                    {editingId === product.id ? (
                      <Input
                        type="number"
                        value={editValues.stock}
                        onChange={(e) => setEditValues({ ...editValues, stock: Number(e.target.value) })}
                        className="w-20"
                      />
                    ) : (
                      <span className={product.stock === 0 ? "text-red-600" : ""}>{product.stock}</span>
                    )}
                  </td>
                  <td className="p-4">
                    <div className="text-sm">
                      <p>{product.views} views</p>
                      <p>{product.orders} orders</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge variant={product.status === "active" ? "default" : "destructive"}>
                      {product.status === "active" ? "Active" : "Out of Stock"}
                    </Badge>
                  </td>
                  <td className="p-4">
                    {editingId === product.id ? (
                      <div className="flex space-x-2">
                        <Button size="sm" onClick={() => handleSave(product.id)}>
                          Save
                        </Button>
                        <Button size="sm" variant="outline" onClick={handleCancel}>
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEdit(product)}>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
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
