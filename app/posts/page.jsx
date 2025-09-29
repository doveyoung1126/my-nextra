import Link from "next/link"
import { PostCard } from "nextra-theme-blog"
import { getPosts, getTags } from "./get-posts"

export const metadata = {
  title: "文章",
}

export default async function PostsPage() {
  const tags = await getTags()
  const posts = await getPosts()
  const allTags = Object.create(null)
  console.log(tags)
  for (const tag of tags) {
    allTags[tag] ??= 0
    allTags[tag] += 1
  }
  return (
    <>
      <div data-pagefind-ignore="all">
        <h1>{metadata.title}</h1>
        <div
          className="not-prose"
          style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}
        >
          {tags.length !== 0 &&
            Object.entries(allTags).map(([tag, count]) => (
              <Link key={tag} href={`/tags/${tag}`} className="nextra-tag">
                {tag} ({count})
              </Link>
            ))}
        </div>
        {posts.map((post) => (
          <PostCard key={post.route} post={post} />
        ))}
      </div>
    </>
  )
}
