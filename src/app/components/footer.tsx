import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10">
      {/* Bottom */}
      <div className="border-gray-700 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <Link
          href="https://www.linkedin.com/in/junico-dwi-chandra-8b6393202/"
          target="_blank"
          className="font-semibold text-[var(--primary)] hover:underline"
        >
          Junico Dwi Chandra
        </Link>
        . All rights reserved.
      </div>
    </footer>
  );
}
