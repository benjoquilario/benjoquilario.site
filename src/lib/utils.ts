import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const lowerCaseName = (name: string) => {
  if (name) {
    const names = name.split(" ")
    const namesUpper = []

    for (const name of names) {
      namesUpper.push(name.replace(name[0] as string, name[0]?.toLowerCase()))
    }

    return namesUpper.join("")
  }
}
