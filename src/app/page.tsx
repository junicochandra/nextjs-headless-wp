import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 hover:ring-gray-900/20">
              Baru! Panduan Full Stack Developer 2025.{" "}
              <a
                href="#"
                className="font-semibold text-[var(--foreground))] hover:opacity-90 transition-colors duration-200"
              >
                <span aria-hidden="true" className="absolute inset-0"></span>
                Lihat selengkapnya <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
              Belajar Pemrograman Tanpa Pusing
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-[var(--light-title)] sm:text-xl/8">
              Panduan praktis, step-by-step, dan gratis. Dari dasar hingga mahir
              — untuk kamu yang ingin menjadi developer handal.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/tutorial"
                className="rounded-md bg-[var(--primary)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200"
              >
                Mulai Belajar
              </Link>
              <a href="#" className="text-sm/6 font-semibold">
                Jelajahi Tutorial <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        ></div>
      </div>
    </div>
  );
}
