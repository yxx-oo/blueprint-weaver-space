import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowUp, CheckCircle2, Download, Share2, Wrench } from "lucide-react";
import { Chip } from "@/components/wb/page";
import { statusLabel, taskMessages, tasks } from "@/data/mock";

export const Route = createFileRoute("/task/$taskId")({
  loader: ({ params }) => {
    const task = tasks.find((t) => t.id === params.taskId);
    if (!task) throw notFound();
    return { task };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "任务不存在 · WorkBuddy" }, { name: "robots", content: "noindex" }] };
    }
    const { task } = loaderData;
    return {
      meta: [
        { title: `${task.title} · WorkBuddy 任务` },
        { name: "description", content: task.summary },
        { property: "og:title", content: `${task.title} · WorkBuddy 任务` },
        { property: "og:description", content: task.summary },
      ],
    };
  },
  component: TaskDetail,
});

function TaskDetail() {
  const { task } = Route.useLoaderData();

  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between gap-3 border-b border-border px-6 py-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="truncate text-[15px] font-semibold">{task.title}</h1>
              <Chip
                tone={task.status === "done" ? "success" : task.status === "failed" ? "danger" : "info"}
              >
                {statusLabel[task.status]}
              </Chip>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              {task.project} · 更新于 {task.updatedAt}
            </p>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <button className="flex size-8 items-center justify-center rounded-lg transition-colors hover:bg-accent">
              <Share2 className="size-4" />
            </button>
            <button className="flex size-8 items-center justify-center rounded-lg transition-colors hover:bg-accent">
              <Download className="size-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="mx-auto flex max-w-2xl flex-col gap-4">
            {taskMessages.map((m, i) =>
              m.role === "user" ? (
                <div key={i} className="flex justify-end">
                  <p className="max-w-[85%] whitespace-pre-wrap rounded-2xl bg-primary px-4 py-2.5 text-sm text-primary-foreground">
                    {m.content}
                  </p>
                </div>
              ) : m.role === "tool" ? (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3.5 py-2.5 text-xs text-muted-foreground"
                >
                  <Wrench className="size-3.5 shrink-0" />
                  <span className="truncate">{m.content}</span>
                  <CheckCircle2 className="ml-auto size-3.5 text-success-foreground" />
                </div>
              ) : (
                <div key={i} className="flex gap-3">
                  <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                    W
                  </div>
                  <p className="whitespace-pre-wrap text-sm leading-relaxed">{m.content}</p>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="border-t border-border px-6 py-4">
          <div className="mx-auto flex max-w-2xl items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 shadow-card">
            <input
              placeholder="继续追问或补充要求…"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <aside className="hidden w-80 shrink-0 flex-col border-l border-border bg-surface xl:flex">
        <div className="border-b border-border px-5 py-4 text-sm font-medium">执行过程</div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          <ol className="flex flex-col gap-4 text-sm">
            {["理解任务并拆解步骤", "读取数据源", "清洗与透视分析", "生成图表", "撰写周报初稿"].map(
              (step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p>{step}</p>
                    <p className="text-xs text-muted-foreground">已完成 · 用时 {6 + i * 3}s</p>
                  </div>
                </li>
              ),
            )}
          </ol>
          <div className="wb-card mt-6 p-4">
            <p className="text-sm font-medium">交付物</p>
            <p className="mt-2 text-xs text-muted-foreground">本周投放周报.docx · 1.2 MB</p>
            <button className="mt-3 w-full rounded-lg border border-border bg-card px-3 py-2 text-xs transition-colors hover:bg-accent">
              预览
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
