import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import qs from "query-string"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KSH",
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}
