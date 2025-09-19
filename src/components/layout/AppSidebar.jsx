import { useState } from "react";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  FolderOpen, 
  BookOpen,
  Star,
  Clock,
  User,
  Settings,
  Building2,
  FileText,
  MessageSquare
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    group: "Favorites",
    items: [
      { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
      { title: "Projects", url: "/projects", icon: FolderOpen },
    ]
  },
  {
    group: "Recently",
    items: [
      { title: "Overview", url: "/overview", icon: LayoutDashboard },
      { title: "Projects", url: "/projects-recent", icon: FolderOpen },
    ]
  },
  {
    group: "Dashboards", 
    items: [
      { title: "Default", url: "/dashboard", icon: LayoutDashboard, active: true },
      { title: "eCommerce", url: "/ecommerce", icon: ShoppingCart },
      { title: "Projects", url: "/projects-dash", icon: FolderOpen },
      { title: "Online Courses", url: "/courses", icon: BookOpen },
    ]
  },
  {
    group: "Pages",
    items: [
      { title: "User Profile", url: "/profile", icon: User },
      { title: "Account", url: "/account", icon: Settings },
      { title: "Corporate", url: "/corporate", icon: Building2 },
      { title: "Blog", url: "/blog", icon: FileText },
      { title: "Social", url: "/social", icon: MessageSquare },
    ]
  }
];

export function AppSidebar() {
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Star className="h-4 w-4" />
          </div>
          {state !== "collapsed" && (
            <div className="text-sidebar-foreground font-semibold">
              ByeWind
            </div>
          )}
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        {menuItems.map((section, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{section.group}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild
                      isActive={item.active}
                      className="transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                      <NavLink 
                        to={item.url}
                        className={({ isActive }) =>
                          isActive 
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                            : "text-sidebar-foreground"
                        }
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}