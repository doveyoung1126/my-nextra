// app/about/page.tsx
import { Metadata } from "next"
import AboutClient from "./AboutClient"

// 静态 Meta 数据
export const metadata: Metadata = {
  title: "关于我",
  description: "这是我的个人介绍",
}

export default function Page() {
  return <AboutClient />
}
