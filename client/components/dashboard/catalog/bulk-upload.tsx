"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function BulkUpload() {
  const [uploadStep, setUploadStep] = useState<"upload" | "mapping" | "preview">("upload")
  const [file, setFile] = useState<File | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0]
    if (uploadedFile) {
      setFile(uploadedFile)
      setUploadStep("mapping")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Upload className="w-5 h-5 mr-2" />
          Bulk Product Upload
        </CardTitle>
      </CardHeader>
      <CardContent>
        {uploadStep === "upload" && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Upload CSV File</h3>
              <p className="text-muted-foreground mb-4">
                Upload a CSV file with your product data. Maximum file size: 5MB
              </p>
              <Label htmlFor="csv-upload" className="cursor-pointer">
                <Button asChild>
                  <span>Choose File</span>
                </Button>
                <Input id="csv-upload" type="file" accept=".csv" className="hidden" onChange={handleFileUpload} />
              </Label>
            </div>
            <div className="text-center">
              <Button variant="link" size="sm">
                Download Sample CSV Template
              </Button>
            </div>
          </div>
        )}

        {uploadStep === "mapping" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Column Mapping</h3>
              <Badge variant="secondary">{file?.name}</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium">CSV Columns</Label>
                <div className="space-y-2 mt-2">
                  {["Product Name", "Description", "Price", "Stock", "Category"].map((col) => (
                    <div key={col} className="p-2 bg-muted rounded text-sm">
                      {col}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">Map to Fields</Label>
                <div className="space-y-2 mt-2">
                  {["title", "description", "price", "stock", "categoryId"].map((field) => (
                    <div key={field} className="p-2 bg-accent/10 rounded text-sm">
                      {field}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={() => setUploadStep("upload")}>
                Back
              </Button>
              <Button onClick={() => setUploadStep("preview")}>Preview Import</Button>
            </div>
          </div>
        )}

        {uploadStep === "preview" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Import Preview</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm">45 valid</span>
                </div>
                <div className="flex items-center text-red-600">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm">3 errors</span>
                </div>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Product Name</th>
                    <th className="text-left p-3">Price</th>
                    <th className="text-left p-3">Stock</th>
                    <th className="text-left p-3">Issues</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </td>
                    <td className="p-3">Handwoven Silk Saree</td>
                    <td className="p-3">₹4,500</td>
                    <td className="p-3">12</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                    </td>
                    <td className="p-3">Block Print Kurta</td>
                    <td className="p-3 text-red-600">Invalid price</td>
                    <td className="p-3">8</td>
                    <td className="p-3 text-red-600">Price must be numeric</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={() => setUploadStep("mapping")}>
                Back
              </Button>
              <Button className="bg-accent hover:bg-accent/90">Import Products</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
