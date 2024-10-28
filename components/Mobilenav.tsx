"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@reach/visually-hidden";

export const Mobilenav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <RxHamburgerMenu />
        </SheetTrigger>
        <SheetContent className="border-none bg-white" side="left">
          <VisuallyHidden>
            <SheetTitle>Navigation Menu</SheetTitle>
          </VisuallyHidden>
          <Link
            href="/"
            className=" cursor-pointer items-center gap-1 px-4 flex "
          >
            <Image src="/icons/logo.svg" alt="logo" width={34} height={34} />
            <h1 className="text-2xl font-ibm-plex-serif text-[26px] font-bold text-black-1">
              Moneza
            </h1>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          "flex gap-3 items-center p-2 rounded-lg w-[180px] max-w-60 ",
                          {
                            "bg-bank-gradient": isActive,
                          }
                        )}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />

                        <p
                          className={cn("text-sm font-semibold text-black-2 ", {
                            "!text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}

                USER
              </nav>
            </SheetClose>

            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};
