import CurvedLoop from "@/components/curved-loop"
import FaultyTerminal from "@/components/faulty-terminal"
import TrackCards from "@/components/track-cards"
import SiteFooter from "@/components/site-footer"



export default function Page() {
  return (
    <main className="bg-black text-white">
      <header className="fixed left-0 top-0 z-50 flex items-center gap-3 p-4">
        <img src="/images/hackclubasiet.png" alt="Hack Club ASIET logo" className="h-10 w-10 rounded-md" />
        <span className="text-lg font-medium tracking-wide text-white">HackClub ASIET</span>
      </header>

      <div className="relative">
        <FaultyTerminal />
        {/* nudge CurvedLoop slightly downward so the curve's top center meets the hero bottom.
            Tweak translate-y values if you want it closer/farther: e.g., translate-y-4 or translate-y-10 */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-6 md:translate-y-16">
          
          <CurvedLoop
            marqueeText="hackclub ✦ asiet ✦ "
            className="fill-white/80"
            curveAmount={190}
            speed={1}
            direction="left"
            interactive={false}
            variant="compact"
          />
        </div>
      </div>
      <div className="mt-20">
        <TrackCards />
      </div>
      <SiteFooter />
    </main>
  )
}