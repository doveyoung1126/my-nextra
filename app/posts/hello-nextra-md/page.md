---
title: "Hello Nextra MD!"
date: "2023-10-26"
description: "这是我的第一篇使用Nextra构建的博客文章"
tags: ["hello"]
---

# 欢迎来到我的博客！

这是我使用 **Nextra** 和 **Next.js App Router** 创建的第一篇博客文章。

## Nextra 的特性

- ✅ 基于 Markdown/MDX 写作
- ✅ 自动生成路由
- ✅ 响应式设计
- ✅ 代码语法高亮
- ✅ 深色模式支持

## 尝试一些代码

下面是一个简单的 React 组件示例：

```mdx
export function Greeting({ name }) {
  return <h2>你好, {name}!</h2>
}

{/* 使用示例 */}

<Greeting name="Nextra" />
```

```mdx
{/_ Via async components _/}
export async function Stars() {
const response = await fetch('https://api.github.com/repos/shuding/nextra')
const repo = await response.json()
const stars = repo.stargazers_count
return <b>{stars}</b>
}

{/_ Via async functions _/}
export async function getUpdatedAt() {
const response = await fetch('https://api.github.com/repos/shuding/nextra')
const repo = await response.json()
const updatedAt = repo.updated_at
return new Date(updatedAt).toLocaleDateString()
}

<div emoji="🏆">
  Nextra has <Stars /> stars on GitHub! Last repository update{" "}
  {await getUpdatedAt()}.
</div>

export function Greeting({ name }) {
  return <h2>你好, {name} </h2>
}

<Greeting name="Nextra" />
```

感谢阅读我的第一篇文章！
