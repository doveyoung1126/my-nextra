"use client"

import React, { useState } from "react"
// 直接导入 MD 文档，Nextra 会将其处理为 React 组件
import MainContent from "./Default.md"
import EggContent from "./Egg.md"

export default function AboutClient() {
  const [clicks, setClicks] = useState(0)
  const [hint, setHint] = useState<{
    text: string
    x: number
    y: number
  } | null>(null)
  const isUnlocked = clicks >= 5

  const handlePageClick = (e: React.MouseEvent) => {
    // if (isUnlocked) return
    if (clicks > 9) {
      setClicks(0)

      return
    }

    const newCount = clicks + 1
    setClicks(newCount)

    // 随机提示语
    const hints = ["Don't touch me", "再点我要报警了", "别点啦", "？", "????"]
    setHint({
      text: hints[Math.floor(Math.random() * hints.length)],
      x: e.clientX,
      y: e.clientY,
    })

    setTimeout(() => setHint(null), 500)
  }

  return (
    <>
      {/* // cursor-default 确保鼠标是普通箭头，select-none 防止误选文字 */}
      <div
        className="relative min-h-[60vh] cursor-default p-4"
        onClick={handlePageClick}
      >
        {/* 
        关于 SEO：由于 App Router 的 robots 管理较严格，
        且彩蛋内容是客户端动态生成的（初始 HTML 不含彩蛋），
        爬虫在不执行点击逻辑的情况下根本抓不到 EggContent 的 DOM，
        这已经达到了“不被收录”的效果。
      */}

        <article className="prose dark:prose-invert mx-auto cursor-auto">
          {!isUnlocked ? (
            <MainContent />
          ) : (
            <div className="animate-in fade-in zoom-in rounded-lg border-2 border-dashed border-yellow-500 p-6 duration-500">
              <EggContent />
            </div>
          )}
        </article>

        {/* 一闪而过的提示 */}
        {/* {hint && (
          <div
            className="animate-out fade-out slide-out-to-top-4 pointer-events-none fixed font-mono text-sm text-red-400 duration-500"
            style={{ left: hint.x, top: hint.y }}
          >
            {hint.text}
          </div>
        )} */}
        {hint && (
          <div
            key={Math.random()} // 必须用随机 key 确保连续点击时动画能重复触发
            className="animate-hint pointer-events-none fixed z-[9999] font-mono text-sm font-bold text-red-500"
            style={{
              left: hint.x,
              top: hint.y,
            }}
          >
            {hint.text}
          </div>
        )}
      </div>
      {/* 提示 style */}
      <style>{`
  @keyframes floatUpAndOut {
    0% { transform: translate(-50%, 0); opacity: 1; }
    100% { transform: translate(-50%, -50px); opacity: 0; }
  }
  .animate-hint {
    animation: floatUpAndOut 0.6s ease-out forwards;
  }
`}</style>
    </>
  )
}
