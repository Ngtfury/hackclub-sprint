"use client"

import CurvedLoop from "@/components/curved-loop"
import HeroTerminal from "@/components/hero-terminal"
import TrackCards from "@/components/track-cards"
import SiteFooter from "@/components/site-footer"
import { useEffect, useState } from "react"

// Responsive curveAmount hook
function useCurveAmount(desktop = 290, mobile = 900) {
  const [curve, setCurve] = useState(desktop);
  useEffect(() => {
    const update = () => setCurve(window.innerWidth < 640 ? mobile : desktop);
    window.addEventListener("resize", update);
    update();
    return () => window.removeEventListener("resize", update);
  }, [desktop, mobile]);
  return curve;
}

export default function Page() {
  const curveAmount = useCurveAmount();

  return (
    <main className="bg-black text-white">
      <header className="fixed left-0 top-0 z-50 flex items-center gap-3 p-4">
        <img src="/images/hackclubasiet.png" alt="Hack Club ASIET logo" className="h-7 w-7 rounded-md" />
        <span className="text-sm font-medium tracking-wide text-white">HackClub ASIET</span>
      </header>

      <div className="relative">
        <HeroTerminal />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-6 md:translate-y-8">
          <CurvedLoop
            marqueeText="hackclub ✦ asiet ✦ "
            className="fill-white/80 text-[3.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] w-full"
            curveAmount={curveAmount}
            speed={0.9}
            direction="left"
            interactive={false}
            variant="compact"
          />
        </div>
      </div>

      <div className="mt-40">
        <TrackCards overlayComingSoon blurAmount={12} />
      </div>

      <SiteFooter />
    </main>
  )
}
