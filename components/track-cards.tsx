"use client"

import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState, useRef } from "react"
import type React from "react"

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
    badge: "AI",
    title: "AI Workshop",
    description: "Master the fundamentals of AI and Machine Learning to build your first intelligent application from scratch.",
    link: "/sprint/ai",
    image: "mentors/nandhu.jpg"
  },
  {
    badge: "JAVA",
    title: "Java + Spring Boot",
    description: "Build and deploy powerful, scalable backend services and REST APIs using Java and the Spring Boot framework.",
    link: "/sprint/java",
    image: "mentors/hashim.jpg"
  },
  {
    badge: "WEB",
    title: "Web Development",
    description: "Create fully-functional, responsive websites from the ground up using HTML, CSS, JavaScript, and modern frameworks.",
    image: "mentors/pavan.jpg",
    link: "/sprint/web",
  },
  {
    badge: "UI/UX",
    title: "UI/UX Design",
    description: "Master the art of user-centric design by creating engaging, accessible, and beautiful interfaces with modern UI/UX tools.",
    image: "mentors/brian.jpg",
    link: "/sprint/ui",
  },
  {
    badge: "AI",
    title: "Prompt Engineering",
    description: "Learn to command and control AI language models by designing, refining, and implementing highly effective prompts.",
    image: "mentors/shaadi.jpg",
    link: "/sprint/prompt",
  },
]

export default function TrackCards({ direction = "left", speed = "normal", pauseOnHover = true }: TrackCardsProps) {
  const [isMounted, setIsMounted] = useState(false)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const scrollerInnerRef = useRef<HTMLDivElement>(null)

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftAtStart, setScrollLeftAtStart] = useState(0)
  const [hasMoved, setHasMoved] = useState(false)

  const [isHovered, setIsHovered] = useState(false)

  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleInfiniteScroll = () => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return

    const scroller = scrollerRef.current
    const inner = scrollerInnerRef.current
    const scrollWidth = inner.scrollWidth / 2

    if (scroller.scrollLeft >= scrollWidth) {
      scroller.scrollLeft = scroller.scrollLeft - scrollWidth
    } else if (scroller.scrollLeft <= 0) {
      scroller.scrollLeft = scroller.scrollLeft + scrollWidth
    }
  }

  const speedPxPerSecond = (() => {
    if (speed === "fast") return 120
    if (speed === "slow") return 60
    return 85
  })()

  useEffect(() => {
    if (!isMounted) return
    let running = true
    let last = performance.now()

    const step = (now: number) => {
      if (!running) return
      const scroller = scrollerRef.current
      const dt = Math.min(48, now - last)
      last = now

      if (scroller && !isDragging && (!pauseOnHover || !isHovered)) {
        const pxPerMs = speedPxPerSecond / 1000
        const delta = pxPerMs * dt * (direction === "left" ? -1 : 1)
        scroller.scrollLeft += delta
        handleInfiniteScroll()
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      running = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isMounted, direction, isDragging, isHovered, pauseOnHover, speedPxPerSecond])

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    if (target.closest("button") || target.closest("a")) {
      return
    }

    if (!scrollerRef.current) return
    setIsDragging(true)
    setStartX(e.clientX)
    setScrollLeftAtStart(scrollerRef.current.scrollLeft)
    setHasMoved(false)
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollerRef.current) return

    const dx = e.clientX - startX
    const distance = Math.abs(dx)

    if (distance > 5) {
      setHasMoved(true)
      e.preventDefault()
      scrollerRef.current.scrollLeft = scrollLeftAtStart - dx
      handleInfiniteScroll()
    }
  }

  const endDrag = (e?: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false)
    setHasMoved(false)
    if (e) e.currentTarget.releasePointerCapture?.((e as any).pointerId)
  }

  const duplicatedTracks = [...tracks, ...tracks]

  if (!isMounted) {
    return null
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">
        CHOOSE YOUR TRACK
      </h2>

      <div
        ref={scrollerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onScroll={handleInfiniteScroll}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          setIsDragging(false)
        }}
        className={cn(
          "relative z-20 w-full overflow-hidden select-none transform-gpu",
          isDragging && hasMoved ? "cursor-grabbing" : "cursor-grab",
          "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        )}
        aria-label="Track cards scroller"
        role="region"
      >
        <div ref={scrollerInnerRef} className={cn("flex min-w-full shrink-0 gap-6 py-4")}>
          {duplicatedTracks.map((t, i) => (
            <Card
              key={i}
              className="group h-[300px] w-[540px] shrink-0 select-none overflow-hidden border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-rose-500/20 will-change-transform"
            >
              <div className="flex h-full flex-col">
                <div className="flex flex-1 min-h-0 items-center justify-center px-4 py-3">
                  <div className="flex h-full w-full items-center gap-4">
                    <div
                      className="relative shrink-0 overflow-hidden rounded-lg"
                      style={{ width: "140px", maxHeight: "180px" }}
                    >
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-500/10 to-purple-500/10">
                        {t.image ? (
                          <img
                            src={t.image || "/placeholder.svg"}
                            alt={t.title}
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="grid h-full w-full place-items-center">
                            <div className="text-center">
                              <div className="mx-auto mb-2 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm" />
                              <span className="text-xs text-zinc-400">Image</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-1 min-h-0 flex-col justify-center py-2 overflow-hidden">
                      <span className="inline-flex w-fit items-center rounded-full border border-rose-400/60 bg-rose-500/10 px-3 py-1 text-xs font-bold tracking-wider text-rose-300 backdrop-blur-sm">
                        {t.badge}
                      </span>
                      <CardTitle className="mt-3 text-xl font-bold leading-tight text-white">{t.title}</CardTitle>
                      <CardDescription className="mt-2 text-sm leading-relaxed text-zinc-300">
                        {t.description}
                      </CardDescription>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-1 px-3 pb-3">
                  <a href={t.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button className="w-full cursor-pointer bg-gradient-to-r from-rose-500 to-rose-600 font-semibold text-white shadow-lg transition-all duration-300 hover:from-rose-600 hover:to-rose-700 hover:shadow-rose-500/50">
                      Register Now
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
