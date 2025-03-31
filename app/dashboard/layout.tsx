import { Dumbbell } from "lucide-react"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <Sidebar />
      <div className="flex-1">
        <header className="border-b bg-background">
          <div className="flex h-16 items-center px-4 md:px-6">
            <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
              <Dumbbell className="h-6 w-6 text-primary" />
              <span className="text-xl hidden md:inline-block">Fitness Buddy</span>
            </Link>
            <nav className="ml-auto flex items-center gap-4 md:gap-6">
              <Link href="/dashboard/notifications" className="text-sm font-medium">
                Notifications
              </Link>
              <Link href="/dashboard/messages" className="text-sm font-medium">
                Messages
              </Link>
              <Link href="/dashboard/profile" className="relative">
                <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                  <img
                    className="aspect-square h-full w-full"
                    src="/placeholder.svg?height=32&width=32"
                    alt="Profile"
                  />
                </span>
                <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-primary" />
              </Link>
            </nav>
          </div>
        </header>
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

