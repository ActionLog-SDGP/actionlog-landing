"use client";

import Link from "next/link";
import { Sun } from "lucide-react";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 5);
  });

  return (
    <motion.header
      className={clsx(
        "sticky z-50 flex justify-center transition-all duration-300 md:mx-0",
        isScrolled ? "mx-4 top-6" : "mx-0 top-4"
      )}
    >
      <motion.div
        animate={{
          width: isScrolled ? "800px" : "70rem",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <div
          className={clsx(
            "mx-auto rounded-2xl transition-all duration-300 xl:px-0",
            isScrolled
              ? "px-2 border border-border backdrop-blur-lg bg-background/75"
              : "shadow-none px-7"
          )}
        >
          <div className="flex h-14 items-center justify-between p-4">
            <Link className="flex items-center gap-2" href="/">
              <Image src="/logo.svg" alt="Actionlog Logo" width={40} height={40} className="max-h-10" />
              <p className="text-lg font-semibold text-primary">ActionLog</p>
            </Link>
            <div className="w-full hidden md:block">
              <ul className="relative mx-auto flex w-fit rounded-full h-11 px-2 items-center justify-center">
                <li className="z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 text-primary tracking-tight">
                  <Link href="#hero">Home</Link>
                </li>
                <li className="z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 text-primary/60 hover:text-primary tracking-tight">
                  <Link href="#bento">How it Works</Link>
                </li>
                <li className="z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 text-primary/60 hover:text-primary tracking-tight">
                  <Link href="#features">Features</Link>
                </li>
                <li className="z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 text-primary/60 hover:text-primary tracking-tight">
                  <Link href="#pricing">Pricing</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-row items-center gap-1 md:gap-3 shrink-0">
              <div className="flex items-center space-x-6">
                <Link
                  href="#"
                  className="bg-secondary h-8 hidden md:flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-fit px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12]"
                >
                  Try for free
                </Link>
              </div>
            
              <button className="md:hidden border border-border size-8 rounded-md cursor-pointer flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu size-5"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
