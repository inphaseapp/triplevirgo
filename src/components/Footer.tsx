import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-ink/8 pb-16 pt-24 md:pb-20 md:pt-28">
      <div className="section-pad mx-auto max-w-2xl text-center">
        <div className="mb-12 flex justify-center md:mb-14">
          <Logo id="footer" size={52} />
        </div>

        <blockquote className="mx-auto max-w-md font-serif text-xl leading-[1.65] text-ink/85 md:text-2xl md:leading-[1.6]">
          <p>Understanding yourself changes your life.</p>
          <p className="mt-3 md:mt-4">
            Understanding each other changes the world.
          </p>
        </blockquote>

        <div className="divider-line my-14 md:my-16" />

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <li>
              <Link href="/privacy" className="nav-link normal-case tracking-[0.1em]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="nav-link normal-case tracking-[0.1em]">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/support" className="nav-link normal-case tracking-[0.1em]">
                Support
              </Link>
            </li>
          </ul>
        </nav>

        <p className="mt-12 text-sm tracking-[0.08em] text-ink/40 md:mt-14">
          © 2026 TripleVirgo, LLC
        </p>
      </div>
    </footer>
  );
}
