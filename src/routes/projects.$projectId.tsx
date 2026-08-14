import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { FileText, Plus, Users } from "lucide-react";
import { Chip, PageBody, PageHeader } from "@/components/wb/page";
import { libraryFiles, projects, statusLabel, tasks } from "@/data/mock";

export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "项目不存在 · WorkBuddy" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.name} · WorkBuddy 项目` },
        { name: "description", content: project.desc },
        { property: "og:title", content: `${project.name} · WorkBuddy 项目` },
        { property: "og:description", content: project.desc },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const projectTasks = tasks.filter((t) => t.project === project.name);

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <PageHeader
        title={`${project.emoji} ${project.name}`}
        desc={project.desc}
        action={
          <button className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            <Plus className="size-4" /> 新建任务
          </button>
        }
      />
      <PageBody>
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <section>
            <h2 className="mb-3 text-sm font-medium">项目任务</h2>
            <div className="flex flex-col gap-2">
              {(projectTasks.length ? projectTasks : tasks.slice(0, 2)).map((t) => (
                <Link
                  key={t.id}
                  to="/task/$taskId"
                  params={{ taskId: t.id }}
                  className="wb-card block px-4 py-3.5 transition-colors hover:bg-accent"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-medium">{t.title}</p>
                    <Chip
                      tone={
                        t.status === "done" ? "success" : t.status === "failed" ? "danger" : "info"
                      }
                    >
                      {statusLabel[t.status]}
                    </Chip>
                  </div>
                  <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">{t.summary}</p>
                  <p className="mt-2 text-xs text-muted-foreground">更新于 {t.updatedAt}</p>
                </Link>
              ))}
            </div>
          </section>

          <aside className="flex flex-col gap-4">
            <div className="wb-card p-4">
              <p className="mb-3 flex items-center gap-1.5 text-sm font-medium">
                <Users className="size-4" /> 成员
              </p>
              <div className="flex -space-x-2">
                {Array.from({ length: project.members }).map((_, i) => (
                  <div
                    key={i}
                    className="flex size-8 items-center justify-center rounded-full border-2 border-card bg-surface-strong text-xs"
                  >
                    {"楠明晓宇辰佳琳"[i] ?? "友"}
                  </div>
                ))}
              </div>
            </div>
            <div className="wb-card p-4">
              <p className="mb-3 flex items-center gap-1.5 text-sm font-medium">
                <FileText className="size-4" /> 项目资料
              </p>
              <ul className="flex flex-col gap-2">
                {libraryFiles.slice(0, 3).map((f) => (
                  <li key={f.id} className="text-xs">
                    <p className="truncate text-foreground">{f.name}</p>
                    <p className="text-muted-foreground">
                      {f.from} · {f.size}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </PageBody>
    </div>
  );
}
