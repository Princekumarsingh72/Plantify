import Link from "next/link";

export default function NavLinks() {
  return (
    <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
      <li>
        <Link href="/" className="hover:text-white transition">
          Home
        </Link>
      </li>

      <li>
        <Link href="/plants" className="hover:text-white transition">
          Plants Type
        </Link>
      </li>

      <li>
        <Link href="/more" className="hover:text-white transition">
          More
        </Link>
      </li>

      <li>
        <Link href="/contact" className="hover:text-white transition">
          Contact
        </Link>
      </li>
    </ul>
  );
}