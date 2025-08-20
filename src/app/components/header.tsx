"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              width={200}
              height={200}
              src="/devoria.svg"
              alt="Devoria Logo"
              className="md:w-50 w-40"
            />
          </a>
        </div>

        {/* (Navbar Mobile) */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Toggle theme icon */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* (Desktop Menu) */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm font-semibold">
            Beranda
          </Link>
          <Link href="/tutorial" className="text-sm font-semibold">
            Laravel
          </Link>
          <Link href="/tutorial/react" className="text-sm font-semibold">
            React
          </Link>
          <Link href="/tutorial/api" className="text-sm font-semibold">
            API
          </Link>
        </div>

        {/* Navbar Desktop */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4 transition-colors duration-300 ease-in-out">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-m"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
          <a href="#" className="text-sm font-semibold">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && mounted && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            className={`fixed inset-0 z-50 p-6 overflow-y-auto ${
              darkMode ? "dark" : "bg-white"
            } bg-[var(--background)] text-[var(--foreground)]`}
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <Image
                  width={32}
                  height={32}
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Juchan Dev Logo"
                  className="h-8 w-auto"
                />
              </a>
              <div className="flex items-center gap-2">
                {/* Toggle theme inside mobile menu */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-md"
                  aria-label="Toggle Dark Mode"
                >
                  {darkMode ? (
                    <SunIcon className="h-6 w-6" />
                  ) : (
                    <MoonIcon className="h-6 w-6" />
                  )}
                </button>

                <button
                  type="button"
                  className="rounded-md p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="mt-6 flow-root">
              <div className="my-6 divide-y">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="block px-3 py-2 text-base font-semibold"
                  >
                    Beranda
                  </Link>
                  <Link
                    href="/tutorial"
                    className="block px-3 py-2 text-base font-semibold"
                  >
                    Laravel
                  </Link>
                  <Link
                    href="/tutorial/react"
                    className="block px-3 py-2 text-base font-semibold"
                  >
                    React
                  </Link>
                  <Link
                    href="/tutorial/api"
                    className="block px-3 py-2 text-base font-semibold"
                  >
                    API
                  </Link>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="block px-3 py-2 text-base font-semibold"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
