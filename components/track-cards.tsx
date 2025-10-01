import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import TrueFocus from "@/components/true-focus"

type Track = {
  badge: string
  title: string
  description: string
}

type TrackCardsProps = {
  overlayComingSoon?: boolean
  blurAmount?: number
}

const tracks: Track[] = [
  {
    badge: "WEB DEV",
    title: "Web Fundamentals",
    description: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
  },
  {
    badge: "MOBILE DEV",
    title: "Mobile App Dev",
    description: "Create your own mobile app for iOS or Android using modern frameworks.",
  },
  {
    badge: "DATA SCIENCE",
    title: "Data Science Essentials",
    description: "Explore data analysis, visualization, and machine learning techniques.",
  },
]

export default function TrackCards({ overlayComingSoon = false, blurAmount = 3 }: TrackCardsProps) {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-10">
        CHOOSE YOUR TRACK
      </h2>

      <div className="relative">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-[filter] duration-300"
          style={overlayComingSoon ? { filter: `blur(${blurAmount}px)` } : undefined}
        >
          {tracks.map((t, i) => (
            <Card
              key={i}
              className="bg-white/5 border-white/10 text-white/90 shadow-xl transition will-change-transform"
            >
              <CardHeader className="relative">
                <span className="inline-flex items-center rounded-full border border-rose-400/60 text-rose-300 px-2 py-0.5 text-xs font-semibold">
                  {t.badge}
                </span>
                <CardTitle className="mt-4 text-2xl">{t.title}</CardTitle>
                <CardDescription className="text-zinc-300">{t.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-8">
                <div className="h-28 w-full rounded-md border border-white/10 bg-white/5 grid place-items-center">
                  <span className="text-sm text-zinc-400">Image placeholder</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {overlayComingSoon && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-white">
            <TrueFocus sentence="Coming Soon" blurAmount={6} borderColor="#22c55e" glowColor="rgba(34,197,94,0.5)" />
          </div>
        )}
      </div>
    </section>
  )
}
