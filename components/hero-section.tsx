"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
}

export function HeroSection({ title, subtitle, buttonText, buttonLink }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-600">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Hôpital Sainte Thérèse"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div
            className={cn(
              "space-y-2 transition-all duration-1000 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
              {title}
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl">{subtitle}</p>
          </div>
          <div
            className={cn(
              "transition-all duration-1000 delay-300 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <Link href={buttonLink}>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
