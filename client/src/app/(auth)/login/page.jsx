"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/more-icons";
import { UserAuthForm } from "@/components/user-auth-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <>
      <div className="flex mt-32 w-full flex-col items-center justify-center">
        <div className="flex items-center px-10 ">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <Icons.logo className="mx-auto h-6 w-6" />
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome back to Jobscout
              </h1>
              <form>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col w-full py-5 text-left space-y-4">
                    <Label
                      htmlFor="email"
                      className="text-sm text-muted-foreground"
                    >
                      Enter your email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="hari@dev.com"
                    />
                  </div>
                  <div className="flex flex-col w-full text-left space-y-4">
                    <Label
                      htmlFor="password"
                      className="text-sm text-muted-foreground"
                    >
                      Enter your password
                    </Label>
                    <Input id="password" type="password" name="password" />
                    <Link
                      href="forget-password"
                      className="text-right text-xs underline text-muted-foreground"
                    >
                      Forget Password?
                    </Link>
                  </div>
                  <div className="py-3 mt-3 w-full">
                    <Button className="w-full">Submit</Button>
                  </div>
                </div>
              </form>
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
  );
}
