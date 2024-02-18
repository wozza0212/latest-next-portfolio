import { MDXRemote } from 'next-mdx-remote'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import remarkToc from 'remark-toc'
import useMDXComponents from '../../../../../mdx-components'

export function PostBody({ children }: { children: string }) {
  return (
    <MDXRemote
        options={{
            mdxOptions: {
                remarkPlugins: [
                    // Adds support for GitHub Flavored Markdown
                    remarkGfm,
                    // generates a table of contents based on headings
                    remarkToc,
                ],
                // These work together to add IDs and linkify headings
                rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
            },
        }}
        components={useMDXComponents}
    />
      options={{
        mdxOptions: {
          remarkPlugins: [
            // Adds support for GitHub Flavored Markdown
            remarkGfm,
            // generates a table of contents based on headings
            remarkToc,
          ],
          // These work together to add IDs and linkify headings
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        },
      }}
      components={useMDXComponents}
    />
  )
}