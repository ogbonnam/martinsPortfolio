// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    summary: {type: 'string', required: true},
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/${post._raw.flattenedPath}` },
  },
}))



export default makeSource({ contentDirPath: 'data', documentTypes: [Post] })