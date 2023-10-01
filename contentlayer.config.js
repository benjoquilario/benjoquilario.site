import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeCodeTitles from "rehype-code-titles"
import rehypeImgSize from "rehype-img-size"
import rehypeSlug from "rehype-slug"
import remarkExternalLinks from "remark-external-links"
import remarkGfm from "remark-gfm"
import remarkUnwrapImages from "remark-unwrap-images"
import rehypePrettyCode from "rehype-pretty-code"
import { defineDocumentType, makeSource } from "contentlayer/source-files"
import readingTime from "reading-time"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkExternalLinks, remarkGfm, remarkUnwrapImages],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      // rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted")
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"]
          },
        },
      ],
      [
        rehypeImgSize,
        {
          dir: "public",
        },
      ],
    ],
  },
})
