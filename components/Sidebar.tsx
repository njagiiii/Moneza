"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = ({user}: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 h-screen w-fit flex-col justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]">
        <nav className="flex flex-col gap-4">
            <Link href="/" className='mb-12 cursor-pointer items-center gap-2 flex '>
            <Image 
            src="/icons/logo.svg"
            alt="logo"
            width={34}
            height={34}
            className='size-[24px] max-xl:size-14 sm:size-12'
            />
            <h1 className='2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden'>Moneza</h1>
            </Link>

            {sidebarLinks.map((item) => {

              const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
              return(
                <Link href={item.route} key={item.label} className={cn("flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start", {
                  "bg-bank-gradient" : isActive
                })}>
                  <div className="relative size-6">
                    <Image 
                     src={item.imgURL}
                     alt={item.label}
                     fill
                     className={cn({"brightness-[3] invert-0":isActive})}
                    /> 
                    </div>
                    <p className={cn("text-1xl font-semibold text-black-2 max-xl:hidden ", {
                      "!text-white": isActive
                    })}>{item.label}</p>
                  
                </Link>
              )
            })}
            USER
        </nav>
        {/* FOOTER */}
    </section>
  )
}

export default Sidebar