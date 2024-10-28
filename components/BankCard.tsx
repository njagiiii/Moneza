import React from "react";
import Link from "next/link";
import { formatAmount } from "@/lib/utils";
import Image from "next/image";

export const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      {/* make the cards clickable */}
      {/* create layout */}
      <Link
        href="/"
        className="relative flex h-[190px] w-full max-w-[320px] justify-between rounded-[20px] border border-white bg-bank-gradient shadow-creditCard backdrop-blur-[6px]"
      >
        {/* create content */}
        <div className="relative z-10 flex size-full max-w-[228px] flex-col justify-between rounded-l-[20px] bg-gray-700 bg-bank-gradient px-5 pb-4 pt-5">
          <div>
            <h1 className="text-lg font-semibold text-white">
              {account.name || "Makena"}
            </h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-md font-semibold text-white">Makena</h1>
              <h2 className="text-sm font-semibold text-white">◍◍ / ◍◍</h2>

            </div>
            <p className=" text-xs font-semibold tracking-[1.1px] text-white">
            ◍◍◍◍ ◍◍◍◍ ◍◍◍◍ <span className="">{account.mask} 1234</span>{/* last numbers of the card*/}
            </p>
          </article>
        </div>

        <div className="flex size-full flex-1 flex-col items-end justify-between rounded-r-[20px] bg-bank-gradient bg-cover bg-center bg-no-repeat py-5 pr-6">
            <Image 
            src="/icons/Paypass.svg"
            width={20}
            height={24}
            alt="pay"
            />
            <Image 
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
            />
        </div>
        <Image
        src="/icons/lines.png"
        width={316}
        height={190}
        alt="lines"
        className="absolute top-0 left-0"
         />
      </Link>
      {/* COPY THE CARD NUMBERS */}
    </div>
  );
};
