"use client";

import React from "react";
import CountUp from "react-countup";

export const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        duration={2}
        decimals={2}
        decimal=","
        prefix="KSH "
        end={amount}
      />
    </div>
  );
};
