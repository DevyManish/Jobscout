import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Footer({ className }) {
  return (
    <footer className={cn(className)}>
      <div className="container flex px-3 pt-10 md:pt-36 md:px-40 items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-4 px-4 py-3 md:flex-row md:gap-2 md:px-0">
        {/* <Image src="/logo.png" alt="Logo" width={100} height={65} /> */}
        <Image src="/logo.png" alt="Logo" className="dark:hidden" width={30} height={70} />
        <Image src="/blogo.png" alt="Logo" className="hidden dark:block" width={30} height={70} />
        <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href="https://www.manishguptaa.me/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              DevyManish
            </a>
          </p>
        </div>
        {/* <ModeToggle /> */}
        <a
          href="https://twitter.com/l_m_manish"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-2xl dark:md:hover:bg-gray-800 border border-spacing-4 border-opacity-80 rounded px-2"
        >
          𝕏
        </a>
      </div>
    </footer>
  )
}
