"use client"

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState, useRef } from "react"
import React from "react"

type Track = {
  badge: string
  title: string
  description: string
  image?: string
  link: string
}

type TrackCardsProps = {
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
  pauseOnHover?: boolean
}

const tracks: Track[] = [
  {
    badge: "WEB DEV",
    title: "Web Fundamentals",
    description: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
    link: "/sprint/web",
  },
  {
    badge: "MOBILE DEV",
    title: "Mobile App Dev",
    description: "Create your own mobile app for iOS or Android using modern frameworks.",
    link: "#", // Placeholder link
  },
  {
    badge: "AI",
    title: "Nandhu Krishnan",
    description: "Explore data analysis, visualization, and machine learning techniques.",
    image: "mentors/nandhu.jpg",
    link: "/sprint/ai",
  },
]

export default function TrackCards({
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
}: TrackCardsProps) {
  const [isMounted, setIsMounted] = useState(false)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const scrollerInnerRef = useRef<HTMLDivElement>(null)

  // State for drag-to-scroll
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleInfiniteScroll = () => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return

    const scroller = scrollerRef.current
    const inner = scrollerInnerRef.current
    const scrollWidth = inner.scrollWidth / 2 // Width of the original set of cards

    // If scrolled to the end of the duplicated content, jump back to the start
    if (scroller.scrollLeft >= scrollWidth) {
      scroller.scrollLeft = scroller.scrollLeft - scrollWidth
    }
    // If scrolled to the beginning, jump to the end of the original content
    else if (scroller.scrollLeft <= 0) {
      scroller.scrollLeft = scroller.scrollLeft + scrollWidth
    }
  }

  const getSpeedClass = () => {
    if (speed === "fast") return "animate-scroll-fast"
    if (speed === "slow") return "animate-scroll-slow"
    return "animate-scroll"
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollerRef.current.offsetLeft)
    setScrollLeft(scrollerRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollerRef.current.offsetLeft
    const walk = (x - startX) * 2 // Multiply for faster scroll
    scrollerRef.current.scrollLeft = scrollLeft - walk
  }

  // Duplicate tracks for seamless scrolling
  const duplicatedTracks = [...tracks, ...tracks]

  if (!isMounted) {
    return null
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">
        CHOOSE YOUR TRACK
      </h2>

      <div
        ref={scrollerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onScroll={handleInfiniteScroll}
        className={cn(
          "scroller relative z-20 w-full cursor-grab overflow-hidden active:cursor-grabbing",
          "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        )}
      >
        <div
          ref={scrollerInnerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-6 py-4",
            !isDragging && getSpeedClass(), // Pause animation while dragging
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {duplicatedTracks.map((t, i) => (
            <Card
              key={i}
              className="w-[350px] max-w-full shrink-0 select-none bg-white/5 text-white/90 shadow-xl transition will-change-transform md:w-[400px]"
            >
              <CardHeader className="relative">
                <span className="inline-flex items-center rounded-full border border-rose-400/60 bg-transparent px-2 py-0.5 text-xs font-semibold text-rose-300">
                  {t.badge}
                </span>
                <CardTitle className="mt-4 text-2xl">{t.title}</CardTitle>
                <CardDescription className="text-zinc-300">{t.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-4 flex flex-col">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.title}
                    className="aspect-[4/5] w-full rounded-md object-cover"
                  />
                ) : (
                  <div className="grid aspect-[4/5] w-full place-items-center rounded-md border border-white/10 bg-white/5">
                    <span className="text-sm text-zinc-400">Image placeholder</span>
                  </div>
                )}
                <a
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <Button className="w-full cursor-pointer bg-[rgb(240,70,70)] text-white hover:bg-[rgb(240,70,70)]/90">
                    Register
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
