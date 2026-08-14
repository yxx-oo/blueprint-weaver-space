import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUp, AtSign, Paperclip, Puzzle, Sparkles } from "lucide-react";
import { useState } from "react";
import { Chip } from "@/components/wb/page";
import { quickPrompts, skills, statusLabel, tasks } from "@/data/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WorkBuddy · AI 智能体工作台" },
      {
        name: "description",
        content: "WorkBuddy 把项目、任务、技能与连接器整合到一处，让 AI 同事替你完成日常工作。",
      },
      { property: "og:title", content: "WorkBuddy · AI 智能体工作台" },
      {
        property: "og:description",
        content: "一句话下达任务，AI 同事自动调用技能与连接器完成并交付结果。",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [value, setValue] = useState("");

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="mx-auto flex min-h-full w-full max-w-3xl flex-col justify-center px-6 py-14">
        <div className="text-center">
          <div className="mx-auto mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Sparkles className="size-6" />
          </div>
          <h1 className="text-[28px] font-semibold tracking-tight">下午好，王楠</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            告诉我你想完成什么，我会调用技能和连接器帮你做完。
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-3 shadow-composer">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={3}
            placeholder="给 WorkBuddy 布置一个任务，例如：整理本周投放数据并生成周报"
            className="w-full resize-none bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground"
          />
          <div className="flex items-center justify-between px-1 pt-1">
            <div className="flex items-center gap-1 text-muted-foreground">
              <button className="flex size-8 items-center justify-center rounded-lg transition-colors hover:bg-accent">
                <Paperclip className="size-4" />
              </button>
              <button className="flex size-8 items-center justify-center rounded-lg transition-colors hover:bg-accent">
                <AtSign className="size-4" />
              </button>
              <button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs transition-colors hover:bg-accent">
                <Puzzle className="size-4" /> 技能
              </button>
            </div>
            <button
              className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
              disabled={!value.trim()}
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {quickPrompts.map((q) => (
            <button
              key={q.label}
              onClick={() => setValue(q.label)}
              className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <span>{q.emoji}</span>
              {q.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-medium">最近任务</h2>
              <Link to="/projects" className="text-xs text-muted-foreground hover:text-foreground">
                全部
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              {tasks.slice(0, 4).map((t) => (
                <Link
                  key={t.id}
                  to="/task/$taskId"
                  params={{ taskId: t.id }}
                  className="wb-card block px-3.5 py-3 transition-colors hover:bg-accent"
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
                  <p className="mt-1 truncate text-xs text-muted-foreground">
                    {t.project} · {t.updatedAt}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-medium">常用技能</h2>
              <Link to="/skills" className="text-xs text-muted-foreground hover:text-foreground">
                技能市场
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              {skills
                .filter((s) => s.installed)
                .map((s) => (
                  <div key={s.id} className="wb-card flex items-center gap-3 px-3.5 py-3">
                    <span className="text-lg">{s.emoji}</span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{s.name}</p>
                      <p className="truncate text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
