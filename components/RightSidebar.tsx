import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { BankCard } from "./BankCard";

export const RightSidebar = ({
  user,
  transactions,
  banks,
}: RightSidebarProps) => {
  return (
    <aside className="no-scrollbar hidden h-screen max-h-screen flex-col border-l border-gray-200  xl:flex w-[355px] xl:overflow-y-scroll !important">
      <section className="flex flex-col pb-8">
        <div className="h-[120px] w-full bg-gradient-mesh bg-cover bg-no-repeat" />
        <div className="relative flex px-6 max-xl:justify-center">
          <div className=" flex items-center justify-center absolute -top-8 size-24 rounded-full bg-gray-100 border-8 border-white p-2 shadow-profile;">
            <span className="text-5xl font-bold text-blue-400">
              {user.firstName[0]}
            </span>
          </div>
          <div className="flex flex-col pt-24">
            <h1 className="text-xl font-semibold text-gray-900">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-sm font-normal text-gray-600">{user.email}</p>
          </div>
        </div>
      </section>

      {/* my banks section */}
      <section className="flex flex-col justify-between gap-8 px-6 py-8">
        <div className="flex w-full items-center justify-between ">
          <h2 className="font-semibold text-xl text-gray-900">My Banks</h2>
          <Link href="/" className="flex gap-2 items-center justify-center">
            <FiPlus className="top-30 text-gray-600 " />
            <h2 className="text-[15px] text-gray-600 font-semibold">
              Add Bank
            </h2>
          </Link>
        </div>

        {/* bankcards */}
        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard
                key={banks[0].$id}
                account={banks[0]}
                user={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>
            {/* if we have more than one bank cards */}
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard
                  key={banks[1].$id}
                  account={banks[1]}
                  user={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};
