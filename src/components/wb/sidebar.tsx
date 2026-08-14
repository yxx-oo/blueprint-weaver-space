import { Link, useRouterState } from "@tanstack/react-router";
import {
  Compass,
  FolderKanban,
  Home,
  Library,
  Plug,
  Puzzle,
  Search,
  Settings,
  Users,
  Plus,
} from "lucide-react";
import { projects } from "@/data/mock";

const nav = [
  { to: "/", label: "首页", icon: Home },
  { to: "/projects", label: "项目", icon: FolderKanban },
  { to: "/colleagues", label: "AI 同事", icon: Users },
  { to: "/skills", label: "技能", icon: Puzzle },
  { to: "/discover", label: "发现", icon: Compass },
  { to: "/connectors", label: "连接器", icon: Plug },
  { to: "/library", label: "资料库", icon: Library },
] as const;

export function WbSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar md:flex">
      <div className="flex items-center gap-2 px-4 py-4">
        <div className="flex size-7 items-center justify-center rounded-lg bg-sidebar-primary text-sm font-bold text-sidebar-primary-foreground">
          W
        </div>
        <span className="text-[15px] font-semibold tracking-tight">WorkBuddy</span>
      </div>

      <div className="px-3 pb-2">
        <Link
          to="/"
          className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-sidebar-primary px-3 py-2 text-sm font-medium text-sidebar-primary-foreground transition-opacity hover:opacity-90"
        >
          <Plus className="size-4" /> 新建任务
        </Link>
        <button className="mt-2 flex w-full items-center gap-2 rounded-lg border border-sidebar-border bg-background px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent">
          <Search className="size-4" /> 搜索
        </button>
      </div>

      <nav className="flex flex-col gap-0.5 px-3 py-2">
        {nav.map(({ to, label, icon: Icon }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className={`wb-nav-item hover:bg-sidebar-accent ${active ? "wb-nav-item-active" : ""}`}
            >
              <Icon className="size-4" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-2 min-h-0 flex-1 overflow-y-auto px-3 pb-3">
        <p className="px-2 py-2 text-xs font-medium text-muted-foreground">最近项目</p>
        <div className="flex flex-col gap-0.5">
          {projects.map((p) => (
            <Link
              key={p.id}
              to="/projects/$projectId"
              params={{ projectId: p.id }}
              className={`wb-nav-item hover:bg-sidebar-accent ${
                pathname === `/projects/${p.id}` ? "wb-nav-item-active" : ""
              }`}
            >
              <span className="text-base leading-none">{p.emoji}</span>
              <span className="truncate">{p.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-sidebar-accent">
          <div className="flex size-7 items-center justify-center rounded-full bg-surface-strong text-xs font-medium">
            楠
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">王楠</p>
            <p className="truncate text-xs text-muted-foreground">团队版 · 剩余 820 次</p>
          </div>
          <Settings className="size-4 text-muted-foreground" />
        </div>
      </div>
    </aside>
  );
}
