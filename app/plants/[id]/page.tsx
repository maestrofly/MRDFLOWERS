import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  CheckCircle2,
  Droplet,
  Leaf,
  MessageCircle,
  Sun,
  Thermometer,
} from "lucide-react"

import { plants } from "@/lib/plants"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

interface PlantPageProps {
  params: Promise<{
    id: string
  }>
}

export function generateStaticParams() {
  return plants.map((plant) => ({
    id: plant.id,
  }))
}

export async function generateMetadata({ params }: PlantPageProps) {
  const { id } = await params
  const plant = plants.find((p) => p.id === id)

  if (!plant) {
    return {
      title: "Plant Not Found | MRD FLOWERS",
    }
  }

  return {
    title: `${plant.name} Care Guide | MRD FLOWERS`,
    description: `Learn how to care for ${plant.name}, including light, watering, temperature, propagation and plant care tips. Explore ${plant.name} from MRD FLOWERS.`,
  }
}

export default async function PlantPage({ params }: PlantPageProps) {
  const { id } = await params

  const plant = plants.find((p) => p.id === id)

  if (!plant) {
    notFound()
  }

  const whatsappMessage = encodeURIComponent(
    `Hi MRD FLOWERS, I'm interested in the ${plant.name}. Is it currently available?`
  )

  const whatsappUrl = `https://wa.me/233242015579?text=${whatsappMessage}`

  return (
    <main className="container px-4 py-12 md:py-20">

      {/* Back button */}
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/plants">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Plants
        </Link>
      </Button>

      {/* Hero Section */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">

        {/* Plant Image */}
        <div className="overflow-hidden rounded-2xl border bg-muted">
          <img
            src={plant.image}
            alt={`${plant.name} - MRD FLOWERS`}
            width={800}
            height={800}
            className="aspect-square w-full object-cover"
          />
        </div>

        {/* Plant Information */}
        <div className="space-y-6">

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              {plant.category}
            </span>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              {plant.careLevel} Care
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              {plant.name}
            </h1>

            <p className="mt-2 text-lg italic text-muted-foreground">
              {plant.scientificName}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg leading-8 text-muted-foreground">
            {plant.description}
          </p>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

            <div className="rounded-xl border p-4">
              <Sun className="h-6 w-6 text-yellow-500" />

              <p className="mt-3 text-sm font-semibold">
                Light
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {plant.light}
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <Droplet className="h-6 w-6 text-blue-500" />

              <p className="mt-3 text-sm font-semibold">
                Water
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {plant.water}
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <Thermometer className="h-6 w-6 text-red-500" />

              <p className="mt-3 text-sm font-semibold">
                Temperature
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {plant.temperature}
              </p>
            </div>

          </div>

          {/* WhatsApp CTA */}
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Order via WhatsApp
            </a>
          </Button>

        </div>
      </section>

      {/* Plant Information */}
      <section className="mt-16">

        <div className="mb-8">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />

            <h2 className="text-3xl font-bold">
              About {plant.name}
            </h2>
          </div>

          <p className="mt-3 max-w-3xl text-muted-foreground">
            {plant.shortDescription}
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="care">

          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="care">
              Care Guide
            </TabsTrigger>

            <TabsTrigger value="propagation">
              Propagation
            </TabsTrigger>

            <TabsTrigger value="benefits">
              Plant Features
            </TabsTrigger>
          </TabsList>

          {/* Care */}
          <TabsContent
            value="care"
            className="mt-8"
          >
            <div className="space-y-4">

              {plant.careGuide.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-xl border p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Care Step {index + 1}
                    </h3>

                    <p className="mt-2 leading-7 text-muted-foreground">
                      {step}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </TabsContent>

          {/* Propagation */}
          <TabsContent
            value="propagation"
            className="mt-8"
          >
            <div className="grid gap-5 md:grid-cols-2">

              {plant.propagation.map((method, index) => (
                <div
                  key={index}
                  className="rounded-xl border p-6"
                >
                  <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-green-600" />

                    <h3 className="text-lg font-semibold">
                      {method.method}
                    </h3>
                  </div>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {method.description}
                  </p>
                </div>
              ))}

            </div>
          </TabsContent>

          {/* Plant Features */}
          <TabsContent
            value="benefits"
            className="mt-8"
          >
            <div className="grid gap-5 md:grid-cols-2">

              {plant.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-xl border p-6"
                >
                  <div className="flex items-start gap-3">

                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />

                    <div>
                      <h3 className="text-lg font-semibold">
                        {benefit.title}
                      </h3>

                      <p className="mt-2 leading-7 text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </TabsContent>

        </Tabs>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 rounded-2xl border bg-muted/50 p-8 text-center md:p-12">

        <Leaf className="mx-auto h-8 w-8 text-green-600" />

        <h2 className="mt-4 text-2xl font-bold">
          Looking for your next plant?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Explore more plants from MRD FLOWERS and find one that fits your
          space and lifestyle.
        </p>

        <Button asChild className="mt-6">
          <Link href="/plants">
            Explore All Plants
          </Link>
        </Button>

      </section>

    </main>
  )
}



// import Link from "next/link"
// import { notFound } from "next/navigation"
// import Image from "next/image"
// import {
//   ArrowLeft,
//   Droplet,
//   Sun,
//   Thermometer,
//   Sprout,
//   Heart,
//   ShoppingBag,
// } from "lucide-react"

// import { plants } from "@/lib/plants"
// import { Button } from "@/components/ui/button"
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"

// interface PlantPageProps {
//   params: Promise<{
//     id: string
//   }>
// }

// export async function generateStaticParams() {
//   return plants.map((plant) => ({
//     id: plant.id,
//   }))
// }

// export async function generateMetadata({ params }: PlantPageProps) {
//   const { id } = await params
//   const plant = plants.find((p) => p.id === id)

//   if (!plant) {
//     return {
//       title: "Plant Not Found | MRD FLOWERS",
//     }
//   }

//   return {
//     title: `${plant.name} Care Guide | MRD FLOWERS`,
//     description: `Learn how to care for ${plant.name}, including light, watering, temperature, propagation and plant care tips from MRD FLOWERS.`,
//   }
// }

// export default async function PlantPage({ params }: PlantPageProps) {
//   const { id } = await params

//   const plant = plants.find((p) => p.id === id)

//   if (!plant) {
//     notFound()
//   }

//   const fallbackImage = `https://placehold.co/900x700/f8faf5/4ade80?text=${encodeURIComponent(
//     plant.name
//   )}`

//   return (
//     <main className="min-h-screen bg-white">
//       {/* Breadcrumb / Back */}
//       <div className="container px-4 pt-8 md:px-6">
//         <Button variant="ghost" asChild>
//           <Link href="/plants">
//             <ArrowLeft className="mr-2 h-4 w-4" />
//             Back to Plants
//           </Link>
//         </Button>
//       </div>

//       {/* Hero */}
//       <section className="container px-4 py-10 md:px-6 md:py-16">
//         <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          
//           {/* Image */}
//           <div className="overflow-hidden rounded-2xl bg-[#f8faf5]">
//             <Image
//                 src={plant.image}
//                 alt={`${plant.name} - MRD FLOWERS`}
//                 className="w-full rounded-lg object-cover"
//                 width={600}
//                 height={400}
//             />
//           </div>

//           {/* Information */}
//           <div className="space-y-6">
            
//             {/* Category + Care */}
//             <div className="flex flex-wrap gap-2">
//               <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
//                 {plant.category}
//               </span>

//               <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
//                 {plant.careLevel}
//               </span>
//             </div>

//             {/* Title */}
//             <div>
//               <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
//                 {plant.name}
//               </h1>

//               <p className="mt-2 text-xl italic text-muted-foreground">
//                 {plant.scientificName}
//               </p>
//             </div>

//             {/* Description */}
//             <p className="text-lg leading-8 text-muted-foreground">
//               {plant.description}
//             </p>

//             {/* Quick Facts */}
//             <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              
//               <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
//                 <Sun className="mx-auto h-6 w-6 text-yellow-500" />
//                 <p className="mt-2 text-sm font-semibold">Light</p>
//                 <p className="mt-1 text-sm text-muted-foreground">
//                   {plant.light}
//                 </p>
//               </div>

//               <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
//                 <Droplet className="mx-auto h-6 w-6 text-blue-500" />
//                 <p className="mt-2 text-sm font-semibold">Water</p>
//                 <p className="mt-1 text-sm text-muted-foreground">
//                   {plant.water}
//                 </p>
//               </div>

//               <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
//                 <Thermometer className="mx-auto h-6 w-6 text-red-500" />
//                 <p className="mt-2 text-sm font-semibold">Temperature</p>
//                 <p className="mt-1 text-sm text-muted-foreground">
//                   {plant.temperature}
//                 </p>
//               </div>

//             </div>

//             {/* Order CTA */}
//             <div className="rounded-2xl bg-[#f8faf5] p-6">
//               <div className="flex items-start gap-4">
//                 <div className="rounded-full bg-green-100 p-3">
//                   <ShoppingBag className="h-6 w-6 text-green-700" />
//                 </div>

//                 <div>
//                   <h2 className="text-xl font-bold">
//                     Looking for a {plant.name}?
//                   </h2>

//                   <p className="mt-1 text-sm text-muted-foreground">
//                     Contact MRD FLOWERS to check availability and place your
//                     order.
//                   </p>
//                 </div>
//               </div>

//               <Button asChild className="mt-5 w-full sm:w-auto">
//                 <a
//                   href={`https://wa.me/0242015579?text=${encodeURIComponent(
//                     `Hello MRD FLOWERS, I'm interested in getting a ${plant.name}. Is it currently available?`
//                   )}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Order via WhatsApp
//                 </a>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Detailed Information */}
//       <section className="border-t bg-[#f8faf5]">
//         <div className="container px-4 py-12 md:px-6 md:py-16">

//           <Tabs defaultValue="care" className="w-full">

//             <TabsList className="grid w-full grid-cols-3">
//               <TabsTrigger value="care">
//                 Care Guide
//               </TabsTrigger>

//               <TabsTrigger value="propagation">
//                 Propagation
//               </TabsTrigger>

//               <TabsTrigger value="benefits">
//                 Benefits
//               </TabsTrigger>
//             </TabsList>

//             {/* CARE */}
//             <TabsContent
//               value="care"
//               className="mt-8 space-y-6"
//             >
//               <div>
//                 <p className="text-sm font-medium uppercase tracking-wider text-green-600">
//                   Plant Care
//                 </p>

//                 <h2 className="mt-1 text-3xl font-bold">
//                   How to care for {plant.name}
//                 </h2>
//               </div>

//               <div className="grid gap-4 md:grid-cols-2">
//                 {plant.careGuide.map((step, index) => (
//                   <div
//                     key={index}
//                     className="rounded-xl border bg-white p-6 shadow-sm"
//                   >
//                     <div className="flex gap-4">
//                       <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
//                         {index + 1}
//                       </div>

//                       <div>
//                         <h3 className="font-semibold">
//                           Care Tip {index + 1}
//                         </h3>

//                         <p className="mt-2 leading-7 text-muted-foreground">
//                           {step}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </TabsContent>

//             {/* PROPAGATION */}
//             <TabsContent
//               value="propagation"
//               className="mt-8 space-y-6"
//             >
//               <div>
//                 <p className="text-sm font-medium uppercase tracking-wider text-green-600">
//                   Propagation
//                 </p>

//                 <h2 className="mt-1 text-3xl font-bold">
//                   How to propagate {plant.name}
//                 </h2>
//               </div>

//               <div className="grid gap-4 md:grid-cols-2">
//                 {plant.propagation.map((method, index) => (
//                   <div
//                     key={index}
//                     className="rounded-xl border bg-white p-6 shadow-sm"
//                   >
//                     <div className="flex items-start gap-4">
//                       <Sprout className="h-6 w-6 shrink-0 text-green-600" />

//                       <div>
//                         <h3 className="font-semibold">
//                           {method.method}
//                         </h3>

//                         <p className="mt-2 leading-7 text-muted-foreground">
//                           {method.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </TabsContent>

//             {/* BENEFITS */}
//             <TabsContent
//               value="features"
//               className="mt-8 space-y-6"
//             >
//               <div>
//                 <p className="text-sm font-medium uppercase tracking-wider text-green-600">
//                   Plant Features
//                 </p>

//                 <h2 className="mt-1 text-3xl font-bold">
//                   About {plant.name}
//                 </h2>
//               </div>

//               <div className="grid gap-4 md:grid-cols-2">
//                 {plant.benefits.map((benefit, index) => (
//                   <div
//                     key={index}
//                     className="rounded-xl border bg-white p-6 shadow-sm"
//                   >
//                     <div className="flex items-start gap-4">
//                       <Heart className="h-6 w-6 shrink-0 text-green-600" />

//                       <div>
//                         <h3 className="font-semibold">
//                           {benefit.title}
//                         </h3>

//                         <p className="mt-2 leading-7 text-muted-foreground">
//                           {benefit.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </TabsContent>

//           </Tabs>
//         </div>
//       </section>

//       {/* Bottom CTA */}
//       <section className="container px-4 py-16 text-center md:px-6">
//         <h2 className="text-3xl font-bold">
//           Looking for your next plant?
//         </h2>

//         <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
//           Explore the MRD FLOWERS collection and discover plants for your home,
//           office and outdoor spaces.
//         </p>

//         <Button asChild className="mt-6">
//           <Link href="/plants">
//             Explore All Plants
//           </Link>
//         </Button>
//       </section>
//     </main>
//   )
// }



// // 'use client';

// // import React from "react"
// // import Link from "next/link"
// // import { ArrowLeft, Droplet, Sun, Thermometer } from "lucide-react"
// // import { plants } from "@/lib/plants"
// // import { Button } from "@/components/ui/button"
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// // export default function PlantPage({ params }: { params: { id: string } } | any) {
// //   const { id } = React.use(params) // ✅ unwrap the awaitable `params`

// //   const plant = plants.find((p) => p.id === id)

// //   if (!plant) {
// //     return (
// //       <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 text-center">
// //         <h1 className="text-3xl font-bold">Plant Not Found</h1>
// //         <p className="mt-4 text-muted-foreground">Sorry, we couldn't find the plant you're looking for.</p>
// //         <Button asChild className="mt-6">
// //           <Link href="/plants">
// //             <ArrowLeft className="mr-2 h-4 w-4" />
// //             Back to Plants
// //           </Link>
// //         </Button>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="container px-4 py-12 md:py-24">
// //       <Button variant="ghost" asChild className="mb-8">
// //         <Link href="/plants">
// //           <ArrowLeft className="mr-2 h-4 w-4" />
// //           Back to Plants
// //         </Link>
// //       </Button>

// //       <div className="grid gap-8 md:grid-cols-2">
// //         <div>
// //           <img
// //             src={plant.image || `https://placehold.co/600x400/f8faf5/4ade80?text=${encodeURIComponent(plant.name)}`}
// //             alt={plant.name}
// //             className="w-full rounded-lg object-cover"
// //             width={600}
// //             height={400}
// //             onError={(e) => {
// //               e.currentTarget.src = `https://placehold.co/600x400/f8faf5/4ade80?text=${encodeURIComponent(plant.name)}`
// //             }}
// //           />
// //         </div>
// //         <div className="space-y-6">
// //           <div>
// //             <div className="flex items-center gap-2">
// //               <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
// //                 {plant.category}
// //               </span>
// //               <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
// //                 {plant.careLevel}
// //               </span>
// //             </div>
// //             <h1 className="mt-2 text-3xl font-bold">{plant.name}</h1>
// //             <p className="mt-2 text-lg text-muted-foreground">{plant.scientificName}</p>
// //           </div>

// //           <p className="text-muted-foreground">{plant.description}</p>

// //           <div className="grid grid-cols-3 gap-4">
// //             <div className="flex flex-col items-center rounded-lg border p-3">
// //               <Sun className="h-6 w-6 text-yellow-500" />
// //               <span className="mt-2 text-sm font-medium">Light</span>
// //               <span className="text-xs text-muted-foreground">{plant.light}</span>
// //             </div>
// //             <div className="flex flex-col items-center rounded-lg border p-3">
// //               <Droplet className="h-6 w-6 text-blue-500" />
// //               <span className="mt-2 text-sm font-medium">Water</span>
// //               <span className="text-xs text-muted-foreground">{plant.water}</span>
// //             </div>
// //             <div className="flex flex-col items-center rounded-lg border p-3">
// //               <Thermometer className="h-6 w-6 text-red-500" />
// //               <span className="mt-2 text-sm font-medium">Temperature</span>
// //               <span className="text-xs text-muted-foreground">{plant.temperature}</span>
// //             </div>
// //           </div>

// //           <Button className="w-full">Add to Cart</Button>
// //         </div>
// //       </div>

// //       <Tabs defaultValue="care" className="mt-12">
// //         <TabsList className="grid w-full grid-cols-3">
// //           <TabsTrigger value="care">Care Guide</TabsTrigger>
// //           <TabsTrigger value="propagation">Propagation</TabsTrigger>
// //           <TabsTrigger value="benefits">Benefits</TabsTrigger>
// //         </TabsList>
// //         <TabsContent value="care" className="mt-6 space-y-4">
// //           <h2 className="text-2xl font-bold">Care Guide</h2>
// //           <div className="space-y-4">
// //             {plant.careGuide.map((step, index) => (
// //               <div key={index} className="rounded-lg border p-4">
// //                 <h3 className="font-medium">Step {index + 1}</h3>
// //                 <p className="text-muted-foreground">{step}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </TabsContent>
// //         <TabsContent value="propagation" className="mt-6 space-y-4">
// //           <h2 className="text-2xl font-bold">Propagation Methods</h2>
// //           <div className="space-y-4">
// //             {plant.propagation.map((method, index) => (
// //               <div key={index} className="rounded-lg border p-4">
// //                 <h3 className="font-medium">{method.method}</h3>
// //                 <p className="text-muted-foreground">{method.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </TabsContent>
// //         <TabsContent value="benefits" className="mt-6 space-y-4">
// //           <h2 className="text-2xl font-bold">Health Benefits</h2>
// //           <div className="space-y-4">
// //             {plant.benefits.map((benefit, index) => (
// //               <div key={index} className="rounded-lg border p-4">
// //                 <h3 className="font-medium">{benefit.title}</h3>
// //                 <p className="text-muted-foreground">{benefit.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </TabsContent>
// //       </Tabs>
// //     </div>
// //   )
// // }
