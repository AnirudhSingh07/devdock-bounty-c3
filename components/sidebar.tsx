"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BarChart, Calendar, Dumbbell, Home, MessageSquare, Settings, Users } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Workouts",
      icon: Dumbbell,
      href: "/dashboard/workouts",
      active: pathname === "/dashboard/workouts",
    },
    {
      label: "Schedule",
      icon: Calendar,
      href: "/dashboard/schedule",
      active: pathname === "/dashboard/schedule",
    },
    {
      label: "Buddies",
      icon: Users,
      href: "/dashboard/buddies",
      active: pathname === "/dashboard/buddies",
    },
    {
      label: "Messages",
      icon: MessageSquare,
      href: "/dashboard/messages",
      active: pathname === "/dashboard/messages",
    },
    {
      label: "Analytics",
      icon: BarChart,
      href: "/dashboard/analytics",
      active: pathname === "/dashboard/analytics",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
      active: pathname === "/dashboard/settings",
    },
  ]

  return (
    <div className="hidden md:flex h-screen w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Dumbbell className="h-6 w-6 text-primary" />
          <span className="text-xl">Fitness Buddy</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          {routes.map((route) => (
            <Link key={route.href} href={route.href}>
              <Button variant={route.active ? "secondary" : "ghost"} className="w-full justify-start">
                <route.icon className="mr-2 h-4 w-4" />
                {route.label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <div className="flex items-center gap-2 rounded-lg bg-muted p-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            A
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Alex Johnson</p>
            <p className="text-xs text-muted-foreground">alex@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

