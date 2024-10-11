import { BorderBeam } from "@/components/ui/border-beam";
import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { BentoDemo } from "@/components/bento-features";
import { Companies } from "@/components/companies";

export default function Home() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-16 px-8 md:px-64 md:pb-12 md:pt-10 lg:py-20">
        <div className="container py-3 mt-8 flex w-full flex-col items-center gap-4 text-center sm:mb-10 lg:mb-20 md:sm-20">
          <ShineBorder
            className="text-center rounded-3xl capitalize bg-muted px-4 py-1.5 text-lg font-medium absolute"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            borderRadius={24}
          >
            Introducing Jobscout ✨
          </ShineBorder>

          {/* </Link> */}

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-20">
            Infusing AI into hiring
          </h1>
          <p className="max-w-[42rem] py-2 pb-4 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Take the Stress Out of Job Hunting, Land Your Dream Job with Jobscout.
          </p>
          <div className="space-x-4">
            {/* <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}> */}
            <Link
              href="/login"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-sm-2 px-12"
              )}
            >
              Get Started
            </Link>
            <a
              href="/#features"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-sm-2"
              )}
            >
              Let&apos;s Explore 👇🏻
            </a>
          </div>
        </div>
        <div className="relative rounded-xl mx-auto justify-center flex flex-col items-center lg:max-w-[1000px] overflow-hidden md:overflow-auto lg:overflow-auto">
          {/* <img
            src="/darkoutput.png"
            alt="Hero Image"
            className="hidden lg:max-w-[1000px]  rounded-[inherit] border object-contain shadow-lg dark:block overflow-hidden md:overflow-auto lg:overflow-auto"
          />
          <img
            src="/lightoutput.png"
            alt="Hero Image"
            className="block lg:max-w-[1000px]  rounded-[inherit] border object-contain shadow-lg dark:hidden overflow-hidden md:overflow-auto lg:overflow-auto"
          />

          <BorderBeam size={250} /> */}
          <ShineBorder
            className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-background md:shadow-xl space-y-4 md:space-y-2"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Supercharge Your Job Search
            </span>
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-lg md:text-xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">AI-powered resume optimization and job discovery at your fingertips.</span>
          </ShineBorder>
        </div>
      </section>
      <Companies/>
      {/* feature */}
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-10"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h3 className="text-center text-sm font-semibold text-gray-500 pb-2">
              FEATURES
            </h3>         
        </div>
        <BentoDemo />        
      </section>
    </>
  );
}
