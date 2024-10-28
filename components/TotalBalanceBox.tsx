
import React from "react";
import { AnimatedCounter } from "./AnimatedCounter";
import { formatAmount } from "@/lib/utils";
import { DoughnutChart } from "./DoughnutChart";



export const TotalBalanceBox = ({accounts=[], totalBanks, totalCurrentBalance}: TotalBalanceBoxProps) => {
  return (
    <section className="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6">
      <div className="flex size-full max-w-[100px] items-center sm:max-w-[120px]">
       <DoughnutChart accounts={accounts}/>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="font-semibold text-gray-900 text-18">
          {totalBanks} Bank Accounts
        </h2>
        <div className="flex flex-col gap-2">
          <p className="text-gray-600 text-md font-medium leading-[20px]">
            Total Current Balance
          </p>
          <div className="font-semibold text-gray-900 leading-[30px] flex items-center gap-2 justify-center text-md ">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  )
}


