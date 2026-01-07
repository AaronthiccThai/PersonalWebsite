import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"

const themes: Record<string, { start: string; end: string }> = {
  "/": { start: "#00ff99", end: "#8f94fb" },
  "/about": { start: "#e9a398", end:  "#ead431" },
  "/projects": { start: "#da7bf0", end: "#e3cb9b" },
  "/contact": { start: "#ff6361", end: "#5babf0" },
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  const [theme, setTheme] = useState(themes["/"])

  useEffect(() => {
    setTheme(themes[location.pathname] ?? themes["/"])
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col
                 bg-linear-to-r
                 from-(--bg-start)
                 to-(--bg-end)
                 transition-all duration-500"
      style={{
        ["--bg-start" as any]: theme.start,
        ["--bg-end" as any]: theme.end,
      }}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
