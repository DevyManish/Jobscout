import Link from "next/link"
import Image from "next/image";
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button";import { Icons } from "@/components/icons"
import { UserAuthForm } from "@/components/user-auth-form"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Create an account",
  description: "Create an account to get started."
}

export default function RegisterPage() {
  return (
    <div className="container grid h-screen w-full flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="hidden h-full bg-muted lg:block" />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Image src="/logo.png" alt="Logo" className="dark:hidden mx-auto h-6 w-6" width={40} height={60} />
            <Image src="/blogo.png" alt="Logo" className="hidden dark:block mx-auto h-6 w-6" width={40} height={60} />
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <form>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col w-full py-2 text-left space-y-4">
                    <Label
                      htmlFor="name"
                      className="text-sm text-muted-foreground"
                    >
                      Enter your name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Hari Das"
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
                  </div>
                  <div className="flex flex-col py-2 w-full text-left space-y-4">
                    <Label
                      htmlFor="cpassword"
                      className="text-sm text-muted-foreground"
                    >
                      Confirm your password
                    </Label>
                    <Input id="cpassword" type="password" name="confirm_password" />
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
                href="/login"
                className="hover:text-brand underline underline-offset-4"
              >
                Already have an account? Sign in
              </Link>
            </p>
        </div>
      </div>
    </div>
  )
}
