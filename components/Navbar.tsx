"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const examples = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Achievment",
    href: "/d",
  },

  {
    name: "Resume",
    href: "/examples/tasks",
  },
];

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Navbar({ className, ...props }: ExamplesNavProps) {
  const pathname = usePathname();

  return (
    <div className="flex pl-2 lg:px-5 text-xl lg:text-2xl font-semibold text-main">
      <div className=" mr-6 lg:mr-10">PL7</div>
      <div>
        <ScrollArea className="max-w-[600px] lg:max-w-none">
          <div className={cn("mb-4 flex items-center", className)} {...props}>
            {examples.map((example, index) => (
              <Link
                href={example.href}
                key={example.href}
                className={cn(
                  "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                  pathname === example.href
                    ? "bg-muted font-medium text-primary"
                    : "text-muted-foreground"
                )}
              >
                {example.name}
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>
      </div>
    </div>
  );
}
