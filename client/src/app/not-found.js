import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section class="flex h-screen items-center body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          class="lg:w-1/6 md:w-2/6 w-4/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/404-img.svg"
          width={100}
          height={100}
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium ">
            Not Found
          </h1>
          <p class="leading-relaxed mb-8">Could not find requested resource</p>
          <div class="flex justify-center">
            <Link href="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
