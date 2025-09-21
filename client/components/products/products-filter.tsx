"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { CRAFT_CATEGORIES, CITIES } from "@/lib/config"

const craftTypes = CRAFT_CATEGORIES.map((c) => c.name)
const states = [...new Set(CITIES.map((c) => c.state))]
const badges = ["Handloom", "GI Tagged", "Cooperative", "Verified Artisan"]

type ProductsFilterProps = {
  onChange?: (filters: {
    priceRange: number[]
    selectedFilters: string[]
  }) => void
}

export function ProductsFilter({ onChange }: ProductsFilterProps) {
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  // Notify parent every time filters change
  useEffect(() => {
    onChange?.({ priceRange, selectedFilters })
  }, [priceRange, selectedFilters, onChange])

  const addFilter = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters((prev) => [...prev, filter])
    }
  }

  const removeFilter = (filter: string) => {
    setSelectedFilters((prev) => prev.filter((f) => f !== filter))
  }

  const clearAllFilters = () => {
    setSelectedFilters([])
    setPriceRange([0, 10000])
  }

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {selectedFilters.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Active Filters</CardTitle>
              <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-xs">
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filter) => (
                <Badge
                  key={filter}
                  variant="secondary"
                  className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => removeFilter(filter)}
                >
                  {filter}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={10000}
              step={100}
              className="w-full"
            />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}+</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Craft Type */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Craft Type</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {craftTypes.map((craft) => (
              <div key={craft} className="flex items-center space-x-2">
                <Checkbox
                  id={craft}
                  checked={selectedFilters.includes(craft)}
                  onCheckedChange={(checked) =>
                    checked ? addFilter(craft) : removeFilter(craft)
                  }
                />
                <label
                  htmlFor={craft}
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  {craft}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* State */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">State</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {states.map((state) => (
              <div key={state} className="flex items-center space-x-2">
                <Checkbox
                  id={state}
                  checked={selectedFilters.includes(state)}
                  onCheckedChange={(checked) =>
                    checked ? addFilter(state) : removeFilter(state)
                  }
                />
                <label
                  htmlFor={state}
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  {state}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {badges.map((badge) => (
              <div key={badge} className="flex items-center space-x-2">
                <Checkbox
                  id={badge}
                  checked={selectedFilters.includes(badge)}
                  onCheckedChange={(checked) =>
                    checked ? addFilter(badge) : removeFilter(badge)
                  }
                />
                <label
                  htmlFor={badge}
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  {badge}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
