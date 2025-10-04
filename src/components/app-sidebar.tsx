"use client"

import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Users,
  Settings,
  ShoppingCart,
  Package,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

// Business navigation items
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart3,
  },
  {
    title: "Reports",
    url: "#",
    icon: FileText,
  },
  {
    title: "Customers",
    url: "#",
    icon: Users,
  },
  {
    title: "Orders",
    url: "#",
    icon: ShoppingCart,
  },
  {
    title: "Products",
    url: "#",
    icon: Package,
  },
  {
    title: "Performance",
    url: "#",
    icon: TrendingUp,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const { open, toggleSidebar } = useSidebar()

  return (
    <Sidebar side="left" collapsible="icon" className="relative">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Business</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Toggle button on the right edge */}
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-6 z-20 flex h-6 w-6 translate-x-1/2 items-center justify-center rounded-full border bg-background p-0 shadow-lg hover:shadow-xl"
        onClick={toggleSidebar}
      >
        {open ? <ChevronLeft className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
      </Button>
    </Sidebar>
  )
}
