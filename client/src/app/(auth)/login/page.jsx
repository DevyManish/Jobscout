"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/more-icons"
import { UserAuthForm } from "@/components/user-auth-form"


export default function LoginPage() {

  return (
    <>
      <div className="flex mt-40 w-full flex-col items-center justify-center">
      <div className="flex items-center px-10 ">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back to Jobscout
            </h1>
            {/* <p className="text-sm text-muted-foreground">
          Enter your email to sign in to your account
        </p> */}
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link
              href="/register"
              className="hover:text-brand underline underline-offset-4"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
        </div>
        </div>
      </div>
    </>
  )
}
