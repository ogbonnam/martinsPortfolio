// app/posts/[slug]/page.tsx
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from "next-contentlayer/hooks";


export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}



const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  const Content = useMDXComponent(post.body.code)

  return (
    <article className="w-full py-8 text-wrap">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-5xl font-bold text-black leading-normal">{post.title}</h1>
      </div>
      <div className='flex flex-wrap w-screen'>
        <div className='w-1/4'>some div</div>
        <div className='[&>*]:mb-3 [&>*:last-child]:mb-0 w-3/4 text-gray-900 text-2xl break-all text-wrap'>
          <Content className="text-wrap break-all"  />
        </div>
      </div>
    </article>
  )
}

export default PostLayout