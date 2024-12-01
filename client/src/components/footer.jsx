'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Footer({ className }) {
  const [serverStatus, setServerStatus] = React.useState('unknown')

  const checkServerStatus = React.useCallback(async () => {
    try {
      const response = await fetch('https://jobscout-backend.onrender.com/health')
      const data = await response.json()
      setServerStatus(data.status === 'OK' ? 'online' : 'offline')
    } catch (error) {
      setServerStatus('offline')
    }
  }, [])

  React.useEffect(() => {
    checkServerStatus()
    const interval = setInterval(checkServerStatus, 5 * 60 * 1000) // Check every 5 minutes
    return () => clearInterval(interval)
  }, [checkServerStatus])

  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col px-3 pt-10 md:pt-36 md:px-40 items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-4 px-4 py-3 md:flex-row md:gap-2 md:px-0">
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
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div 
              className={cn(
                "w-2 h-2 rounded-full",
                serverStatus === 'online' ? "bg-green-500" : 
                serverStatus === 'offline' ? "bg-red-500" : 
                "bg-gray-500"
              )}
            />
            <span className="text-sm">
              Server: {serverStatus === 'online' ? 'Online' : serverStatus === 'offline' ? 'Offline' : 'Checking...'}
            </span>
          </div>
          <a
            href="https://twitter.com/l_m_manish"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-2xl dark:md:hover:bg-gray-800 border border-spacing-4 border-opacity-80 rounded px-2"
          >
            𝕏
          </a>
        </div>
      </div>
    </footer>
  )
}

