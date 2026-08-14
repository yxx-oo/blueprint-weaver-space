import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { PageBody, PageHeader } from "@/components/wb/page";
import { skills } from "@/data/mock";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "技能市场 · WorkBuddy" },
      { name: "description", content: "安装技能，让 AI 同事具备做表、调研、出图等专业能力。" },
      { property: "og:title", content: "技能市场 · WorkBuddy" },
      { property: "og:description", content: "安装技能，让 AI 同事具备做表、调研、出图等专业能力。" },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  const categories = ["全部", ...Array.from(new Set(skills.map((s) => s.category)))];

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <PageHeader
        title="技能"
        desc="安装后即可在任务中被自动调用"
        action={
          <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm">
            <Search className="size-4 text-muted-foreground" />
            <input
              placeholder="搜索技能"
              className="w-40 bg-transparent outline-none placeholder:text-muted-foreground"
            />
          </div>
        }
      />
      <PageBody>
        <div className="mb-5 flex flex-wrap gap-2">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:bg-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((s) => (
            <div key={s.id} className="wb-card flex flex-col p-4">
              <div className="flex items-start gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-surface-strong text-xl">
                  {s.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{s.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {s.author} · {s.installs} 次安装
                  </p>
                </div>
              </div>
              <p className="mt-3 line-clamp-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
              <button
                className={`mt-4 w-full rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                  s.installed
                    ? "border border-border bg-card text-muted-foreground hover:bg-accent"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                {s.installed ? "已安装" : "安装"}
              </button>
            </div>
          ))}
        </div>
      </PageBody>
    </div>
  );
}
