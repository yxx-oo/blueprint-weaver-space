import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, Plus } from "lucide-react";
import { PageBody, PageHeader } from "@/components/wb/page";
import { colleagues } from "@/data/mock";

export const Route = createFileRoute("/colleagues")({
  head: () => ({
    meta: [
      { title: "AI 同事 · WorkBuddy" },
      { name: "description", content: "为不同岗位配置专属 AI 同事，直接把工作交给它们。" },
      { property: "og:title", content: "AI 同事 · WorkBuddy" },
      { property: "og:description", content: "为不同岗位配置专属 AI 同事，直接把工作交给它们。" },
    ],
  }),
  component: ColleaguesPage,
});

function ColleaguesPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <PageHeader
        title="AI 同事"
        desc="每位同事拥有专属技能、资料与工作习惯"
        action={
          <button className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            <Plus className="size-4" /> 创建同事
          </button>
        }
      />
      <PageBody>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {colleagues.map((c) => (
            <div key={c.id} className="wb-card flex flex-col p-5">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-surface-strong text-2xl">
                  {c.emoji}
                </span>
                <div>
                  <p className="text-sm font-semibold">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.role}</p>
                </div>
              </div>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90">
                <MessageSquare className="size-3.5" /> 找 TA 干活
              </button>
            </div>
          ))}
        </div>
      </PageBody>
    </div>
  );
}
