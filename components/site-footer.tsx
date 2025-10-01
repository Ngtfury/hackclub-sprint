export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-white font-bold">
            =
          </span>
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
            {/* X/Twitter */}
            <a
              aria-label="X (Twitter)"
              className="text-zinc-400 hover:text-white"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 3H21l-6.535 7.46L22 21h-6.2l-4.85-5.86L5.38 21H3l7.03-8.02L2 3h6.3l4.41 5.3L18.244 3Zm-1.086 16.2h1.677L7.928 5.7H6.17l10.988 13.5Z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              aria-label="Instagram"
              className="text-zinc-400 hover:text-white"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM18 6.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="py-6 text-center text-xs text-zinc-500 border-t border-white/10">
        © {new Date().getFullYear()} Sprint Workshop Series. All rights reserved.
      </div>
    </footer>
  )
}
