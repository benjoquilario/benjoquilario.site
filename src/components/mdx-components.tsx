"use client"
import Image from "next/image"
import type { MDXComponents } from "mdx/types"
import { useMDXComponent } from "next-contentlayer/hooks"

const components = {
  Image,
} as MDXComponents

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code)

  return <MDXContent components={components} />
}
