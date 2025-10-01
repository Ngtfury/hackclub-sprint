export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="flex items-center gap-3">
          {/* Replace red circle with Hack Club ASIET logo image */}
          <img src="/images/hackclubasiet.png" alt="Hack Club ASIET logo" className="h-8 w-8 rounded-md" />
          <span className="text-white font-semibold">Hack Club</span>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wider text-zinc-300 uppercase">Links</h3>
          <ul className="mt-3 space-y-2 text-zinc-400">
            <li>
              <a className="hover:text-white" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Workshops
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wider text-zinc-300 uppercase">Follow Us</h3>
          <div className="mt-3 flex items-center gap-4">

            {/* Instagram */}
            <a
              aria-label="Instagram"
              className="text-zinc-400 hover:text-white"
              href="https://instagram.com/hackclubasiet"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM18 6.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              aria-label="LinkedIn"
              className="text-zinc-400 hover:text-white"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-9.5 7H7v7h2.5v-7zm-1.25-2a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm9.25 2h-2.25v1h.03c.31-.59 1.07-1.21 2.22-1.21 2.38 0 2.82 1.57 2.82 3.61V17H17v-4.13c0-.99-.02-2.25-1.37-2.25-1.37 0-1.58 1.07-1.58 2.18V17H12v-7h2.25v1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="py-6 text-center text-xs text-zinc-500 border-t border-white/10">
        © {new Date().getFullYear()} HackClub ASIET. All rights reserved.
      </div>
    </footer>
  )
}
