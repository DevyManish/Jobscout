import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import {
  BellIcon,
  GlobeIcon,
  InputIcon,
  CopyIcon,
  BookmarkIcon
} from "@radix-ui/react-icons"

const features = [
  {
    Icon: CopyIcon,
    name: "Share Your Favourite Quotes",
    description: "We allow you to copy your favourite quotes.",
    href: "/login",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
  },
  {
    Icon: InputIcon,
    name: "Supercharge Your Job Search",
    description: "Search through all platforms in one place.",
    href: "/login",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
  },
  {
    Icon: GlobeIcon,
    name: "International Jobs",
    description: "Keep an eye on available foreign opppurtunites.",
    href: "/login",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
  },
  {
    Icon: BookmarkIcon,
    name: "Save your intrested jobs.",
    description: "No time, no problem save for later.",
    href: "/login",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified everyday with 10 new posts in your inbox.",
    href: "/login",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
  }
]

export async function BentoDemo() {
  return (
    <div className="px-8 md:px-40">
    <BentoGrid className="lg:grid-rows-3">
      {features.map(feature => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
    </div>
  )
}
