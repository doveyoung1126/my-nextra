import { Footer, Layout, Navbar, ThemeSwitch } from "nextra-theme-blog"
import { Banner, Head, Search } from "nextra/components"
import { getPageMap } from "nextra/page-map"
import "nextra-theme-blog/style.css"
import Image from "next/image"
import logo from "../public/logo.png"
import "./globals.css"

export const metadata = {
  title: "Feegr's Blog",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const banner = (
    <Banner storageKey="welcome">
      🎉 Welcome.{" "}
      <a
        href="/posts"
        style={{
          textDecoration: "underline",
          textUnderlinePosition: "from-font",
        }}
      >
        Read more →
      </a>
    </Banner>
  )

  return (
    <html lang="en" suppressHydrationWarning>
      <Head backgroundColor={{ dark: "#0f172a", light: "#f8f7f1" }} />
      <body>
        <Layout banner={banner}>
          <Image src={logo} width={100} height={50} alt="Logo" />
          <Navbar pageMap={await getPageMap()}>
            <Search />
            <ThemeSwitch />
          </Navbar>

          {children}

          <Footer>
            {/* <abbr
              title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
              style={{ cursor: "help" }}
            >
              CC BY-NC 4.0
            </abbr>{" "} */}
            <abbr
              title="What Is Your Attention?"
              style={{
                cursor: "help",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                padding: "4px 8px",
                borderRadius: "6px",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              WIYA
            </abbr>{" "}
            {new Date().getFullYear()} © Feegr
            {/* <a href="/feed.xml" style={{ float: "right" }}>
              RSS
            </a> */}
          </Footer>
        </Layout>
      </body>
    </html>
  )
}
