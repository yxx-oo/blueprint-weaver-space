import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, Users } from "lucide-react";
import { PageBody, PageHeader } from "@/components/wb/page";
import { projects } from "@/data/mock";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "项目 · WorkBuddy" },
      { name: "description", content: "在项目空间里沉淀资料、任务与团队协作上下文。" },
      { property: "og:title", content: "项目 · WorkBuddy" },
      { property: "og:description", content: "在项目空间里沉淀资料、任务与团队协作上下文。" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <PageHeader
        title="项目"
        desc="每个项目都有独立的资料、成员与任务上下文"
        action={
          <button className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            <Plus className="size-4" /> 新建项目
          </button>
        }
      />
      <PageBody>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.id}
              to="/projects/$projectId"
              params={{ projectId: p.id }}
              className="wb-card flex flex-col p-4 transition-colors hover:bg-accent"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-surface-strong text-xl">
                  {p.emoji}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{p.name}</p>
                  <p className="text-xs text-muted-foreground">更新于 {p.updatedAt}</p>
                </div>
              </div>
              <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Users className="size-3.5" /> {p.members} 位成员
                </span>
                <span>{p.tasks} 个任务</span>
              </div>
            </Link>
          ))}
        </div>
      </PageBody>
    </div>
  );
}
