"use client"

import { useState } from "react"
import Link from "next/link"
import ChromaGrid from "@/components/chroma-grid"
import RegistrationStepper from "@/components/registration-stepper"

export default function AIWorkshopPage() {
  const [memberId, setMemberId] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleRegister = async () => {
    if (!memberId) {
      setMessage("Please enter your HackClub member ID.")
      return
    }
    setIsSubmitting(true)
    setMessage("")
    try {
      const response = await fetch("https://hackclub-membership-api.onrender.com/sprint/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ member_id: memberId }),
      })

      if (response.ok) {
        setMessage("Registration successful!")
        setMemberId("")
      } else {
        const errorData = await response.json()
        setMessage(`Registration failed: ${errorData.message || "Unknown error"}`)
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage(`An error occurred: ${error.message}`)
      } else {
        setMessage("An unknown error occurred. Please try again.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const mentor = {
    image: "/mentors/nandhu.jpg",
    title: "Nandhu Krishnan",
    subtitle: "Mentor",
  }

  return (
    <main className="relative dark min-h-screen bg-background text-foreground">
      {/* Left rail line and dot */}
      <div className="pointer-events-none absolute left-6 top-40 bottom-16 w-px bg-foreground/30" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-4 bottom-6 h-6 w-6 rounded-full bg-foreground/80"
        aria-hidden="true"
      />

      {/* Header bar */}
      <header className="flex items-center justify-between px-8 pt-6">
        <div>
          <div
            className="text-3xl md:text-5xl tracking-wider text-rose-400"
            style={{
              fontFamily: "Siegra, 'Phantom Sans', ui-sans-serif, system-ui",
              fontStyle: "italic",
            }}
          >
            sprint
          </div>
          <p className="text-xs tracking-[0.3em] text-foreground/80 -mt-1 ml-1">
            session #1
          </p>
        </div>
        <nav aria-label="Primary">
          <Link
            href="/sprint"
            className="text-sm md:text-3xl tracking-widest hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-ring/50"
            aria-label="Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Link>
        </nav>
      </header>

      {/* Session label + title */}
      <section className="px-10 mt-6">
        <h1
          className="mt-3 text-3xl md:text-5xl italic tracking-wider"
          style={{
            fontFamily: "Siegra, 'Phantom Sans', ui-sans-serif, system-ui",
            letterSpacing: "0.06em",
          }}
        >
          AI DEVELOPMENT
        </h1>
      </section>

      {/* Main grid */}
      <section className="relative px-10 pb-20 pt-6">
        <div className="grid max-w-6xl grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-12">
          {/* LEFT: now shows the profile ChromaGrid */}
          <div className="md:col-span-5">
            <ChromaGrid
              className="min-h-[260px]"
              items={[
                {
                  image: mentor.image,
                  title: mentor.title,
                  subtitle: mentor.subtitle,
                  borderColor: "var(--brand-red)",
                  gradient: "linear-gradient(160deg, rgba(240,70,70,1), #000)",
                },
              ]}
              radius={220}
            />
          </div>

          {/* RIGHT: About sections and the stepper under About Session */}
          <div className="md:col-span-7 flex flex-col gap-8">
            <section aria-labelledby="about-mentor">
              <h2
                id="about-mentor"
                className="text-base md:text-lg font-bold uppercase tracking-[0.35em] text-rose-300"
              >
                About Mentor
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed tracking-widest">
                Nandhu Krishnan A is an experienced Al Freelancer with a strong
                background in machine learning, data science, and natural language
                processing. With hands-on experience working on a variety of
                A-based projects.
              </p>
            </section>

            <section aria-labelledby="about-session">
              <h2
                id="about-session"
                className="text-base md:text-lg font-bold uppercase tracking-[0.35em] text-rose-300"
              >
                About Session
              </h2>
              <div className="mt-4 space-y-1 text-sm leading-relaxed">
                <p>AI DEVELOPMENT - BASICS+ PROJECT</p>
                <p>MODE: ONLINE</p>
                <p>TIMING: 7:30 PM IST</p>
                <p className="flex items-center">
  MORE DETAILS:
  <a href="https://wa.me/+916238643882?text=Hey%20Sreeram,%0AI%20have%20a%20query%20about%20the%20AI%20Development%20session%20for%20Sprint." className="text-rose-300 inline-flex items-center ml-1">
    SREERAM (+91 62386 43882)
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
      <path fill-rule="evenodd" d="M4.25 5.25A.75.75 0 0 1 5 4.5h8.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0V6.56L4.03 16.72a.75.75 0 1 1-1.06-1.06L12.94 5.25H5A.75.75 0 0 1 4.25 4.5Z" clip-rule="evenodd" />
    </svg>
  </a>
</p>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <input
                  type="text"
                  value={memberId}
                  onChange={(e) => setMemberId(e.target.value)}
                  placeholder="Enter your HackClub ASIET member ID"
                  className="flex-grow rounded-md border border-foreground/30 bg-background/20 px-3 py-2 text-sm text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-rose-400/50"
                  disabled={isSubmitting}
                />
                <button
                  onClick={handleRegister}
                  disabled={isSubmitting}
                  className="rounded-md bg-rose-400 px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rose-400/50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Registering..." : "Register"}
                </button>
              </div>
              {message && <p className="mt-2 text-sm text-rose-300">{message}</p>}
            </section>
          </div>
        </div>

        {/* Bottom-center RegistrationStepper */}
      </section>

      {/* Bottom-right "SESSION 2 >>>>>" link */}
      <div className="absolute bottom-6 right-10">
        <Link
          href="/sprint/java"
          className="text-sm tracking-[0.35em] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-ring/50"
        >
          session 2 &gt;&gt;&gt;&gt;&gt;
        </Link>
      </div>
    </main>
  )
}