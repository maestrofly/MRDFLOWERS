"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { plants as allPlants } from "@/lib/plants"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PlantsPage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [light, setLight] = useState("all")
  const [care, setCare] = useState("all")
  const [filteredPlants, setFilteredPlants] = useState(allPlants)

  const applyFilters = () => {
    let result = allPlants.filter((plant) => {
      return (
        (category === "all" || plant.category.toLowerCase() === category) &&
        (light === "all" || plant.light.toLowerCase().includes(light)) &&
        (care === "all" || plant.careLevel.toLowerCase() === care) &&
        (plant.name.toLowerCase().includes(search.toLowerCase()) ||
          plant.scientificName.toLowerCase().includes(search.toLowerCase()))
      )
    })
    setFilteredPlants(result)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8faf5]">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Plant Collection</h1>
          <p className="mt-2 text-gray-500 md:text-xl">
            Browse our selection of plants, each with detailed information on care, propagation, and benefits.
          </p>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container px-4 md:px-6 grid gap-6 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
          {/* Filters */}
          <div className="space-y-6">
            <div>
              <Label htmlFor="search" className="mb-1 block text-lg font-medium">Search</Label>
              <Input
                id="search"
                placeholder="Search plants..."
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div>
              <Label className="mb-1 block text-lg font-medium">Categories</Label>
              <Select onValueChange={setCategory}>
                <SelectTrigger><SelectValue placeholder="All Categories" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="indoor">Indoor Plants</SelectItem>
                  <SelectItem value="outdoor">Outdoor Plants</SelectItem>
                  <SelectItem value="succulents">Succulents</SelectItem>
                  <SelectItem value="flowering">Flowering Plants</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-1 block text-lg font-medium">Light Requirements</Label>
              <Select onValueChange={setLight}>
                <SelectTrigger><SelectValue placeholder="All Light Levels" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Light Levels</SelectItem>
                  <SelectItem value="low">Low Light</SelectItem>
                  <SelectItem value="medium">Medium Light</SelectItem>
                  <SelectItem value="high">Bright Light</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-1 block text-lg font-medium">Care Level</Label>
              <Select onValueChange={setCare}>
                <SelectTrigger><SelectValue placeholder="All Care Levels" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Care Levels</SelectItem>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full" onClick={applyFilters}>Apply Filters</Button>
          </div>

          {/* Plant Grid */}
          <div>
            {filteredPlants.length === 0 ? (
              <p className="text-center text-muted-foreground">No plants match your filters.</p>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPlants.map((plant) => (
                  <Link
                    key={plant.id}
                    href={`/plants/${plant.id}`}
                    className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-colors hover:bg-muted/50"
                  >
                    <img
                      src={plant.image || `https://placehold.co/600x400/f8faf5/4ade80?text=${encodeURIComponent(plant.name)}`}
                      alt={plant.name}
                      className="aspect-[4/3] w-full rounded-md object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/600x400/f8faf5/4ade80?text=${encodeURIComponent(plant.name)}`
                      }}
                    />
                    <div className="space-y-2 p-2">
                      <h3 className="font-bold">{plant.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-2 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                          {plant.category}
                        </span>
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                          {plant.careLevel}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2">{plant.shortDescription}</p>
                      <div className="flex items-center pt-2">
                        <span className="text-sm text-green-600 font-medium group-hover:underline">View Details</span>
                        <ArrowRight className="ml-1 h-4 w-4 text-green-600" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
