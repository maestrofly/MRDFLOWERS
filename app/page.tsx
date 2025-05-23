'use client';

import Link from "next/link"
import { ArrowRight, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { plants } from "@/lib/plants"
import ImageWithFallback from "@/components/ImageWithFallback"

export default function Home() {
  const featuredPlants = plants.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8faf5]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
              Sustainable & Healthy
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Bring Nature Into Your Home
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Discover beautiful plants with detailed care guides, propagation methods, and health benefits.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/plants">
                  Browse Plants <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Plants Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-green-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-green-900">
                <Leaf className="mr-1 h-3.5 w-3.5" />
                Featured Plants
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Popular Plants</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our most loved plants, each with detailed care instructions and benefits.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            {featuredPlants.map((plant) => (
              <Link
                key={plant.id}
                href={`/plants/${plant.id}`}
                className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-colors hover:bg-muted/50"
              >
                <div className="flex flex-col space-y-2">
                  <ImageWithFallback
                    src={plant.image}
                    alt={plant.name}
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full rounded-md object-cover"
                  />
                  <div className="space-y-2 p-2">
                    <h3 className="font-bold">{plant.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{plant.shortDescription}</p>
                    <div className="flex items-center pt-2">
                      <span className="text-sm text-green-600 font-medium group-hover:underline">View Details</span>
                      <ArrowRight className="ml-1 h-4 w-4 text-green-600" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline" className="gap-1">
              <Link href="/plants">
                View All Plants
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8faf5]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Our Plants</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our plants are carefully selected for their beauty, health benefits, and ease of care.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 md:grid-cols-3">
              {/* Benefit 1 */}
              <div className="flex flex-col items-center space-y-2 border-green-100 p-4 rounded-lg">
                <div className="rounded-full bg-green-100 p-3">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Air Purification</h3>
                <p className="text-center text-gray-500">
                  Many of our plants naturally filter toxins from the air, improving your home's air quality.
                </p>
              </div>
              {/* Benefit 2 */}
              <div className="flex flex-col items-center space-y-2 border-green-100 p-4 rounded-lg">
                <div className="rounded-full bg-green-100 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                       className="h-6 w-6 text-green-600">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Stress Reduction</h3>
                <p className="text-center text-gray-500">
                  Studies show that indoor plants can reduce stress levels and improve mental wellbeing.
                </p>
              </div>
              {/* Benefit 3 */}
              <div className="flex flex-col items-center space-y-2 border-green-100 p-4 rounded-lg">
                <div className="rounded-full bg-green-100 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                       className="h-6 w-6 text-green-600">
                    <path d="M2 12h20" />
                    <path d="M12 2v20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Easy Propagation</h3>
                <p className="text-center text-gray-500">
                  We provide detailed propagation guides so you can grow your plant collection sustainably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
