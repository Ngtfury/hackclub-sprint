"use client"

import FaultyTerminal from "@/components/faulty-terminal"
import { useEffect, useState } from "react"

export default function HeroTerminal() {
  // Ensure DPR only reads window on client
  const [dpr, setDpr] = useState(1)
  useEffect(() => {
    setDpr(Math.min(window.devicePixelRatio || 1, 2))
  }, [])

  return (
    <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background animation */}
      <div className="absolute inset-0 -z-10">
        <FaultyTerminal
          className="absolute inset-0"
          style={{ width: "100%", height: "100%" }}
          dpr={dpr}
          scale={1}
          gridMul={[2, 1]}
          digitSize={1.5}
          curvature={0.12}
          scanlineIntensity={0.25}
          glitchAmount={1}
          noiseAmp={1}
          tint="#eb4034"
          brightness={0.9}
          chromaticAberration={0.0015}
          pageLoadAnimation
        />
        {/* Subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm tracking-[0.2em] text-rose-400 uppercase">HACK CLUB • SPRINT 1.0</p>
        <h1 className="text-balance text-4xl md:text-6xl lg:text-7xl font-extrabold text-white">
          SPRINT: ACCELERATE YOUR SKILLS
        </h1>
        <p className="mt-6 text-pretty text-base md:text-lg text-zinc-300">
          Join our intensive workshop series designed to rapidly enhance your tech skills. Dive into hands‑on projects,
          learn from industry experts, and build a portfolio that stands out.
        </p>
        {/* Button intentionally omitted per request */}
      </div>
    </section>
  )
}
