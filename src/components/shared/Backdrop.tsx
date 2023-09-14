"use client"

import React from "react"
import { cn } from "@/lib/utils"

type BackdropProps = {
  children: React.ReactNode
  className?: string
}

const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(
  (props, ref) => (
    <div
      ref={ref}
      className={cn(
        props.className,
        "fixed left-0 top-0 z-50 !m-0 flex min-h-screen w-full animate-[opacity_0.5s_ease-in-out] items-center justify-center bg-gradient-to-r from-[#00000080] to-[#00000080]"
      )}
    >
      {props.children}
    </div>
  )
)

Backdrop.displayName = "Backdrop"

export default Backdrop
