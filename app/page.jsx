import Link from "next/link"

const Page = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>施工中。。。</h1>
      <p>
        可以访问 <Link href="/posts/hello-nextra">/hello-nextra</Link>
        查看我的第一篇文章。
      </p>
    </div>
  )
}

export default Page
