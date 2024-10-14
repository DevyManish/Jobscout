"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function UserAuthForm({ className, ...props }) {
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {/* Placeholder for email sign-in form */}
      {/* <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <Button>
            Sign In with Email
          </Button>
        </div>
      </form> */}

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            continue with
          </span>
        </div>
      </div>

      {/* Google login button */}
      <Button variant="outline" type="button">
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
    </div>
  )
}
