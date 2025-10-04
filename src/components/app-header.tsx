"use client"

import { Bell, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AppHeader() {
  return (
    <header className="flex h-12 w-full shrink-0 items-center gap-2 border-b bg-background px-4">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <span className="text-sm font-bold">A</span>
        </div>
        <span className="font-semibold">App Name</span>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Settings</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <User className="h-4 w-4" />
          <span className="sr-only">User Profile</span>
        </Button>
      </div>
    </header>
  )
}
