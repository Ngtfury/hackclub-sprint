"use client"

export default function FaultyTerminal() {
  return (
    <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          src="/assets/herovideomain.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.8)" }}
        />
        {/* Subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm tracking-[0.2em] text-rose-400 uppercase">HACK CLUB • SPRINT 1.0</p>
        <h1 className="text-balance text-4xl md:text-6xl lg:text-7xl font-extrabold text-white">
          SPRINT: RAPID LEARNING, REAL IMPACT.
        </h1>
        <p className="mt-6 text-pretty text-base md:text-lg text-zinc-300">
          A fast-track, project-based skill development program designed to introduce participants to emerging tech domains through both online and offline sessions.
        </p>
      </div>
    </section>
  )
}
