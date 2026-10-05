import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-ink/8 pb-20 pt-28 md:pb-24 md:pt-36">
      <div className="section-pad mx-auto max-w-2xl text-center">
        <div className="mb-14 flex justify-center md:mb-16">
          <Logo id="footer" size={52} href="#home" />
        </div>

        <blockquote className="mx-auto max-w-md font-serif text-xl leading-[1.7] text-ink/85 md:text-2xl md:leading-[1.65]">
          <p>Understanding yourself changes your life.</p>
          <p className="mt-4 md:mt-5">
            Understanding each other changes the world.
          </p>
        </blockquote>

        <div className="divider-line my-16 md:my-20" />

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-12">
            <li>
              <Link
                href="/triplevirgo"
                className="nav-link normal-case tracking-[0.1em]"
              >
                triplevirgo
              </Link>
            </li>
            <li>
              <Link href="/press" className="nav-link normal-case tracking-[0.1em]">
                Brand Resources
              </Link>
            </li>
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

        <p className="mt-14 text-sm tracking-[0.08em] text-ink/40 md:mt-16">
          © 2026 TripleVirgo, LLC
        </p>
      </div>
    </footer>
  );
}
